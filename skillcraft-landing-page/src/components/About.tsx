import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Team Members' },
    { icon: Award, number: '500+', label: 'Projects Delivered' },
    { icon: Target, number: '98%', label: 'Success Rate' },
    { icon: Zap, number: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About SkillCraft
              <span className="block text-blue-600 dark:text-blue-400">Technology</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We are a passionate team of developers, designers, and digital strategists dedicated to 
              transforming businesses through innovative technology solutions. Our mission is to bridge 
              the gap between complex technology and business success.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Innovation First</h4>
                  <p className="text-gray-600 dark:text-gray-400">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Client-Centric Approach</h4>
                  <p className="text-gray-600 dark:text-gray-400">Your success is our priority. We work closely with you every step of the way.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Quality Assurance</h4>
                  <p className="text-gray-600 dark:text-gray-400">Rigorous testing and quality control ensure flawless deliverables.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;