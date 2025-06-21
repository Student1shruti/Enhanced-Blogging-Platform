import React from 'react';
import { FileText, Users, Shield, AlertTriangle, Scale, Mail } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Please read these terms carefully before using BlogHub.
            </p>
            <p className="text-sm text-indigo-200">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            These Terms of Service ("Terms") govern your use of BlogHub ("Service") operated by Shruti Gupta ("us", "we", or "our").
          </p>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, 
            then you may not access the Service.
          </p>
        </div>

        {/* User Accounts */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">User Accounts</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Account Creation</h3>
              <p className="text-gray-600">You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Account Responsibility</h3>
              <p className="text-gray-600">You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Age Requirement</h3>
              <p className="text-gray-600">You must be at least 13 years old to use this Service. Users under 18 should have parental consent.</p>
            </div>
          </div>
        </div>

        {/* Content Guidelines */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Content Guidelines</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Your Content</h3>
              <p className="text-gray-600 mb-2">You retain ownership of content you create on BlogHub. By posting content, you grant us a license to display, distribute, and promote your content on our platform.</p>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• You are responsible for the content you post</li>
                <li>• Content must comply with applicable laws</li>
                <li>• You must have rights to any content you share</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Prohibited Content</h3>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-red-800 font-medium mb-2">The following content is strictly prohibited:</p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Hate speech, harassment, or discriminatory content</li>
                  <li>• Spam, misleading, or fraudulent content</li>
                  <li>• Content that violates intellectual property rights</li>
                  <li>• Adult content or content harmful to minors</li>
                  <li>• Content promoting illegal activities</li>
                  <li>• Malicious code or security threats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* User Conduct */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">User Conduct</h2>
          </div>
          <p className="text-gray-600 mb-4">You agree to use BlogHub responsibly and in accordance with these guidelines:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 text-green-600">✓ Acceptable Use</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Respect other users and their opinions</li>
                <li>• Provide constructive feedback</li>
                <li>• Report inappropriate content</li>
                <li>• Follow community guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 text-red-600">✗ Prohibited Activities</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Impersonating others</li>
                <li>• Attempting to hack or disrupt the service</li>
                <li>• Creating multiple accounts to manipulate content</li>
                <li>• Collecting user data without permission</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Our Rights</h3>
              <p className="text-gray-600">The BlogHub platform, including its design, features, and underlying technology, is owned by us and protected by intellectual property laws.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
              <p className="text-gray-600">You retain all rights to your original content. We do not claim ownership of your posts, comments, or other user-generated content.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">DMCA Policy</h3>
              <p className="text-gray-600">We respect intellectual property rights. If you believe your copyright has been infringed, please contact us with details of the alleged infringement.</p>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Disclaimers and Limitations</h2>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-3">Important Notice</h3>
            <ul className="text-yellow-700 text-sm space-y-2">
              <li>• BlogHub is provided "as is" without warranties of any kind</li>
              <li>• We do not guarantee uninterrupted or error-free service</li>
              <li>• Users are responsible for backing up their content</li>
              <li>• We are not liable for user-generated content</li>
              <li>• Service availability may vary and is subject to maintenance</li>
            </ul>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Termination</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">By You</h3>
              <p className="text-gray-600">You may terminate your account at any time by contacting us. Upon termination, your access to the Service will cease.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">By Us</h3>
              <p className="text-gray-600">We may terminate or suspend your account if you violate these Terms or engage in harmful behavior. We will provide notice when possible.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Effect of Termination</h3>
              <p className="text-gray-600">Upon termination, your right to use the Service ceases immediately. We may retain certain information as required by law or for legitimate business purposes.</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
              <Mail className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
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

        {/* Changes to Terms */}
        <div className="bg-indigo-50 rounded-xl p-8 mt-8 border border-indigo-200">
          <h2 className="text-xl font-bold text-indigo-900 mb-4">Changes to Terms</h2>
          <p className="text-indigo-800 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify users of significant changes 
            via email or through the platform. Continued use of the Service after changes constitutes acceptance 
            of the new Terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;