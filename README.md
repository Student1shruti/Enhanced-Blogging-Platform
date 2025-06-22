# 📝 BlogHub - Full-Stack Blogging Platform

A modern, full-featured blogging platform built with React, Node.js, Express, and MongoDB. Features real-time updates, user authentication, rich text editing, and a beautiful responsive design.

## 🚀 Features

- **🔐 Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Admin/User)
  - Secure password hashing with bcrypt

- **📝 Blog Management**
  - Rich text editor with formatting options
  - Draft and publish functionality
  - Category and tag organization
  - Image upload support
  - SEO-friendly URLs

- **💬 Interactive Features**
  - Real-time comments system
  - Like/unlike posts and comments
  - Live notifications for new posts
  - User profiles and statistics

- **🎨 Modern UI/UX**
  - Responsive design for all devices
  - Beautiful gradient themes
  - Smooth animations and transitions
  - Dark/light mode support

- **⚡ Real-time Updates**
  - Socket.io integration
  - Live post notifications
  - Real-time comment updates

- **🛡️ Security & Performance**
  - Rate limiting
  - CORS protection
  - Helmet security headers
  - Input validation and sanitization

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **Socket.io Client** for real-time features
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Socket.io** for real-time communication
- **bcryptjs** for password hashing
- **Helmet** for security headers

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd blogging-platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/bloghub

# JWT Secret (generate a strong secret for production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service:
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # On Ubuntu
   sudo systemctl start mongod
   
   # On Windows
   net start MongoDB
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string and update `MONGODB_URI` in `.env`

### 5. Seed the Database (Optional)
```bash
node server/scripts/seed.js
```

This creates sample users and posts:
- **Admin**: admin@bloghub.com / admin123
- **User 1**: john@example.com / user123
- **User 2**: jane@example.com / user123

### 6. Start the Application
```bash
# Start both frontend and backend
npm run dev

# Or start them separately
npm run server  # Backend only
npm run client  # Frontend only
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📁 Project Structure

```
blogging-platform/
├── src/                          # Frontend React application
│   ├── components/              # Reusable UI components
│   │   ├── Layout/             # Header, Footer components
│   │   └── UI/                 # LoadingSpinner, RichTextEditor
│   ├── context/                # React Context providers
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Page components
│   │   ├── Admin/             # Admin dashboard
│   │   ├── Auth/              # Login, Register
│   │   └── Legal/             # Privacy, Terms, etc.
│   ├── services/              # API and Socket services
│   └── types/                 # TypeScript type definitions
├── server/                      # Backend Node.js application
│   ├── models/                # MongoDB schemas
│   ├── routes/                # Express route handlers
│   ├── middleware/            # Custom middleware
│   └── scripts/               # Database scripts
└── public/                     # Static assets
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/refresh` - Refresh JWT token

### Posts
- `GET /api/posts` - Get all published posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (auth required)
- `PUT /api/posts/:id` - Update post (auth required)
- `DELETE /api/posts/:id` - Delete post (auth required)
- `POST /api/posts/:id/like` - Like/unlike post (auth required)

### Comments
- `GET /api/comments/post/:postId` - Get post comments
- `POST /api/comments` - Create comment (auth required)
- `PUT /api/comments/:id` - Update comment (auth required)
- `DELETE /api/comments/:id` - Delete comment (auth required)
- `POST /api/comments/:id/like` - Like/unlike comment (auth required)

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile (auth required)
- `GET /api/users` - Get all users (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

## 🔌 Real-time Features

The application uses Socket.io for real-time features:

### Events
- `new-post` - Emitted when a new post is published
- `new-comment` - Emitted when a new comment is added
- `join-room` - Join a specific room (e.g., post comments)

### Usage
```javascript
// Listen for new posts
socketService.on('new-post', (data) => {
  console.log('New post:', data.post);
  // Update UI with new post
});

// Join a post's comment room
socketService.joinRoom(`post-${postId}`);
```

## 🛡️ Security Features

- **JWT Authentication** with secure token storage
- **Password Hashing** using bcrypt with salt rounds
- **Rate Limiting** to prevent abuse
- **CORS Protection** for cross-origin requests
- **Helmet** for security headers
- **Input Validation** and sanitization
- **MongoDB Injection** protection

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Component styles in individual files
- Global styles in `src/index.css`

### Features
- Add new post categories in the backend
- Customize user roles and permissions
- Add new real-time events
- Extend the API with new endpoints

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop** (1024px and up)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the frontend:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to your hosting service

### Backend (Railway/Heroku/DigitalOcean)
1. Set environment variables on your hosting platform
2. Deploy the server code
3. Ensure MongoDB connection is configured

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-super-secure-jwt-secret
CLIENT_URL=https://your-frontend-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shruti Gupta**
- GitHub: [@Student1shruti](https://github.com/Student1shruti)
- Email: 13579shrutigupta@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB team for the excellent database
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors who made this project possible

---

**Happy Blogging! 🎉**