export default function Services() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <p className="mb-4">
          Add your services content here.
        </p>
      </div>
    );
  }
  
  export function meta() {
    return [
      { title: "Services | GQ Consultants" },
      { name: "description", content: "Services offered by GQ Consultants" },
    ];
  }