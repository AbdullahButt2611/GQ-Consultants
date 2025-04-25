export default function About() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">About GQ Consultants</h1>
        <p className="mb-4">
          Add your about content here.
        </p>
      </div>
    );
  }
  
  export function meta() {
    return [
      { title: "About | GQ Consultants" },
      { name: "description", content: "About GQ Consultants" },
    ];
  }