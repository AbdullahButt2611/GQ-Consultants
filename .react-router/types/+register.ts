import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/about": {};
  "/services": {};
  "/contact": {};
  "/countries": {};
  "/countries/us": {};
  "/countries/canada-visit-visa": {};
  "/countries/uk-visit-visa": {};
  "/countries/australia-visit-visa": {};
  "/countries/us-visit-visa": {};
  "/countries/ie-visit-visa": {};
  "/countries/sc-visit-visa": {};
};