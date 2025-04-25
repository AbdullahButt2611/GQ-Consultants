import { CountryTile } from "~/components/Tile/CountryTile";
import { countries } from "~/content/contryinfo";


export default function CountriesIndex() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Countries We Serve</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Select a country below to learn more about its visa requirements and application process.
      </p>
      
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