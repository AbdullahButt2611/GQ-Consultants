export interface CountryInfo {
    code: string;
    name: string;
    description: string;
    flagUrl?: string;
    slug: string;
  }
  
  export const countries: CountryInfo[] = [
    {
      code: "CA",
      name: "Canada",
      description: "Visit Visa Process for Canada",
      flagUrl: "/images/flags/ca.jpg",
      slug: "canada-visit-visa"
    },
    {
      code: "UK",
      name: "UK",
      description: "Visit Visa Process for UK",
      flagUrl: "/images/flags/uk.webp",
      slug: "uk-visit-visa"
    },
    {
      code: "AU",
      name: "Australia",
      description: "Tourist and  Visit Visa Process for Australia",
      flagUrl: "/images/flags/au.png",
      slug: "australia-visit-visa"
    },
    {
      code: "US",
      name: "United States",
      description: "Visit Visa Process for USA",
      flagUrl: "/images/flags/us.svg",
      slug: "us-visit-visa"
    },
    {
      code: "IE",
      name: "Ireland",
      description: "Visit Visa Process for Ireland",
      flagUrl: "/images/flags/ie.png",
      slug: "ie-visit-visa"
    },
    // {
    //   code: "US",
    //   name: "United States",
    //   description: "Tourist & Business Visa Application Process",
    //   flagUrl: "/images/flags/us.svg"
    // },
  ];