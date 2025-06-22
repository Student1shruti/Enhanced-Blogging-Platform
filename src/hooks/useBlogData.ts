import { useState, useEffect } from 'react';
import { postsAPI, commentsAPI } from '../services/api';
import socketService from '../services/socket';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  author: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  coverImage?: string;
  publishedAt: string;
  updatedAt: string;
  likes: string[];
  views: number;
  status: 'draft' | 'published';
}

interface Comment {
  _id: string;
  content: string;
  author: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
  };
  post: string;
  likes: string[];
  createdAt: string;
  isEdited: boolean;
  editedAt?: string;
}

export const useBlogData = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    loadInitialData();
    setupSocketListeners();

    return () => {
      // Clean up socket listeners
      socketService.off('new-post');
      socketService.off('new-comment');
    };
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      
      // Load posts and categories in parallel
      const [postsResponse, categoriesResponse] = await Promise.all([
        postsAPI.getPosts({ limit: 50 }),
        postsAPI.getCategories()
      ]);
      
      setPosts(postsResponse.data.posts);
      setCategories(categoriesResponse.data);
    } catch (error) {
      console.error('Failed to load initial data:', error);
    } finally {
      setLoading(false);
    }
  };

  const setupSocketListeners = () => {
    // Listen for new posts
    socketService.on('new-post', (data: { post: BlogPost; message: string }) => {
      setPosts(prev => [data.post, ...prev]);
      
      // Show notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('New Blog Post', {
          body: data.message,
          icon: '/blog-icon.svg'
        });
      }
    });

    // Listen for new comments
    socketService.on('new-comment', (data: { comment: Comment; postId: string }) => {
      setComments(prev => [data.comment, ...prev]);
    });
  };

  const savePost = async (postData: Omit<BlogPost, '_id' | 'publishedAt' | 'updatedAt' | 'author' | 'likes' | 'views'>) => {
    try {
      const response = await postsAPI.createPost(postData);
      const newPost = response.data.post;
      
      setPosts(prev => [newPost, ...prev]);
      return newPost;
    } catch (error) {
      console.error('Failed to save post:', error);
      throw error;
    }
  };

  const updatePost = async (id: string, updates: Partial<BlogPost>) => {
    try {
      const response = await postsAPI.updatePost(id, updates);
      const updatedPost = response.data.post;
      
      setPosts(prev => prev.map(post => 
        post._id === id ? updatedPost : post
      ));
      
      return updatedPost;
    } catch (error) {
      console.error('Failed to update post:', error);
      throw error;
    }
  };

  const deletePost = async (id: string) => {
    try {
      await postsAPI.deletePost(id);
      setPosts(prev => prev.filter(post => post._id !== id));
      setComments(prev => prev.filter(comment => comment.post !== id));
    } catch (error) {
      console.error('Failed to delete post:', error);
      throw error;
    }
  };

  const likePost = async (postId: string, userId: string) => {
    try {
      await postsAPI.likePost(postId);
      
      setPosts(prev => prev.map(post => {
        if (post._id === postId) {
          const isLiked = post.likes.includes(userId);
          return {
            ...post,
            likes: isLiked 
              ? post.likes.filter(id => id !== userId)
              : [...post.likes, userId]
          };
        }
        return post;
      }));
    } catch (error) {
      console.error('Failed to like post:', error);
      throw error;
    }
  };

  const addComment = async (postId: string, content: string) => {
    try {
      const response = await commentsAPI.createComment({ content, postId });
      const newComment = response.data.comment;
      
      setComments(prev => [newComment, ...prev]);
      return newComment;
    } catch (error) {
      console.error('Failed to add comment:', error);
      throw error;
    }
  };

  const likeComment = async (commentId: string, userId: string) => {
    try {
      await commentsAPI.likeComment(commentId);
      
      setComments(prev => prev.map(comment => {
        if (comment._id === commentId) {
          const isLiked = comment.likes.includes(userId);
          return {
            ...comment,
            likes: isLiked 
              ? comment.likes.filter(id => id !== userId)
              : [...comment.likes, userId]
          };
        }
        return comment;
      }));
    } catch (error) {
      console.error('Failed to like comment:', error);
      throw error;
    }
  };

  const getPostComments = async (postId: string) => {
    try {
      const response = await commentsAPI.getComments(postId);
      return response.data.comments;
    } catch (error) {
      console.error('Failed to get comments:', error);
      return [];
    }
  };

  const refreshPosts = async () => {
    try {
      const response = await postsAPI.getPosts({ limit: 50 });
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Failed to refresh posts:', error);
    }
  };

  return {
    posts,
    comments,
    categories,
    loading,
    savePost,
    updatePost,
    deletePost,
    likePost,
    addComment,
    likeComment,
    getPostComments,
    refreshPosts,
  };
};