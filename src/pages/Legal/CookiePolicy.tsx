import React from 'react';
import { Cookie, Settings, Eye, BarChart, Shield, Mail } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: ['Authentication tokens', 'Session management', 'Security features'],
      canDisable: false
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      description: 'Help us understand how users interact with our site',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      canDisable: true
    },
    {
      icon: Settings,
      title: 'Preference Cookies',
      description: 'Remember your settings and preferences',
      examples: ['Theme preferences', 'Language settings', 'Layout choices'],
      canDisable: true
    },
    {
      icon: Eye,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      examples: ['Remember login status', 'Personalized content', 'User interface preferences'],
      canDisable: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Cookie className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies on BlogHub.
            </p>
            <p className="text-sm text-indigo-200">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cookies are small text files that are stored on your device when you visit a website. They help websites 
            remember information about your visit, such as your preferred language and other settings, which can make 
            your next visit easier and the site more useful to you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            BlogHub uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
            and understand where our visitors are coming from.
          </p>
        </div>

        {/* Types of Cookies */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <type.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                    <div className="flex items-center mt-1">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        type.canDisable 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {type.canDisable ? 'Optional' : 'Required'}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-indigo-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Use Cookies */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Authentication & Security</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Keep you logged in during your session</li>
                <li>• Protect against unauthorized access</li>
                <li>• Verify your identity</li>
                <li>• Prevent fraudulent activity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">User Experience</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Remember your preferences</li>
                <li>• Personalize content</li>
                <li>• Improve site navigation</li>
                <li>• Maintain your settings</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Analytics & Performance</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Understand how you use our site</li>
                <li>• Identify popular content</li>
                <li>• Monitor site performance</li>
                <li>• Improve our services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Communication</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Show relevant notifications</li>
                <li>• Remember communication preferences</li>
                <li>• Provide customer support</li>
                <li>• Send important updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may use third-party services that set their own cookies. These services help us provide better 
            functionality and analyze our website performance.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Current Third-Party Services:</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Analytics services for usage statistics</li>
              <li>• Content delivery networks for faster loading</li>
              <li>• Social media integration (if applicable)</li>
            </ul>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-600 mb-3">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• Block all cookies</li>
                <li>• Block third-party cookies</li>
                <li>• Delete existing cookies</li>
                <li>• Set up notifications when cookies are sent</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Note</h3>
              <p className="text-yellow-700 text-sm">
                Disabling certain cookies may affect the functionality of BlogHub. Essential cookies are required 
                for the site to work properly and cannot be disabled.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Browser-Specific Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Chrome</h4>
                  <p className="text-gray-600 text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Firefox</h4>
                  <p className="text-gray-600 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Safari</h4>
                  <p className="text-gray-600 text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Edge</h4>
                  <p className="text-gray-600 text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Retention</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Session Cookies</h3>
              <p className="text-gray-600">These cookies are temporary and are deleted when you close your browser.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Persistent Cookies</h3>
              <p className="text-gray-600">These cookies remain on your device for a set period or until you delete them manually. They typically expire after 30 days to 2 years, depending on their purpose.</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
              <Mail className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Questions About Cookies?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
            updated policy on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;