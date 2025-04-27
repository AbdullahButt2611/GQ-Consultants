import { CountryTile } from "~/components/Tile/CountryTile";
import { countries } from "~/content/contryinfo";

export function Welcome() {
  return (
    <div className="w-full">
      {/* Hero Section with Angled Background */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,96C672,96,768,160,864,176C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Your Journey, Our Expertise
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Professional visa consultation services to help you navigate the complex immigration process with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/services" className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-3 bg-blue-800 text-white font-medium rounded-lg border border-blue-200 hover:bg-blue-700 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Stats Highlight Section */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Countries Served</div>
            </div>
            <div className="p-4">
              <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">10k+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Countries Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Destinations</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Explore visa opportunities for these popular destinations with our expert guidance.
            </p>
          </div>
          <a href="/countries" className="mt-4 md:mt-0 px-5 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20 flex items-center transition-colors">
            View All
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.slice(0, 6).map((country) => (
            <CountryTile 
              key={country.code}
              countryCode={country.code}
              countryName={country.name}
              description={country.description}
              flagImage={country.flagUrl}
              slug={country.slug}
            />
          ))}
        </div>
      </div>
      
      {/* Services Overview Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Comprehensive Services</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer end-to-end visa consulting services to simplify your immigration journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Visa Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Personalized evaluation to determine the most suitable visa options based on your profile and goals.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Assistance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete guidance through the documentation process, form filling, and submission procedures.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Interview Preparation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mock interviews and strategic guidance to help you confidently navigate visa interviews.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="/services" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative p-8 md:p-12">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#fff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotGrid)" />
              </svg>
            </div>
            
            <div className="md:flex items-center justify-between relative z-10">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
                <p className="text-blue-100 max-w-xl text-lg">
                  Book a free consultation with our visa experts and take the first step toward your international goals.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <a href="/contact" className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-blue-50 text-center transition-colors">
                  Book Consultation
                </a>
                <a href="/testimonials" className="px-8 py-3 bg-transparent text-white border border-white/30 font-medium rounded-lg hover:bg-blue-700/30 text-center transition-colors">
                  Read Success Stories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}