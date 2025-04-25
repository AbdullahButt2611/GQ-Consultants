import { useParams } from "react-router";
import { countries } from "~/content/contryinfo";


export default function CountryDetail() {
  const { countryCode } = useParams();
  const countryInfo = countries.find(
    c => c.code.toLowerCase() === countryCode?.toLowerCase()
  );

  if (!countryInfo) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Country Not Found</h2>
        <p>Sorry, we couldn't find information for this country.</p>
      </div>
    );
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
            <li>Tourist Visa</li>
            <li>Business Visa</li>
            <li>Student Visa</li>
            <li>Work Visa</li>
            <li>Immigration Visa</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-2">Application Process</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Complete the visa application form</li>
            <li>Gather required documents</li>
            <li>Pay the application fee</li>
            <li>Schedule an appointment</li>
            <li>Attend the visa interview</li>
            <li>Wait for visa processing</li>
          </ol>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Valid passport</li>
            <li>Visa application form</li>
            <li>Passport-sized photos</li>
            <li>Proof of financial means</li>
            <li>Travel itinerary</li>
            <li>Accommodation details</li>
            <li>Medical insurance</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
          <p>Typical processing time for {countryInfo.name} visas is 2-4 weeks.</p>
        </section>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
          <h4 className="font-semibold mb-2">Need assistance?</h4>
          <p className="text-sm">Our visa consultants can help you with the entire application process. <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> for professional assistance.</p>
        </div>
      </div>
    </div>
  );
}