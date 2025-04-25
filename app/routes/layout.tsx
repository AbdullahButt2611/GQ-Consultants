import { Link } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow dark:bg-gray-800">
        <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">GQ Consultants</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} GQ Consultants. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}