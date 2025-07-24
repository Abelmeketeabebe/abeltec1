import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'David Thompson',
      role: 'CTO, TechCorp Industries',
      company: 'TechCorp',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'AbTechnology transformed our entire infrastructure. Their cloud migration reduced our costs by 70% while improving performance significantly. The team\'s expertise and dedication are unmatched.'
    },
    {
      name: 'Sarah Martinez',
      role: 'Founder, HealthTech Solutions',
      company: 'HealthTech',
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The healthcare management system they built for us has revolutionized our operations. Patient satisfaction increased by 40% and our administrative overhead decreased significantly.'
    },
    {
      name: 'Michael Johnson',
      role: 'VP of Operations, RetailMax',
      company: 'RetailMax',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Their e-commerce platform with AI recommendations boosted our conversion rate by 300%. The ROI was evident within the first quarter. Highly recommend AbTechnology!'
    }
  ];

  const companies = [
    'TechCorp', 'HealthTech', 'RetailMax', 'FinanceFlow', 'InnovateLab', 'DataVault'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say 
            about working with AbTechnology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-blue-600">
                <Quote className="h-8 w-8 opacity-20" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-center text-xl font-semibold text-gray-600 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white py-4 px-6 rounded-lg text-center font-bold hover:bg-blue-600 transition duration-300"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;