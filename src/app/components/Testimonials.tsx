export default function Testimonials() {
  const testimonials = [
    {
      name: "James Rodrigo",
      text: "We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.",
      rating: 5
    },
    {
      name: "Kelly Garcia", 
      text: "We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.",
      rating: 5
    },
    {
      name: "Karma Samuel",
      text: "We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.",
      rating: 5
    },
    {
      name: "James Rodrigo",
      text: "We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.",
      rating: 5
    },
    {
      name: "James Rodrigo",
      text: "We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our happy customers</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-orange-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <blockquote className="text-gray-700 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">$30 Off</h3>
            <p className="text-lg mb-2">if you Mention our Website</p>
            <p className="text-sm opacity-90 mb-6">
              Get a special discount when you mention our website during your service call.
            </p>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get started now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
