import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Account information (name, email, username)',
        'Profile information (bio, avatar)',
        'Content you create (blog posts, comments)',
        'Usage data (page views, interactions)',
        'Device and browser information'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide and maintain our services',
        'Personalize your experience',
        'Communicate with you about updates',
        'Improve our platform and features',
        'Ensure security and prevent abuse'
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information',
        'Public content is visible to all users',
        'We may share data to comply with legal requirements',
        'Service providers may access data to help us operate',
        'We will notify you of any significant changes'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We use industry-standard encryption',
        'Regular security audits and updates',
        'Secure data storage and transmission',
        'Limited access to personal information',
        'Incident response procedures in place'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-indigo-200">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            BlogHub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, disclose, and safeguard your information when you use our blogging platform.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using BlogHub, you agree to the collection and use of information in accordance with this policy. 
            If you do not agree with our policies and practices, please do not use our services.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <section.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl p-8 shadow-sm mt-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <UserCheck className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Access & Portability</h3>
              <p className="text-gray-600 text-sm">You can access and download your data at any time through your account settings.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Correction</h3>
              <p className="text-gray-600 text-sm">You can update your personal information directly in your profile.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Deletion</h3>
              <p className="text-gray-600 text-sm">You can request account deletion by contacting us.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Opt-out</h3>
              <p className="text-gray-600 text-sm">You can opt out of non-essential communications at any time.</p>
            </div>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-xl p-8 shadow-sm mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our platform. 
            These technologies help us remember your preferences, analyze usage patterns, and improve our services.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Types of Cookies We Use:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Essential cookies for basic functionality</li>
              <li>• Analytics cookies to understand usage patterns</li>
              <li>• Preference cookies to remember your settings</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-8 shadow-sm mt-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:13579shrutigupta@gmail.com" className="text-indigo-600 hover:underline">13579shrutigupta@gmail.com</a>
            </p>
            <p className="text-gray-700 mt-2">
              <strong>GitHub:</strong> <a href="https://github.com/Student1shruti" target="_blank" rel="noopener noreferrer\" className="text-indigo-600 hover:underline">Student1shruti</a>
            </p>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-indigo-50 rounded-xl p-8 mt-8 border border-indigo-200">
          <h2 className="text-xl font-bold text-indigo-900 mb-4">Policy Updates</h2>
          <p className="text-indigo-800 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to 
            review this Privacy Policy periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;