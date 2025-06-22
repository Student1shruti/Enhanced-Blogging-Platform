import express from 'express';
import User from '../models/User.js';
import Post from '../models/Post.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get user's published posts count
    const postsCount = await Post.countDocuments({ 
      author: user._id, 
      status: 'published' 
    });

    // Get total likes on user's posts
    const userPosts = await Post.find({ 
      author: user._id, 
      status: 'published' 
    }).select('likes views');

    const totalLikes = userPosts.reduce((sum, post) => sum + post.likes.length, 0);
    const totalViews = userPosts.reduce((sum, post) => sum + post.views, 0);

    res.json({
      user,
      stats: {
        postsCount,
        totalLikes,
        totalViews
      }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Failed to fetch user' });
  }
});

// Update user profile
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if user is updating their own profile or is admin
    if (id !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(403).json({ message: 'Not authorized to update this profile' });
    }

    const { fullName, bio, avatar } = req.body;
    
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    if (fullName !== undefined) user.fullName = fullName;
    if (bio !== undefined) user.bio = bio;
    if (avatar !== undefined) user.avatar = avatar;

    await user.save();

    res.json({
      message: 'Profile updated successfully',
      user: user.toJSON()
    });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ message: 'Failed to update profile' });
  }
});

// Get all users (admin only)
router.get('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 20, search } = req.query;
    
    const query = {};
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: 'i' } },
        { username: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const users = await User.find(query)
      .select('-password')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await User.countDocuments(query);

    res.json({
      users,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalUsers: total
      }
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

// Delete user (admin only)
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent admin from deleting themselves
    if (id === req.user._id.toString()) {
      return res.status(400).json({ message: 'Cannot delete your own account' });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete user's posts and comments
    await Post.deleteMany({ author: id });
    await Comment.deleteMany({ author: id });
    
    // Remove user from likes
    await Post.updateMany(
      { likes: id },
      { $pull: { likes: id } }
    );

    await User.findByIdAndDelete(id);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
});

export default router;