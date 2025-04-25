import { CountryTile } from "~/components/Tile/CountryTile";
import { countries } from "~/content/contryinfo";


export function Welcome() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          GQ Visa Consultants
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Professional visa services for multiple countries. 
          Let our experts guide you through the application process.
        </p>
      </div>
      
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Countries We Serve</h2>
          <a href="/countries" className="text-blue-600 hover:text-blue-800 hover:underline">View All Countries</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <CountryTile 
              key={country.code}
              countryCode={country.code}
              countryName={country.name}
              description={country.description}
              flagImage={country.flagUrl}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-white">
        <div className="md:flex items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Need Professional Assistance?</h3>
            <p className="text-blue-100 max-w-xl">
              Our team of visa experts is ready to help you navigate the complex visa 
              application process for your desired destination.
            </p>
          </div>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}