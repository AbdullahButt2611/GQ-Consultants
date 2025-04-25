import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GQ Consultants" },
    { name: "description", content: "Welcome to GQ Consultants" },
  ];
}

export default function Home() {
  return <Welcome />;
}