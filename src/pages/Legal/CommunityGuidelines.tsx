import React from 'react';
import { Users, Heart, Shield, AlertTriangle, CheckCircle, XCircle, Mail, Flag } from 'lucide-react';

const CommunityGuidelines: React.FC = () => {
  const guidelines = [
    {
      icon: Heart,
      title: 'Be Respectful',
      description: 'Treat all community members with kindness and respect',
      dos: [
        'Use inclusive and welcoming language',
        'Respect different opinions and perspectives',
        'Give constructive feedback',
        'Acknowledge others\' contributions'
      ],
      donts: [
        'Use hate speech or discriminatory language',
        'Attack or harass other users',
        'Make personal attacks',
        'Dismiss others\' experiences'
      ]
    },
    {
      icon: Shield,
      title: 'Create Quality Content',
      description: 'Share valuable, original, and well-crafted content',
      dos: [
        'Write original, thoughtful posts',
        'Fact-check your information',
        'Use proper grammar and formatting',
        'Add relevant tags and categories'
      ],
      donts: [
        'Post spam or duplicate content',
        'Share misleading information',
        'Copy content without attribution',
        'Post low-effort or irrelevant content'
      ]
    },
    {
      icon: Users,
      title: 'Foster Community',
      description: 'Help build a supportive and engaging community',
      dos: [
        'Engage meaningfully with others\' content',
        'Share knowledge and expertise',
        'Welcome new community members',
        'Participate in discussions constructively'
      ],
      donts: [
        'Ignore community standards',
        'Create multiple accounts',
        'Manipulate votes or engagement',
        'Promote unrelated content excessively'
      ]
    }
  ];

  const reportingReasons = [
    'Harassment or bullying',
    'Hate speech or discrimination',
    'Spam or misleading content',
    'Copyright infringement',
    'Adult or inappropriate content',
    'Threats or violence',
    'Privacy violations',
    'Other violations'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Guidelines</h1>
            <p className="text-xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Building a positive, inclusive, and supportive community for all BlogHub users.
            </p>
            <p className="text-sm text-indigo-200">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Our Community</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            BlogHub is a platform where writers, readers, and thinkers come together to share ideas, stories, and knowledge. 
            Our community guidelines help ensure that everyone can participate in a safe, respectful, and enriching environment.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using BlogHub, you agree to follow these guidelines. Violations may result in content removal, 
            account restrictions, or permanent suspension from the platform.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Respect</h3>
              <p className="text-gray-600 text-sm">Every voice matters and deserves to be heard with dignity.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-600 text-sm">Creating a secure environment for open expression.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Building connections through shared stories and ideas.</p>
            </div>
          </div>
        </div>

        {/* Detailed Guidelines */}
        <div className="space-y-8 mb-8">
          {guidelines.map((guideline, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <guideline.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{guideline.title}</h2>
                  <p className="text-gray-600">{guideline.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">Do</h3>
                  </div>
                  <ul className="space-y-2">
                    {guideline.dos.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="h-2 w-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-800">Don't</h3>
                  </div>
                  <ul className="space-y-2">
                    {guideline.donts.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="h-2 w-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prohibited Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Prohibited Content</h2>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6 border border-red-200 mb-6">
            <p className="text-red-800 font-medium mb-4">The following types of content are strictly prohibited on BlogHub:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Hate speech, harassment, or bullying</li>
                <li>• Threats, violence, or harmful content</li>
                <li>• Adult content or sexually explicit material</li>
                <li>• Content harmful to minors</li>
                <li>• Spam, scams, or fraudulent content</li>
              </ul>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Copyright infringement or plagiarism</li>
                <li>• Personal information or doxxing</li>
                <li>• Illegal activities or content</li>
                <li>• Malicious code or security threats</li>
                <li>• Misleading or false information</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Content Under Review</h3>
            <p className="text-yellow-700 text-sm">
              Some content may be subject to additional review, including political content, medical advice, 
              financial recommendations, and content related to current events. We encourage fact-checking 
              and citing reliable sources.
            </p>
          </div>
        </div>

        {/* Reporting System */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-3 rounded-lg mr-4">
              <Flag className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Reporting Violations</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            If you encounter content or behavior that violates our community guidelines, please report it. 
            Your reports help us maintain a safe and positive environment for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">How to Report</h3>
              <ol className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</span>
                  Use the report button on posts or comments
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
                  Select the reason for reporting
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
                  Provide additional context if needed
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">4</span>
                  Submit your report for review
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Common Reporting Reasons</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                {reportingReasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mt-6">
            <h3 className="font-semibold text-blue-800 mb-2">What Happens After Reporting?</h3>
            <p className="text-blue-700 text-sm">
              Our moderation team reviews all reports promptly. We may remove content, issue warnings, 
              or take other appropriate action. We'll notify you of the outcome when possible.
            </p>
          </div>
        </div>

        {/* Enforcement */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Enforcement Actions</h2>
          <p className="text-gray-600 mb-6">
            When community guidelines are violated, we may take various actions depending on the severity 
            and frequency of violations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Progressive Actions</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Warning</p>
                    <p className="text-gray-600 text-sm">First-time minor violations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-3">
                    <XCircle className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Content Removal</p>
                    <p className="text-gray-600 text-sm">Violating posts or comments deleted</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <Shield className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Account Suspension</p>
                    <p className="text-gray-600 text-sm">Temporary restriction from posting</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Severe Violations</h3>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-red-800 font-medium mb-2">Immediate Actions for:</p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Threats or harassment</li>
                  <li>• Hate speech</li>
                  <li>• Illegal content</li>
                  <li>• Severe spam or abuse</li>
                </ul>
                <p className="text-red-700 text-sm mt-3">
                  These may result in immediate account suspension or permanent ban.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Appeals Process */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Appeals Process</h2>
          <p className="text-gray-600 mb-4">
            If you believe your content was removed or your account was restricted in error, you can appeal our decision:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ol className="text-gray-700 text-sm space-y-2">
              <li>1. Contact us within 30 days of the action</li>
              <li>2. Provide your username and details of the action</li>
              <li>3. Explain why you believe the action was incorrect</li>
              <li>4. We'll review your appeal within 5-7 business days</li>
              <li>5. You'll receive a response with our decision</li>
            </ol>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
              <Mail className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Need Help?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have questions about our community guidelines or need to report a violation, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:13579shrutigupta@gmail.com" className="text-indigo-600 hover:underline">13579shrutigupta@gmail.com</a>
            </p>
            <p className="text-gray-700 mt-2">
              <strong>GitHub:</strong> <a href="https://github.com/Student1shruti" target="_blank" rel="noopener noreferrer"></a>

            </p>
          </div>
        </div>

        {/* Community Commitment */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mt-8 border border-indigo-200">
          <h2 className="text-xl font-bold text-indigo-900 mb-4">Our Commitment to You</h2>
          <p className="text-indigo-800 leading-relaxed">
            We're committed to fostering a community where everyone feels welcome, safe, and inspired to share their stories. 
            These guidelines evolve with our community, and we welcome your feedback on how we can continue to improve 
            the BlogHub experience for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;