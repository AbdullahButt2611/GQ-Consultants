import { CountryTile } from "~/components/Tile/CountryTile";
import { countries } from "~/content/contryinfo";

export default function CountriesIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Countries We Serve
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Select a country below to learn more about its visa requirements and application process.
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Detailed information about visa processes, requirements, and documentation for each country</span>
          </div>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
        <div className="mb-4 sm:mb-0">
          <p className="font-medium text-gray-700 dark:text-gray-300">
            <span className="text-blue-600 dark:text-blue-400 font-bold">{countries.length}</span> countries available
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
          <select className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm px-3 py-1">
            <option>Alphabetical</option>
            <option>Popularity</option>
            <option>Region</option>
          </select>
        </div>
      </div>
      
      {/* Countries Grid with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {countries.map((country, index) => (
          <div key={country.code} className="transform transition-all duration-300" style={{ 
            animationDelay: `${index * 0.05}s`,
            animationName: 'fadeIn',
            animationDuration: '0.5s',
            animationFillMode: 'both'
          }}>
            <CountryTile 
              countryCode={country.code}
              countryName={country.name}
              description={country.description}
              flagImage={country.flagUrl}
              slug={country.slug}
            />
          </div>
        ))}
      </div>
      
      {/* Contact Section */}
      <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Need help choosing a destination?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our consultants can help you find the best destination based on your profile and goals.
            </p>
          </div>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            Get Expert Advice
          </a>
        </div>
      </div>
    </div>
  );
}

export function meta() {
  return [
    { title: "Countries | GQ Consultants" },
    { 
      name: "description", 
      content: "Visa application information for various countries - GQ Consultants" 
    },
  ];
}