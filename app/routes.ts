import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("contact", "routes/contact.tsx"),
  route("countries", "routes/countries/layout.tsx", [
    index("routes/index.tsx"),
    // Remove the dynamic route and add static routes
    route("us", "routes/countries/us.tsx"),
    route("canada-visit-visa", "routes/countries/canada-visit-visa.tsx"),
    // route("ca", "routes/countries/ca.tsx"),
    // Add more country routes as needed
  ]),
] satisfies RouteConfig;