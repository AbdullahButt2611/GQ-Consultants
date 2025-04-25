import { Outlet } from "react-router";
import { Link } from "react-router";
import { countries } from "~/content/contryinfo";

export function Layout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Countries
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <Outlet />
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Other Countries</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {countries.map(country => (
              <Link 
                key={country.code}
                to={`/countries/${country.code.toLowerCase()}`}
                className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                {country.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}