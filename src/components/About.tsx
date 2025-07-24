import React from 'react';
import { Award, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re committed to delivering technology solutions that create real business value and drive meaningful outcomes.'
    },
    {
      icon: Award,
      title: 'Excellence First',
      description: 'Our team maintains the highest standards of quality, ensuring every project exceeds expectations.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'We build lasting partnerships by understanding your unique challenges and delivering tailored solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Leader',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions that future-proof your business.'
    }
  ];

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Developers' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AbTechnology
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2016, AbTechnology has been at the forefront of digital transformation, 
              helping businesses harness the power of modern technology to achieve their goals.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our multidisciplinary team of engineers, designers, and strategists work collaboratively 
              to deliver innovative solutions that not only meet today's requirements but anticipate 
              tomorrow's challenges.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition duration-300"
              >
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'abel mekete', role: 'CEO & Founder', image: 'img src="image/3.jpg" alt="abel"width="200" height="150 }'},
              { name: 'hana worku', role: 'CTO', image: 'img src="image/12.jpg" alt="hana"width="200" height="150" }'},
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;