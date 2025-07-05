import React from 'react';
import { Code, Palette, Smartphone, Globe, Users, TrendingUp as Trending } from 'lucide-react';

const Content: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-structured, maintainable React components with TypeScript'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Android 14-inspired UI with smooth animations and transitions'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices'
    },
    {
      icon: Globe,
      title: 'Modern Web',
      description: 'Built with the latest web technologies and best practices'
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Intuitive interface designed with user experience in mind'
    },
    {
      icon: Trending,
      title: 'Performance',
      description: 'Optimized for speed and smooth interactions'
    }
  ];

  const sections = [
    {
      id: 'home',
      title: 'Welcome Home',
      content: 'This is the home section where you can introduce your application and its main features.'
    },
    {
      id: 'explore',
      title: 'Explore Features',
      content: 'Discover all the amazing features and capabilities of our navigation system.'
    },
    {
      id: 'notifications',
      title: 'Stay Updated',
      content: 'Never miss important updates with our smart notification system.'
    },
    {
      id: 'profile',
      title: 'Your Profile',
      content: 'Manage your account settings and preferences in one place.'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Amazing Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built with modern technologies and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          className={`py-20 px-4 ${
            index % 2 === 0 
              ? 'bg-white dark:bg-gray-900' 
              : 'bg-gray-50 dark:bg-gray-800'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {section.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {section.content}
            </p>
            <div className="mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-lg">NaviApp</span>
          </div>
          <p className="text-gray-400 mb-4">
            Beautiful navigation with Android 14-inspired design
          </p>
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Content;