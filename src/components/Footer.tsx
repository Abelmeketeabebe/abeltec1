import React from 'react';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">AbTechnology</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in software development, 
              AI implementation, and digital transformation services for businesses worldwide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contact@abtechnology.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>123 Tech Street, San Francisco, CA 94105</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {['home', 'services', 'about', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-gray-300 hover:text-blue-400 transition duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition duration-300">
                Software Development
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition duration-300">
                AI & Machine Learning
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition duration-300">
                Cloud Solutions
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition duration-300">
                Cybersecurity
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition duration-300">
                Mobile Development
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AbTechnology. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;