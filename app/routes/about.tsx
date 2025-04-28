export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="headerPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="#fff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#headerPattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 py-16 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About GQ Consultants</h1>
            <p className="text-xl text-blue-100">Your trusted partner for global visa and immigration services since 2015</p>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="white" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,27,960,21.3C1120,16,1280,21,1360,24L1440,27L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z"></path>
          </svg>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Story</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p>
              GQ Consultants was established in 2015 by a team of immigration specialists with over 20 years of combined experience in the visa consultancy industry. What began as a small office in Islamabad has now grown into one of Pakistan's most respected visa and immigration consultancy firms.
            </p>
            <p>
              Over the years, we've helped thousands of individuals and families navigate the complex world of visa applications, immigration procedures, and overseas education planning. Our success is built on a foundation of integrity, expertise, and personalized service that addresses each client's unique circumstances.
            </p>
          </div>
          
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">8+</div>
              <p className="text-gray-700 dark:text-gray-300">Years of Experience</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">5,000+</div>
              <p className="text-gray-700 dark:text-gray-300">Successful Visa Cases</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-2">95%</div>
              <p className="text-gray-700 dark:text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Mission</h2>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md mb-8">
              <p className="text-xl text-gray-700 dark:text-gray-300 italic">
                "To provide honest, transparent, and effective visa consultancy services that open doors to global opportunities for our clients while maintaining the highest standards of professionalism and ethical practice."
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p>
                At GQ Consultants, we understand that each visa application represents someone's dream, career opportunity, or family reunion. We approach every case with dedication, attention to detail, and a commitment to achieving the best possible outcome.
              </p>
              <p>
                Our mission extends beyond just securing visas—we aim to be a comprehensive resource for our clients, offering guidance on relocation, cultural adaptation, and connecting them with our network of international partners when they arrive at their destination.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Leadership Team</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Ghulam Qadir</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Founder & Managing Director</p>
                <p className="text-gray-700 dark:text-gray-300">
                  With over 15 years of experience in immigration consultancy, Ghulam has established GQ Consultants as a trusted name in the industry. His expertise in visa regulations and policy changes has helped thousands of clients achieve their immigration goals.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Ayesha Khan</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Senior Immigration Consultant</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Ayesha specializes in complex visa cases and has an exceptional track record with business visas and family sponsorship applications. Her attention to detail and thorough understanding of immigration law make her an invaluable asset to our team.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Tariq Mahmood</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Head of Student Visa Services</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Tariq has helped hundreds of students secure placements in prestigious universities across Europe, Australia, and North America. His deep knowledge of academic requirements and student visa processes ensures our clients receive expert guidance.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Zainab Ali</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Client Relations Manager</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Zainab ensures that every client receives personalized attention throughout their visa journey. Her commitment to exceptional service and clear communication has been instrumental in maintaining our high client satisfaction rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Approach</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex items-start justify-center md:mr-6">
                  <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Personalized Assessment</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We begin with a comprehensive evaluation of each client's specific situation, qualifications, and objectives. This allows us to develop a tailored strategy that maximizes their chances of visa approval.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex items-start justify-center md:mr-6">
                  <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Transparent Timeline</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We provide clear expectations regarding processing times, requirements, and potential challenges. Our clients always know where they stand in the application process and what steps are coming next.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex items-start justify-center md:mr-6">
                  <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Documentation Excellence</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We meticulously prepare all required documents, ensuring they meet the specific standards of each embassy or immigration authority. Our attention to detail significantly reduces the risk of delays or rejection.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex items-start justify-center md:mr-6">
                  <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Continuous Support</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our relationship with clients doesn't end when a visa is granted. We provide ongoing assistance with pre-departure preparations, orientation for their destination country, and serve as a point of contact for any issues that arise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Certifications */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Certifications & Partnerships</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Registered with Ministry of Overseas Pakistanis</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our operations are fully licensed and regulated by the Government of Pakistan, ensuring we meet all legal requirements for visa consultancy services.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Member of Pakistan Immigration Consultants Association</h3>
              <p className="text-gray-700 dark:text-gray-300">
                As active members, we adhere to the highest industry standards and ethical practices in immigration consultancy.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Education Agent for International Universities</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We maintain official partnerships with over 50 universities across Australia, UK, Canada, and Europe, allowing us to directly facilitate student applications.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Certified Immigration Professionals</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our consultants undergo regular training and certification to stay current with changing immigration laws and visa requirements worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What Our Clients Say</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "I was struggling with my visa application until I found GQ Consultants. They guided me through every step and handled my complex case with expertise. Thanks to their help, I'm now studying at my dream university in Australia."
                </p>
                <div className="font-medium text-gray-900 dark:text-white">Ahmed Hassan</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Student Visa Client</div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "The professionalism of GQ Consultants is unmatched. After two failed attempts with other agencies, they helped me secure my business visa to the UK. Their knowledge of documentation requirements made all the difference."
                </p>
                <div className="font-medium text-gray-900 dark:text-white">Fatima Malik</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Business Visa Client</div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "GQ Consultants helped us with our family visa application for Canada. Their attention to detail was impressive, and they were patient with all our questions. They even helped us prepare for the immigration interview."
                </p>
                <div className="font-medium text-gray-900 dark:text-white">Imran & Sarah Khan</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Family Immigration Clients</div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "As a businessman, I value efficiency and expertise. GQ Consultants delivered both. They secured my Schengen visa within a tight timeframe, allowing me to attend crucial meetings in Europe. Their service was worth every penny."
                </p>
                <div className="font-medium text-gray-900 dark:text-white">Naveed Ahmed</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Business Travel Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-10 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="ctaPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#fff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ctaPattern)" />
              </svg>
            </div>
            
            <div className="relative text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to start your visa journey?</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our expert team to discuss your visa requirements and immigration goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-md">
                  Contact Us
                </a>
                <a href="/services" className="px-8 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md border border-blue-500">
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function meta() {
  return [
    { title: "About | GQ Consultants" },
    { name: "description", content: "Learn about GQ Consultants - Pakistan's trusted visa and immigration consultancy firm with over 8 years of experience and a 95% success rate in visa applications." },
  ];
}