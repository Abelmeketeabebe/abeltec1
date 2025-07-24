import React from 'react';
import { 
  Code, 
  Cloud, 
  Shield, 
  Brain, 
  Smartphone, 
  Database,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom web and mobile applications built with modern frameworks and best practices.',
      features: ['Full-stack Development', 'API Integration', 'Quality Assurance', 'Maintenance & Support'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate processes and provide valuable business insights.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps & CI/CD', 'Monitoring & Optimization'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', '24/7 Monitoring'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android Apps', 'React Native', 'Flutter Development', 'App Store Optimization'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Technology
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology services designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden"
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-900 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;