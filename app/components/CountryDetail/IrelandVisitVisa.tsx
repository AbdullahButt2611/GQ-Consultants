import { countries } from "~/content/contryinfo";

export default function IrelandVisitVisa() {
  const countryInfo = countries.find(c => c.slug === "ie-visit-visa");
  
  if (!countryInfo) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header Section with Gradient */}
      <div className="relative bg-gradient-to-r from-green-600 to-orange-500 rounded-xl overflow-hidden mb-10">
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
            <p className="text-green-100">Visit Visa Information & Requirements</p>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,27,960,21.3C1120,16,1280,21,1360,24L1440,27L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z"></path>
          </svg>
        </div>
      </div>

      {/* Visa Types Alert Banner */}
      <div className="bg-gradient-to-r from-green-50 to-orange-50 dark:from-green-900/20 dark:to-orange-900/20 border-l-4 border-green-500 dark:border-green-400 p-4 rounded-md mb-6 shadow-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800 dark:text-green-300">Two Visa Classes Available</h3>
            <div className="mt-1 text-sm text-green-700 dark:text-green-200">
              Ireland offers two visa classes: <span className="font-semibold">Short Stay C Class (€60)</span> and <span className="font-semibold">Long Stay D Class (€100)</span>. Choose the one that best fits your travel plans.
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Layout */}
      <div className="space-y-10">
        {/* Visa Details Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Ireland Visit Visa Details</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-green-700 dark:text-green-400 mb-2">Embassy Fee</h4>
              <p className="text-gray-600 dark:text-gray-300">60-100 Euro (depends on visa type)</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-green-700 dark:text-green-400 mb-2">VFS Charges</h4>
              <p className="text-gray-600 dark:text-gray-300">65 Euro (online submission fee)</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-green-700 dark:text-green-400 mb-2">Process Time</h4>
              <p className="text-gray-600 dark:text-gray-300">2-3 Months (profile dependent)</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-green-700 dark:text-green-400 mb-2">Visa Category</h4>
              <p className="text-gray-600 dark:text-gray-300">Short Stay C / Long Stay D</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-green-700 dark:text-green-400 mb-2">Visa Duration</h4>
              <p className="text-gray-600 dark:text-gray-300">3 months</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-green-700 dark:text-green-400 mb-2">Total Approx. Cost</h4>
              <p className="text-gray-600 dark:text-gray-300">125-165 Euro + processing fees</p>
            </div>
          </div>
        </div>
        
        {/* Documents Checklist Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Valid Passport</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Must be valid for at least 3 months beyond your planned stay</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">ID Card</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">National identification card</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Photographs</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">4 recent photos with white background</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">MRC</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Marriage Registration Certificate (if married)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">FRC</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Family Registration Certificate</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Salary Slips</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last 6 months of salary statements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Employee/Service Card</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Official company ID</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Appointment Letter</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Official employment confirmation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Bank Statement</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Showing 20-25 lakh balance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">NTN</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">National Tax Number certificate</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Chamber Card & Certificate</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Chamber of Commerce membership</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">FBR Taxation Returns</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last 3 years of tax returns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Property Documents</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">If applicable</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Application Process</h3>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center">
                  <span className="text-green-700 dark:text-green-300 font-medium">1</span>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Online Registration</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Create an account on the Irish visa application portal</p>
                </div>
              </div>
              <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-green-100 dark:bg-green-900/30"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center">
                  <span className="text-green-700 dark:text-green-300 font-medium">2</span>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Select Visa Type</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Choose between Short Stay C Class (€60) or Long Stay D Class (€100)</p>
                </div>
              </div>
              <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-green-100 dark:bg-green-900/30"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center">
                  <span className="text-green-700 dark:text-green-300 font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Complete Online Application</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fill out all required details and generate your application form</p>
                </div>
              </div>
              <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-green-100 dark:bg-green-900/30"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center">
                  <span className="text-green-700 dark:text-green-300 font-medium">4</span>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Pay Application & VFS Fees</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Pay the visa fee (€60-100) and VFS service charge (€65)</p>
                </div>
              </div>
              <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-green-100 dark:bg-green-900/30"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center">
                  <span className="text-green-700 dark:text-green-300 font-medium">5</span>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Book Appointment at VFS</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Schedule an appointment to submit your documents at the VFS Global center</p>
                </div>
              </div>
              <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-green-100 dark:bg-green-900/30"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center">
                  <span className="text-green-700 dark:text-green-300 font-medium">6</span>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Submit Documents</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Visit the VFS center on your appointment date with all required documents</p>
                </div>
              </div>
              <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-green-100 dark:bg-green-900/30"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center">
                  <span className="text-green-700 dark:text-green-300 font-medium">7</span>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Wait for Processing</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Application processing typically takes 2-3 months depending on your profile</p>
                </div>
              </div>
              <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-green-100 dark:bg-green-900/30"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center">
                  <span className="text-green-700 dark:text-green-300 font-medium">8</span>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Collect Passport</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Once processed, collect your passport with visa or decision letter from VFS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visa Types Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Visa Types Explained</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg border border-gray-100 dark:border-gray-700">
              <h4 className="font-medium text-lg text-green-700 dark:text-green-400 mb-3">Short Stay C Visa (€60)</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  For visits up to 90 days
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Tourism, visiting family or friends
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Business meetings or conferences
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Short-term study or training
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Medical treatment
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg border border-gray-100 dark:border-gray-700">
              <h4 className="font-medium text-lg text-green-700 dark:text-green-400 mb-3">Long Stay D Visa (€100)</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  For intended stays longer than 90 days
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Education or studying
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Employment (with proper work permits)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Family reunification
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Research or volunteering
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-6">
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">What is VFS Global?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                VFS Global is a commercial company that has been contracted by the Irish government to accept visa applications. They handle the administrative part of the visa process, while the actual decision on your application is made by Irish immigration authorities.
              </p>
            </div>
            
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">How long can I stay in Ireland with a Short Stay C visa?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A Short Stay C visa allows you to stay in Ireland for up to 90 days (3 months). Your specific permitted duration will be stated on your visa and cannot be extended while in Ireland.
              </p>
            </div>
            
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Do I need to show travel insurance?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you need to provide proof of medical travel insurance that covers any potential medical expenses, emergency hospital treatment, and repatriation. The insurance should cover costs of at least €30,000 and be valid for the entire duration of your stay.
              </p>
            </div>
            
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Can I work on a visitor visa in Ireland?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                No, neither the Short Stay C visa nor the Long Stay D visitor visas permit you to work in Ireland. If you wish to work, you need to apply for the appropriate employment permit and relevant visa.
              </p>
            </div>
          </div>
        </div>
        
        {/* Consultation CTA */}
        <div className="bg-gradient-to-br from-green-600 to-orange-500 rounded-xl overflow-hidden shadow-lg">
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
                <h3 className="text-2xl font-bold text-white mb-2">Need Help With Your Irish Visa?</h3>
                <p className="text-green-100 text-lg">
                  Our experienced consultants can guide you through the entire Irish visa application process, ensuring all documentation is properly prepared to maximize your approval chances.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-white text-green-700 font-medium rounded-lg shadow-lg hover:bg-green-50 text-center transition-colors"
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