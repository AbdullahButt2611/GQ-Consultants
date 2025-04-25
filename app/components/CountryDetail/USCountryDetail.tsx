import { countries } from "~/content/contryinfo";

export default function USCountryDetail() {
  const countryInfo = countries.find(c => c.code === "US");
  
  if (!countryInfo) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        {countryInfo.flagUrl && (
          <img 
            src={countryInfo.flagUrl} 
            alt={`${countryInfo.name} flag`} 
            className="w-16 h-12 object-cover rounded shadow"
          />
        )}
        <h2 className="text-2xl font-bold">{countryInfo.name} Visa Information</h2>
      </div>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">Visa Types</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>B-1 Business Visa</li>
            <li>B-2 Tourist Visa</li>
            <li>F-1 Student Visa</li>
            <li>H-1B Work Visa</li>
            <li>Green Card (Permanent Resident)</li>
          </ul>
        </section>
        
        {/* Rest of the US-specific content */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
          <p>Typical processing time for {countryInfo.name} visas is 3-5 weeks.</p>
        </section>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">Need assistance with US visas?</h4>
          <p className="text-sm">Our visa consultants can help you with the entire application process. <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> for professional assistance.</p>
        </div>
      </div>
    </div>
  );
}