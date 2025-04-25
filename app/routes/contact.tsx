export default function Contact() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea 
              id="message" 
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" 
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  
  export function meta() {
    return [
      { title: "Contact | GQ Consultants" },
      { name: "description", content: "Contact GQ Consultants" },
    ];
  }