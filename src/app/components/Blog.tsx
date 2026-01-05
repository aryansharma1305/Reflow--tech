export default function Blog() {
  const blogPosts = [
    {
      title: "Best HVAC in Texas",
      date: "Jan 30, 2024",
      excerpt: "Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum...",
      image: "/api/placeholder/400/250"
    },
    {
      title: "HVAC Maintenance Cost",
      date: "Jan 30, 2024", 
      excerpt: "Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum...",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Why to clean AC of Home",
      date: "Jan 30, 2024",
      excerpt: "Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum...",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Tips for cleaning AC",
      date: "Jan 30, 2024",
      excerpt: "Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum...",
      image: "/api/placeholder/400/250"
    }
  ];
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            Blog
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Posts</h2>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Read all blogs
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-orange-400 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-12 h-12 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm">Blog Image</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">{post.date}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for the latest HVAC tips, maintenance guides, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
