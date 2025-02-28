// app/page.tsx
import React from "react";

// The homepage component
const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-semibold">Welcome to Lawyer's Website</h1>
        <p className="text-lg">Your legal partner for all your needs</p>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow p-6 bg-gray-100">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <p>
            We offer a wide range of legal services, including consultation,
            representation, and document preparation.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us!</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white p-4">
        <p>&copy; 2025 Lawyer's Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
}
