import React from 'react';
import { ArrowRight, Play, Shield, Zap, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovative Tech
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
            for Your Business
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions. We deliver scalable software, 
            AI-powered systems, and cloud infrastructure that drive growth and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 flex items-center space-x-2 shadow-2xl hover:shadow-blue-500/25"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => scrollToSection('portfolio')}
              className="border border-gray-400 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>View Our Work</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition duration-300">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition duration-300">
              <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-gray-300">Uptime Guarantee</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition duration-300">
              <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">200+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;