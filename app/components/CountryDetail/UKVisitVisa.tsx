import { countries } from "~/content/contryinfo";

export default function UKVisitVisa() {
    const countryInfo = countries.find(c => c.slug === "uk-visit-visa");
  
    if (!countryInfo) {
      return null;
    }
  
    return (
      <div className="max-w-5xl mx-auto pb-12">
        {/* Header Section with Gradient */}
        <div className="relative bg-gradient-to-r from-red-600 to-blue-700 rounded-xl overflow-hidden mb-10">
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
          
          <div className="relative p-8 md:p-10 flex items-center">
            {countryInfo.flagUrl && (
              <div className="mr-6">
                <img 
                  src={countryInfo.flagUrl} 
                  alt={`${countryInfo.name} flag`} 
                  className="w-20 h-14 object-cover rounded shadow-lg border-2 border-white/30"
                />
              </div>
            )}
            <div>
              <h2 className="text-3xl font-bold text-white">{countryInfo.name}</h2>
              <p className="text-blue-100">Visit Visa Information & Requirements</p>
            </div>
          </div>
          
          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
              <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,27,960,21.3C1120,16,1280,21,1360,24L1440,27L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z"></path>
            </svg>
          </div>
        </div>
  
        {/* Success Rate Alert Banner */}
        <div className="bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-900/20 dark:to-blue-900/20 border-l-4 border-red-500 dark:border-red-400 p-4 rounded-md mb-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800 dark:text-red-300">UK is Best for Study Visa</h3>
              <div className="mt-1 text-sm text-red-700 dark:text-red-200">
                The United Kingdom offers excellent study opportunities with <span className="font-semibold">high approval rates</span> when applications are properly documented.
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Layout */}
        <div className="space-y-10">
          {/* Visa Details Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">UK Visit Visa Details</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Embassy Fee</h4>
                <p className="text-gray-600 dark:text-gray-300">127 Great Britain Pound (135 after tax)</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Process Time</h4>
                <p className="text-gray-600 dark:text-gray-300">2 Months approx</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Visa Category</h4>
                <p className="text-gray-600 dark:text-gray-300">Visit Visa</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Visa Duration</h4>
                <p className="text-gray-600 dark:text-gray-300">6 Months</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Payment Method</h4>
                <p className="text-gray-600 dark:text-gray-300">Half upfront, half after destination</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Work Hours</h4>
                <p className="text-gray-600 dark:text-gray-300">BS: 32 hours/week, Masters: 40 hours/week</p>
              </div>
            </div>
  
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-600 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-red-800 dark:text-red-300">Earning Potential</h4>
                  <div className="mt-1 text-sm text-red-700 dark:text-red-200">
                    When working in the UK, you can expect to earn £12-£15 per hour.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Documents Checklist Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Documents Checklist</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Basic Documents</h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Valid Passport</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Must be valid for your entire stay in UK</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">ID Card</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">National identification card</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Photographs</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">4 recent photos with white background</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">MRC</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Marriage Registration Certificate (if married)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">FRC</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Family Registration Certificate</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Police Certificate</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Character certificate issued within last 180 days</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Job Profile Documents</h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Salary Slips</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last 6 months of salary statements</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Employee/Service Card</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Official company ID</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Appointment Letter</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Official employment confirmation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Bank Statement</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Showing 20-25 lakh balance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Account Maintenance Letter</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">From your bank confirming account status</p>
                    </div>
                  </li>
                </ul>
  
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4 mt-8">Business Profile Documents</h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">NTN</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">National Tax Number certificate</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Chamber Card & Certificate</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Chamber of Commerce membership</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">FBR Taxation Returns</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last 3 years of tax returns</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Property Documents</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">If applicable</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Application Process */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Application Process</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/60 rounded-full flex items-center justify-center">
                    <span className="text-red-700 dark:text-red-300 font-medium">1</span>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium text-gray-900 dark:text-white">Complete Online Application</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fill out the online visa application form on the GOV.UK website</p>
                  </div>
                </div>
                <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-red-100 dark:bg-red-900/30"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/60 rounded-full flex items-center justify-center">
                    <span className="text-red-700 dark:text-red-300 font-medium">2</span>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium text-gray-900 dark:text-white">Pay Application Fee</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Pay the application fee online (£127 + £8 tax)</p>
                  </div>
                </div>
                <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-red-100 dark:bg-red-900/30"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/60 rounded-full flex items-center justify-center">
                    <span className="text-red-700 dark:text-red-300 font-medium">3</span>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium text-gray-900 dark:text-white">Book Biometric Appointment</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Schedule an appointment at your nearest Visa Application Centre</p>
                  </div>
                </div>
                <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-red-100 dark:bg-red-900/30"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/60 rounded-full flex items-center justify-center">
                    <span className="text-red-700 dark:text-red-300 font-medium">4</span>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium text-gray-900 dark:text-white">Attend Appointment</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Provide biometrics (fingerprints and photo) and submit supporting documents</p>
                  </div>
                </div>
                <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-red-100 dark:bg-red-900/30"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/60 rounded-full flex items-center justify-center">
                    <span className="text-red-700 dark:text-red-300 font-medium">5</span>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium text-gray-900 dark:text-white">Wait for Processing</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Application processing typically takes around 2 months</p>
                  </div>
                </div>
                <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-red-100 dark:bg-red-900/30"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/60 rounded-full flex items-center justify-center">
                    <span className="text-red-700 dark:text-red-300 font-medium">6</span>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-medium text-gray-900 dark:text-white">Collect Your Passport</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Once a decision is made, collect your passport with visa or decision letter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Terms & Definitions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Terms & Definitions</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="font-medium text-red-700 dark:text-red-400">MRC</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Marriage Registration Certificate - An official document that confirms a legal marriage has taken place.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="font-medium text-red-700 dark:text-red-400">FRC</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Family Registration Certificate - A document that lists all family members and their relationships.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="font-medium text-red-700 dark:text-red-400">NTN</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  National Tax Number - A unique identifier issued to taxpayers for processing tax returns and payments.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="font-medium text-red-700 dark:text-red-400">FBR</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Federal Board of Revenue - The government agency responsible for tax collection and administration.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="font-medium text-red-700 dark:text-red-400">Chamber Card & Certificate</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Proof of membership in a local Chamber of Commerce, indicating legitimate business status.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="font-medium text-red-700 dark:text-red-400">Study Opportunities</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  The UK is known for excellent education institutions and offers favorable work hours for students.
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Can I work on a UK visit visa?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  No, a standard visitor visa does not permit you to work in the UK. If you want to work, you'll need a specific work visa or a student visa which allows limited working hours.
                </p>
              </div>
              
              <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">How much bank balance do I need to show?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  You should show around 20-25 lakh PKR in your bank account. The funds should ideally be maintained for at least 3-6 months to show financial stability.
                </p>
              </div>
              
              <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">How are payments structured for visa consultancy?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Payment is typically done in installments - half payment is due at the start of the process, and the remaining half is due after you reach your destination.
                </p>
              </div>
              
              <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">What are the work hour limits for students in the UK?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Bachelor's degree students can work up to 32 hours per week, while Master's degree students can work up to 40 hours per week. Typical hourly wages range from £12 to £15.
                </p>
              </div>
            </div>
          </div>
          
          {/* Consultation CTA */}
          <div className="bg-gradient-to-br from-red-600 to-blue-700 rounded-xl overflow-hidden shadow-lg">
            <div className="p-6 md:p-8 relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="consultationPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="3" cy="3" r="1.5" fill="#fff" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#consultationPattern)" />
                </svg>
              </div>
              
              <div className="relative md:flex items-center justify-between">
                <div className="mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Need Expert Guidance?</h3>
                  <p className="text-red-100 text-lg">
                    Our visa consultants specialize in UK visa applications and can provide personalized guidance for your specific situation.
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="/contact" 
                    className="px-6 py-3 bg-white text-red-700 font-medium rounded-lg shadow-lg hover:bg-red-50 text-center transition-colors"
                  >
                    Schedule Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }