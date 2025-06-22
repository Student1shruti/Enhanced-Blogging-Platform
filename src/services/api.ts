import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData: any) => api.post('/auth/register', userData),
  login: (credentials: any) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
  refreshToken: () => api.post('/auth/refresh'),
};

// Posts API
export const postsAPI = {
  getPosts: (params?: any) => api.get('/posts', { params }),
  getPost: (id: string) => api.get(`/posts/${id}`),
  createPost: (postData: any) => api.post('/posts', postData),
  updatePost: (id: string, postData: any) => api.put(`/posts/${id}`, postData),
  deletePost: (id: string) => api.delete(`/posts/${id}`),
  likePost: (id: string) => api.post(`/posts/${id}/like`),
  getCategories: () => api.get('/posts/meta/categories'),
  getUserPosts: (userId: string, params?: any) => api.get(`/posts/user/${userId}`, { params }),
};

// Comments API
export const commentsAPI = {
  getComments: (postId: string, params?: any) => api.get(`/comments/post/${postId}`, { params }),
  createComment: (commentData: any) => api.post('/comments', commentData),
  updateComment: (id: string, commentData: any) => api.put(`/comments/${id}`, commentData),
  deleteComment: (id: string) => api.delete(`/comments/${id}`),
  likeComment: (id: string) => api.post(`/comments/${id}/like`),
};

// Users API
export const usersAPI = {
  getUser: (id: string) => api.get(`/users/${id}`),
  updateUser: (id: string, userData: any) => api.put(`/users/${id}`, userData),
  getUsers: (params?: any) => api.get('/users', { params }),
  deleteUser: (id: string) => api.delete(`/users/${id}`),
};

export default api;