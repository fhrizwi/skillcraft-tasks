import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Trusted by 500+ Companies</span>
            </div> */}
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Digital Vision
              </span>
              Into Reality
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We craft exceptional digital experiences through innovative web development, 
              mobile applications, and cutting-edge technology solutions that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Graphic */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">SC</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">SkillCraft Technology</div>
                    <div className="text-blue-200 text-sm">Premium Development Partner</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">Project Progress</span>
                      <span className="text-blue-300 text-sm">85%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-300 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-blue-200 text-xs">Support</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-blue-200 text-xs">Secure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;