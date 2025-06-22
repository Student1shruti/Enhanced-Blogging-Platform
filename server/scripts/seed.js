import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Post from '../models/Post.js';
import Comment from '../models/Comment.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bloghub';

const seedData = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});
    console.log('Cleared existing data');

    // Create users
    const users = await User.create([
      {
        username: 'admin',
        email: 'admin@bloghub.com',
        password: 'admin123',
        fullName: 'Admin User',
        bio: 'Platform administrator',
        isAdmin: true,
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        username: 'johndoe',
        email: 'john@example.com',
        password: 'user123',
        fullName: 'John Doe',
        bio: 'Tech enthusiast and blogger',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        username: 'janesmith',
        email: 'jane@example.com',
        password: 'user123',
        fullName: 'Jane Smith',
        bio: 'Creative writer and designer',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ]);

    console.log('Created users');

    // Create posts
    const posts = await Post.create([
      {
        title: 'Getting Started with React and TypeScript',
        content: `<p>React and TypeScript make a powerful combination for building modern web applications. In this comprehensive guide, we'll explore how to set up a React project with TypeScript and leverage the benefits of static typing.</p>

<h2>Why Use TypeScript with React?</h2>
<p>TypeScript brings several advantages to React development:</p>
<ul>
<li>Static type checking catches errors at compile time</li>
<li>Better IDE support with autocomplete and refactoring</li>
<li>Improved code documentation and maintainability</li>
<li>Enhanced team collaboration through clear interfaces</li>
</ul>

<h2>Setting Up Your Project</h2>
<p>To create a new React TypeScript project, you can use Vite or Create React App:</p>
<pre><code>npm create vite@latest my-app -- --template react-ts</code></pre>

<p>This command creates a new project with all the necessary TypeScript configurations and dependencies.</p>`,
        excerpt: 'Learn how to combine React with TypeScript for better development experience and type safety.',
        author: users[1]._id,
        category: 'Programming',
        tags: ['React', 'TypeScript', 'Frontend'],
        coverImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'published',
        views: 234,
        publishedAt: new Date('2024-03-01T10:00:00.000Z')
      },
      {
        title: 'Modern CSS Techniques for Beautiful Web Design',
        content: `<p>CSS has evolved significantly over the years, offering powerful new features that make creating beautiful, responsive designs easier than ever. Let's explore some modern CSS techniques that every web developer should know.</p>

<h2>CSS Grid and Flexbox</h2>
<p>These layout systems have revolutionized how we approach web layouts:</p>
<ul>
<li><strong>Flexbox</strong>: Perfect for one-dimensional layouts</li>
<li><strong>CSS Grid</strong>: Ideal for two-dimensional layouts</li>
</ul>

<h2>CSS Custom Properties</h2>
<p>CSS variables make theming and maintenance much easier:</p>
<pre><code>:root {
  --primary-color: #6366f1;
  --secondary-color: #4f46e5;
}

.button {
  background-color: var(--primary-color);
}</code></pre>

<h2>Advanced Selectors</h2>
<p>Modern CSS selectors provide powerful ways to target elements without cluttering your HTML with classes.</p>`,
        excerpt: 'Discover modern CSS techniques including Grid, Flexbox, and custom properties for creating stunning web designs.',
        author: users[2]._id,
        category: 'Design',
        tags: ['CSS', 'Web Design', 'Frontend'],
        coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'published',
        views: 189,
        publishedAt: new Date('2024-03-05T14:30:00.000Z')
      },
      {
        title: 'Building Scalable Backend APIs with Node.js',
        content: `<p>Building scalable and maintainable backend APIs is crucial for modern web applications. In this guide, we'll explore best practices for creating robust APIs using Node.js and Express.</p>

<h2>API Design Principles</h2>
<p>Good API design follows these principles:</p>
<ul>
<li>RESTful architecture</li>
<li>Consistent naming conventions</li>
<li>Proper HTTP status codes</li>
<li>Comprehensive error handling</li>
</ul>

<h2>Authentication and Security</h2>
<p>Implementing secure authentication is essential:</p>
<pre><code>const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};</code></pre>`,
        excerpt: 'Learn best practices for building scalable and secure backend APIs using Node.js and Express.',
        author: users[1]._id,
        category: 'Backend',
        tags: ['Node.js', 'API', 'Backend'],
        coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'published',
        views: 156,
        publishedAt: new Date('2024-03-08T09:15:00.000Z')
      }
    ]);

    console.log('Created posts');

    // Add likes to posts
    posts[0].likes.push(users[2]._id, users[0]._id);
    posts[1].likes.push(users[1]._id);
    posts[2].likes.push(users[2]._id);

    await Promise.all(posts.map(post => post.save()));

    // Create comments
    await Comment.create([
      {
        content: 'Great article! TypeScript has really improved my React development workflow.',
        author: users[2]._id,
        post: posts[0]._id,
        likes: [users[1]._id]
      },
      {
        content: 'Thanks for sharing this comprehensive guide. Very helpful for beginners!',
        author: users[0]._id,
        post: posts[0]._id
      }
    ]);

    console.log('Created comments');
    console.log('✅ Database seeded successfully!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedData();