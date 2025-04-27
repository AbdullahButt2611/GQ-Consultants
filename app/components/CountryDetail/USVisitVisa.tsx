import { countries } from "~/content/contryinfo";

export default function USVisitVisa() {
  const countryInfo = countries.find(c => c.slug === "us-visit-visa");
  
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

      {/* Interview Alert Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-900/20 dark:to-red-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 rounded-md mb-6 shadow-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-500 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">Interview Required</h3>
            <div className="mt-1 text-sm text-blue-700 dark:text-blue-200">
              A personal interview at the US Embassy is mandatory for all applicants. Prepare thoroughly as the interview is a critical part of the application process.
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
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">USA Visit Visa Details</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Embassy Fee</h4>
              <p className="text-gray-600 dark:text-gray-300">165 US dollars</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Process Time</h4>
              <p className="text-gray-600 dark:text-gray-300">3-4 Months approx</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Visa Category</h4>
              <p className="text-gray-600 dark:text-gray-300">Multiple Entry Visa</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Visa Duration</h4>
              <p className="text-gray-600 dark:text-gray-300">5 Years</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Stay Duration</h4>
              <p className="text-gray-600 dark:text-gray-300">In-out after 6 months</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-2">Interview</h4>
              <p className="text-gray-600 dark:text-gray-300">Mandatory</p>
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
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Must be valid for at least six months beyond your planned stay</p>
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
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Company Letterhead</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">With company details and contact information</p>
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
                  <h5 className="font-medium text-gray-900 dark:text-white">Complete DS-160 Form</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fill out the Online Nonimmigrant Visa Application (DS-160) form</p>
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
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Pay the $165 USD non-refundable visa application fee</p>
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
                  <h5 className="font-medium text-gray-900 dark:text-white">Schedule Interview</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Book your visa interview appointment at the U.S. Embassy or Consulate</p>
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
                  <h5 className="font-medium text-gray-900 dark:text-white">Prepare Documentation</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Gather all required documents and evidence of ties to your home country</p>
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
                  <h5 className="font-medium text-gray-900 dark:text-white">Attend Interview</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Appear for your scheduled interview at the U.S. Embassy or Consulate</p>
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
                  <h5 className="font-medium text-gray-900 dark:text-white">Wait for Processing</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Application processing typically takes 3-4 months</p>
                </div>
              </div>
              <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-red-100 dark:bg-red-900/30"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/60 rounded-full flex items-center justify-center">
                  <span className="text-red-700 dark:text-red-300 font-medium">7</span>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Collect Passport</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">When approved, collect your passport with the visa from the designated location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interview Preparation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Interview Preparation</h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The interview is a critical component of the U.S. visa application process. Being well-prepared can significantly increase your chances of approval.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg border border-gray-100 dark:border-gray-700">
              <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-3">Common Interview Questions</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  What is the purpose of your visit to the United States?
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  How long do you plan to stay in the United States?
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  What are your ties to your home country?
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  How will you finance your trip?
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  Where will you be staying in the United States?
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg border border-gray-100 dark:border-gray-700">
              <h4 className="font-medium text-lg text-red-700 dark:text-red-400 mb-3">Interview Tips</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Dress professionally and arrive early
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Answer questions truthfully and concisely
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Speak clearly and confidently in English if possible
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Demonstrate strong ties to your home country
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Be prepared to explain your travel purpose clearly
                </li>
              </ul>
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
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">What is a B1/B2 visa?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                The B1/B2 visa is a non-immigrant visa for temporary visitors to the United States. The B1 visa is for business visitors, while the B2 visa is for tourism, pleasure, or visiting friends and relatives.
              </p>
            </div>
            
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">How long can I stay in the US with a visitor visa?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                While the visa is valid for 5 years, each entry allows you to stay for up to 6 months. You must leave after 6 months but can re-enter for another stay during the visa's validity period.
              </p>
            </div>
            
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">What does "multiple entry" mean?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A multiple entry visa allows you to enter and exit the United States as many times as you wish during the visa's validity period (5 years), without having to reapply for a new visa each time.
              </p>
            </div>
            
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Can I work on a B1/B2 visa?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                No, you cannot work or receive payment from a U.S. source while on a visitor visa. If you intend to work in the United States, you must apply for the appropriate work visa.
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
                <h3 className="text-2xl font-bold text-white mb-2">Ace Your Visa Interview</h3>
                <p className="text-blue-100 text-lg">
                  Our visa consultants specialize in preparing applicants for US visa interviews with mock sessions and personalized guidance to maximize approval chances.
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