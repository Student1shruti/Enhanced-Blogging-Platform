import React from 'react';
import { BookOpen, Users, Target, Award, Github, Mail, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Rich Content Creation',
      description: 'Create beautiful blog posts with our advanced rich text editor, supporting images, formatting, and more.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with fellow writers and readers. Like, comment, and engage with content that matters to you.'
    },
    {
      icon: Target,
      title: 'Category Organization',
      description: 'Organize your content with categories and tags, making it easy for readers to discover what they love.'
    },
    {
      icon: Award,
      title: 'Professional Platform',
      description: 'Built with modern web technologies to provide a fast, reliable, and beautiful blogging experience.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Active Writers' },
    { number: '5000+', label: 'Published Posts' },
    { number: '10000+', label: 'Monthly Readers' },
    { number: '50+', label: 'Categories' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">BlogHub</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Empowering writers and readers to share stories, ideas, and knowledge in a beautiful, modern platform.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At BlogHub, we believe that everyone has a story worth telling. Our mission is to provide a platform 
            where writers can express themselves freely, readers can discover amazing content, and communities can 
            form around shared interests and passions. We're committed to fostering creativity, encouraging 
            meaningful discussions, and building a space where ideas can flourish.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose BlogHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet the Developer</h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <div className="h-24 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Shruti Gupta</h3>
              <p className="text-gray-600 mb-6">Full Stack Developer & Creator of BlogHub</p>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              BlogHub was created with passion for clean code, beautiful design, and meaningful user experiences. 
              Built using modern web technologies including React, TypeScript, and Tailwind CSS, this platform 
              represents a commitment to quality and innovation in web development.
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Student1shruti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
              <a
                href="mailto:13579shrutigupta@gmail.com"
                className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Writing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of writers and readers today. Share your stories, discover new perspectives, 
            and connect with like-minded individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              <Heart className="h-5 w-5 mr-2" />
              Join BlogHub Today
            </a>
            <a
              href="/categories"
              className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Explore Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;