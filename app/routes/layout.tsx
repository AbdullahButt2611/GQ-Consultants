import { useState } from "react";
import { Link } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="h-8 w-12 bg-blue-600 rounded-md flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-lg">G&Q</span>
                </div>
                <span className="font-bold text-xl text-gray-800 dark:text-white">Consultants</span>
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">About</Link>
              <Link to="/services" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Services</Link>
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">Contact Us</Link>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="bg-white dark:bg-gray-800 shadow-inner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-lg">GQ</span>
                </div>
                <span className="font-bold text-xl text-gray-800 dark:text-white">GQ Consultants</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional visa consulting services to help you achieve your immigration goals.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
                <li><Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Our Services</Link></li>
                <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/student-visa" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Student Visa</Link></li>
                <li><Link to="/services/work-visa" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Work Visa</Link></li>
                <li><Link to="/services/pr" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Permanent Residency</Link></li>
                <li><Link to="/services/family-visa" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Family Visa</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
              <address className="not-italic text-gray-600 dark:text-gray-300 space-y-2">
                <p>123 Business Avenue</p>
                <p>Suite 456, New York, NY 10001</p>
                <p>Email: info@gqconsultants.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} GQ Consultants. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}