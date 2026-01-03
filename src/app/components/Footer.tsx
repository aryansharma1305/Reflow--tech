import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - ReFlow Branding */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <Image
                  src="/translogo.png"
                  alt="ReFlow Logo"
                  width={180}
                  height={60}
                  className="h-16 w-auto drop-shadow-lg"
                />
              </div>
            </div>
            <p className="text-gray-200 leading-relaxed text-base font-medium">
              Increasing Manufacturing Performance of Pharma Industries using AI Devices
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              Company
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-200 hover:text-blue-300 transition-all duration-300 text-base font-medium hover:translate-x-2 block">About Us</a></li>
              <li><a href="#" className="text-gray-200 hover:text-blue-300 transition-all duration-300 text-base font-medium hover:translate-x-2 block">Contact Us</a></li>
              <li><a href="#" className="text-gray-200 hover:text-blue-300 transition-all duration-300 text-base font-medium hover:translate-x-2 block">Terms & Condition</a></li>
              <li><a href="#" className="text-gray-200 hover:text-blue-300 transition-all duration-300 text-base font-medium hover:translate-x-2 block">Support Us</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              Products
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-200 hover:text-blue-300 transition-all duration-300 text-base font-medium hover:translate-x-2 block">Alpha X Series</a></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              Platform
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-200 hover:text-blue-300 transition-all duration-300 text-base font-medium hover:translate-x-2 block">Dashboard</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm font-medium">
              Copyright © 2024 ReFlow Technologies Pvt Ltd | All Rights Reserved | Terms and Conditions | Privacy Policy
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Made with ❤️ by ReFlow Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group border-2 border-white/20">
          <svg className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}
