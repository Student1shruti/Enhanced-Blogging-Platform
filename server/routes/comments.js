import express from 'express';
import Comment from '../models/Comment.js';
import Post from '../models/Post.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get comments for a post
router.get('/post/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    const { page = 1, limit = 20 } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const comments = await Comment.find({ post: postId })
      .populate('author', 'username fullName avatar')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Comment.countDocuments({ post: postId });

    res.json({
      comments,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalComments: total
      }
    });
  } catch (error) {
    console.error('Get comments error:', error);
    res.status(500).json({ message: 'Failed to fetch comments' });
  }
});

// Create comment
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { content, postId } = req.body;

    // Check if post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = new Comment({
      content,
      post: postId,
      author: req.user._id
    });

    await comment.save();
    await comment.populate('author', 'username fullName avatar');

    // Emit real-time event
    const io = req.app.get('io');
    io.to(`post-${postId}`).emit('new-comment', {
      comment: comment.toJSON(),
      postId
    });

    res.status(201).json({
      message: 'Comment created successfully',
      comment
    });
  } catch (error) {
    console.error('Create comment error:', error);
    res.status(500).json({ message: 'Failed to create comment' });
  }
});

// Update comment
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { content } = req.body;
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if user owns the comment
    if (comment.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this comment' });
    }

    comment.content = content;
    comment.isEdited = true;
    comment.editedAt = new Date();

    await comment.save();
    await comment.populate('author', 'username fullName avatar');

    res.json({
      message: 'Comment updated successfully',
      comment
    });
  } catch (error) {
    console.error('Update comment error:', error);
    res.status(500).json({ message: 'Failed to update comment' });
  }
});

// Delete comment
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if user owns the comment or is admin
    if (comment.author.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(403).json({ message: 'Not authorized to delete this comment' });
    }

    await Comment.findByIdAndDelete(req.params.id);

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Delete comment error:', error);
    res.status(500).json({ message: 'Failed to delete comment' });
  }
});

// Like/Unlike comment
router.post('/:id/like', authenticateToken, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    const userId = req.user._id;
    const isLiked = comment.likes.includes(userId);

    if (isLiked) {
      comment.likes = comment.likes.filter(id => id.toString() !== userId.toString());
    } else {
      comment.likes.push(userId);
    }

    await comment.save();

    res.json({
      message: isLiked ? 'Comment unliked' : 'Comment liked',
      likesCount: comment.likes.length,
      isLiked: !isLiked
    });
  } catch (error) {
    console.error('Like comment error:', error);
    res.status(500).json({ message: 'Failed to like/unlike comment' });
  }
});

export default router;