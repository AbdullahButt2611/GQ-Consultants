export interface CountryInfo {
    code: string;
    name: string;
    description: string;
    flagUrl?: string;
  }
  
  export const countries: CountryInfo[] = [
    {
      code: "US",
      name: "United States",
      description: "Tourist & Business Visa Application Process",
      flagUrl: "/images/flags/us.svg"
    },
    {
      code: "CA",
      name: "Canada",
      description: "Visitor & Work Permit Application",
      flagUrl: "/images/flags/ca.jpg"
    },
    // {
    //   code: "UK",
    //   name: "United Kingdom",
    //   description: "Tourist & Student Visa Processing",
    //   flagUrl: "/images/flags/uk.jpg"
    // },
    // {
    //   code: "AU",
    //   name: "Australia",
    //   description: "Visitor & Skilled Migration Visas",
    //   flagUrl: "/images/flags/au.jpg"
    // },
    // {
    //   code: "NZ",
    //   name: "New Zealand",
    //   description: "Tourist & Working Holiday Visas",
    //   flagUrl: "/images/flags/nz.jpg"
    // },
    // {
    //   code: "SG",
    //   name: "Singapore",
    //   description: "Tourist & Business Travel Visas",
    //   flagUrl: "/images/flags/sg.jpg"
    // }
  ];