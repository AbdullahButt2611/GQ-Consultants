import { countries } from "~/content/contryinfo";

export default function USCountryDetail() {
  const countryInfo = countries.find(c => c.code === "US");
  
  if (!countryInfo) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header Section with Gradient - Keep as is */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl overflow-hidden mb-10">
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
            <p className="text-blue-100">Visa Information & Requirements</p>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,27,960,21.3C1120,16,1280,21,1360,24L1440,27L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z"></path>
          </svg>
        </div>
      </div>
      
      {/* New Content Layout - More spacious and soothing */}
      <div className="space-y-10">
        {/* Visa Types Section - Card-based layout */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Available Visa Types</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-blue-700 dark:text-blue-400 mb-2">B-1 Business Visa</h4>
              <p className="text-gray-600 dark:text-gray-300">For business activities, meetings, conferences, and professional events.</p>
              <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Valid for up to 6 months
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-blue-700 dark:text-blue-400 mb-2">B-2 Tourist Visa</h4>
              <p className="text-gray-600 dark:text-gray-300">For tourism, pleasure, visiting friends or relatives, medical treatment.</p>
              <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Valid for up to 6 months
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-blue-700 dark:text-blue-400 mb-2">F-1 Student Visa</h4>
              <p className="text-gray-600 dark:text-gray-300">For academic studies, language training programs, and educational pursuits.</p>
              <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Duration of study program
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-blue-700 dark:text-blue-400 mb-2">H-1B Work Visa</h4>
              <p className="text-gray-600 dark:text-gray-300">For specialized occupation workers with higher education or expertise.</p>
              <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Up to 3 years initially
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg text-blue-700 dark:text-blue-400 mb-2">Green Card</h4>
              <p className="text-gray-600 dark:text-gray-300">Permanent residency status allowing indefinite stay in the United States.</p>
              <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Permanent (10-year renewal)
              </div>
            </div>
          </div>
        </div>
        
        {/* Application Process & Requirements */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Application Process</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Required Documents</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Valid Passport</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Must be valid for at least 6 months beyond your intended stay</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">DS-160 Form</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Completed Online Nonimmigrant Visa Application</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Application Fee Receipt</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Proof of payment for visa application fee</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Photo</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">2"x2" color photo with white background (taken within last 6 months)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium">Supporting Documents</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Purpose of trip, intent to return, financial ability to cover expenses</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Process Timeline</h4>
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/60 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 dark:text-blue-300 font-medium">1</span>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">Complete DS-160 Form</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fill out the online application form with accurate information</p>
                    </div>
                  </div>
                  <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-blue-100 dark:bg-blue-900/30"></div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/60 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 dark:text-blue-300 font-medium">2</span>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">Pay Application Fee</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">$160-$190 depending on visa category</p>
                    </div>
                  </div>
                  <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-blue-100 dark:bg-blue-900/30"></div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/60 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 dark:text-blue-300 font-medium">3</span>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">Schedule Interview</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Book appointment at local U.S. Embassy or Consulate</p>
                    </div>
                  </div>
                  <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-blue-100 dark:bg-blue-900/30"></div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/60 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 dark:text-blue-300 font-medium">4</span>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">Attend Interview</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Bring all required documents and answer questions honestly</p>
                    </div>
                  </div>
                  <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-blue-100 dark:bg-blue-900/30"></div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/60 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 dark:text-blue-300 font-medium">5</span>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">Receive Visa</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">If approved, passport with visa will be returned (typically 3-5 business days)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Processing Times & Fees */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Processing Details</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Processing Times</h4>
              
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Standard Processing</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">3-5 weeks</span>
                  </div>
                  <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="h-2.5 rounded-full bg-blue-500" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Typical processing time for most applications
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Expedited Processing</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">1-2 weeks</span>
                  </div>
                  <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="h-2.5 rounded-full bg-green-500" style={{ width: '35%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Available for certain cases with additional fees
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/50 mt-4">
                  <div className="flex">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Processing times may vary based on nationality, application volume, and embassy workload. We recommend applying at least 3 months before your planned travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Visa Fees</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Application Fee (MRV)</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">$160</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Standard fee for most non-immigrant visa categories
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">H Visa Fee</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">$190</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    For H-category temporary worker visas
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">SEVIS Fee (F/M visas)</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">$350</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Required for students and exchange visitors
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Reciprocity Fee</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Varies</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Additional fee based on applicant's nationality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-6">
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">How long can I stay in the US with a B-2 tourist visa?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Typically, you can stay for up to 6 months, but the exact duration will be determined by the CBP officer at your port of entry. The officer will stamp your passport with the admitted-until date.
              </p>
            </div>
            
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Can I work on an F-1 student visa?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                F-1 students can work on-campus up to 20 hours per week during the school year and full-time during breaks. Off-campus work requires special authorization like CPT (Curricular Practical Training) or OPT (Optional Practical Training).
              </p>
            </div>
            
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">What happens if my visa application is rejected?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                You may reapply, but it's important to address the reasons for the initial rejection. Our consultants can help you strengthen your application for a higher chance of success. There is no appeal process, but you can submit a new application with additional supporting documents.
              </p>
            </div>
            
            <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Can I extend my stay once I'm in the United States?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you may apply for an extension by filing Form I-539 with USCIS before your authorized stay expires. However, approval is not guaranteed and you must have valid reasons for the extension request.
              </p>
            </div>
          </div>
        </div>
        
        {/* Consultation CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl overflow-hidden shadow-lg">
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
                <p className="text-blue-100 text-lg">
                  Our visa consultants specialize in US visa applications and can provide personalized guidance for your specific situation.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-blue-50 text-center transition-colors"
                >
                  Schedule Free Consultation
                </a>
                <a 
                  href="/services/us-visa" 
                  className="px-6 py-3 bg-transparent text-white border border-white/30 font-medium rounded-lg hover:bg-blue-700/30 text-center transition-colors"
                >
                  View Our Success Rate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}