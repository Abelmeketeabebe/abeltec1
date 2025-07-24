import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A comprehensive e-commerce solution with AI-powered recommendations and real-time analytics.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      results: '300% increase in conversion rate'
    },
    {
      title: 'Healthcare Management System',
      category: 'Enterprise Software',
      description: 'Streamlined patient management system with telemedicine capabilities and HIPAA compliance.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Native', 'Python', 'PostgreSQL', 'AWS'],
      results: '50% reduction in administrative overhead'
    },
    {
      title: 'FinTech Mobile App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication and blockchain integration.',
      image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Flutter', 'Blockchain', 'Security', 'API'],
      results: '1M+ downloads in first year'
    },
    {
      title: 'Smart Manufacturing IoT',
      category: 'IoT & Analytics',
      description: 'Industrial IoT solution for predictive maintenance and real-time production monitoring.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['IoT', 'Machine Learning', 'Azure', 'Real-time'],
      results: '40% reduction in downtime'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Business intelligence platform with machine learning insights and predictive modeling.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
      results: 'Improved decision-making by 60%'
    },
    {
      title: 'Cloud Migration Project',
      category: 'Cloud Solutions',
      description: 'Complete infrastructure modernization and migration to cloud-native architecture.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AWS', 'Kubernetes', 'Docker', 'Microservices'],
      results: '70% cost reduction in infrastructure'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Success
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve 
            remarkable results through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                  <p className="text-green-400 text-sm font-medium">
                    Result: {project.results}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition duration-300">
                    <span className="font-medium">View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  
                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-white transition duration-300">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition duration-300">
                      <Github className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 flex items-center space-x-2 mx-auto">
            <span>View All Projects</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;