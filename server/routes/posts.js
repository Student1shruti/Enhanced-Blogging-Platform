import express from 'express';
import Post from '../models/Post.js';
import User from '../models/User.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get all published posts with pagination and filtering
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      author,
      search,
      sortBy = 'publishedAt',
      sortOrder = 'desc'
    } = req.query;

    const query = { status: 'published' };

    // Add filters
    if (category && category !== 'all') {
      query.category = category;
    }

    if (author) {
      query.author = author;
    }

    if (search) {
      query.$text = { $search: search };
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const posts = await Post.find(query)
      .populate('author', 'username fullName avatar')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Post.countDocuments(query);

    res.json({
      posts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalPosts: total,
        hasNext: skip + posts.length < total,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
});

// Get single post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'username fullName avatar bio')
      .populate('likes', 'username fullName');

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Increment view count
    post.views += 1;
    await post.save();

    res.json(post);
  } catch (error) {
    console.error('Get post error:', error);
    res.status(500).json({ message: 'Failed to fetch post' });
  }
});

// Create new post
router.post('/', authenticateToken, async (req, res) => {
  try {
    const {
      title,
      content,
      excerpt,
      category,
      tags,
      coverImage,
      status = 'draft'
    } = req.body;

    const post = new Post({
      title,
      content,
      excerpt,
      category,
      tags: tags || [],
      coverImage,
      status,
      author: req.user._id
    });

    await post.save();
    await post.populate('author', 'username fullName avatar');

    // Emit real-time event for new published posts
    if (status === 'published') {
      const io = req.app.get('io');
      io.emit('new-post', {
        post: post.toJSON(),
        message: `New post published: "${title}" by ${req.user.fullName}`
      });
    }

    res.status(201).json({
      message: 'Post created successfully',
      post
    });
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ message: 'Failed to create post', error: error.message });
  }
});

// Update post
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if user owns the post or is admin
    if (post.author.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(403).json({ message: 'Not authorized to update this post' });
    }

    const {
      title,
      content,
      excerpt,
      category,
      tags,
      coverImage,
      status
    } = req.body;

    // Update fields
    if (title !== undefined) post.title = title;
    if (content !== undefined) post.content = content;
    if (excerpt !== undefined) post.excerpt = excerpt;
    if (category !== undefined) post.category = category;
    if (tags !== undefined) post.tags = tags;
    if (coverImage !== undefined) post.coverImage = coverImage;
    if (status !== undefined) post.status = status;

    await post.save();
    await post.populate('author', 'username fullName avatar');

    // Emit real-time event if post was just published
    if (status === 'published' && post.publishedAt && 
        new Date(post.publishedAt).getTime() === new Date(post.updatedAt).getTime()) {
      const io = req.app.get('io');
      io.emit('new-post', {
        post: post.toJSON(),
        message: `New post published: "${title}" by ${req.user.fullName}`
      });
    }

    res.json({
      message: 'Post updated successfully',
      post
    });
  } catch (error) {
    console.error('Update post error:', error);
    res.status(500).json({ message: 'Failed to update post' });
  }
});

// Delete post
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if user owns the post or is admin
    if (post.author.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Delete post error:', error);
    res.status(500).json({ message: 'Failed to delete post' });
  }
});

// Like/Unlike post
router.post('/:id/like', authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const userId = req.user._id;
    const isLiked = post.likes.includes(userId);

    if (isLiked) {
      post.likes = post.likes.filter(id => id.toString() !== userId.toString());
    } else {
      post.likes.push(userId);
    }

    await post.save();

    res.json({
      message: isLiked ? 'Post unliked' : 'Post liked',
      likesCount: post.likes.length,
      isLiked: !isLiked
    });
  } catch (error) {
    console.error('Like post error:', error);
    res.status(500).json({ message: 'Failed to like/unlike post' });
  }
});

// Get categories
router.get('/meta/categories', async (req, res) => {
  try {
    const categories = await Post.distinct('category', { status: 'published' });
    res.json(categories);
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

// Get user's posts (drafts and published)
router.get('/user/:userId', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.params;
    const { page = 1, limit = 10, status } = req.query;

    // Check if user is requesting their own posts or is admin
    if (userId !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const query = { author: userId };
    if (status) {
      query.status = status;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const posts = await Post.find(query)
      .populate('author', 'username fullName avatar')
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Post.countDocuments(query);

    res.json({
      posts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalPosts: total
      }
    });
  } catch (error) {
    console.error('Get user posts error:', error);
    res.status(500).json({ message: 'Failed to fetch user posts' });
  }
});

export default router;