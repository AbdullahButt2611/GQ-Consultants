import { Link } from "react-router";

export interface CountryTileProps {
  countryCode: string;
  countryName: string;
  description: string;
  flagImage?: string;
}

export function CountryTile({ countryCode, countryName, description, flagImage }: CountryTileProps) {
  return (
    <Link 
      to={`/countries/${countryCode.toLowerCase()}`} 
      className="block transform transition-transform duration-300 hover:scale-105"
    >
      <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl">
        <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600">
          {flagImage && (
            <div className="h-40 bg-gray-100 dark:bg-gray-700 overflow-hidden">
              <img 
                src={flagImage} 
                alt={`${countryName} flag`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {!flagImage && (
            <div className="h-40 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">{countryCode}</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">{countryName}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}