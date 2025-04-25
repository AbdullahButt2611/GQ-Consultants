import { Link } from "react-router";

export interface CountryTileProps {
  countryCode: string;
  countryName: string;
  description: string;
  flagImage?: string;
}

export function CountryTile({ 
  countryCode,
  countryName, 
  description, 
  flagImage
}: CountryTileProps) {
  return (
    <Link 
      to={`/countries/${countryCode.toLowerCase()}`} 
      className="block h-full group"
    >
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300">
        {/* Background pattern - adds subtle texture */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        
        {/* Main content container */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Country name with distinctive styling */}
          <div className="mb-6">
            <h3 className="font-bold text-xl text-gray-800 dark:text-white relative inline-block">
              {countryName}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h3>
          </div>
          
          {/* Flag image in distinctive placement */}
          <div className="flex items-start mb-4">
            <div className="w-16 h-12 mr-4 overflow-hidden rounded shadow-md">
              {flagImage ? (
                <img 
                  src={flagImage} 
                  alt={`${countryName}`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-xs font-bold">{countryCode}</div>
                </div>
              )}
            </div>
            
            {/* Description */}
            <div className="flex-1">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {description}
              </p>
            </div>
          </div>
          
          {/* Distinctive styled footer with subtle arrow */}
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{countryCode}</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-300">
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Distinctive corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12">
          <div className="absolute transform rotate-45 bg-blue-600 shadow-sm -right-6 -top-6 w-12 h-12"></div>
        </div>
      </div>
    </Link>
  );
}