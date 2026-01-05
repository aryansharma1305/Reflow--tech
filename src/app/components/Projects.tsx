export default function Projects() {
  const projects = [
    {
      title: "AC Cleaning",
      image: "/api/placeholder/400/300",
      description: "Professional air conditioning cleaning services"
    },
    {
      title: "AC Maintenance", 
      image: "/api/placeholder/400/300",
      description: "Regular maintenance to keep your AC running efficiently"
    },
    {
      title: "AC Repairing",
      image: "/api/placeholder/400/300", 
      description: "Expert repair services for all AC issues"
    },
    {
      title: "AC Installation",
      image: "/api/placeholder/400/300",
      description: "Professional installation of new AC systems"
    },
    {
      title: "AC Cleaning",
      image: "/api/placeholder/400/300",
      description: "Deep cleaning services for optimal performance"
    },
    {
      title: "AC Maintenance",
      image: "/api/placeholder/400/300",
      description: "Comprehensive maintenance programs"
    }
  ];
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Projects</h2>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            View all Project
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-orange-400 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm">Project Image</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  Browse More →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-gray-600">Emergency Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
