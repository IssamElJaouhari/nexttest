import React from 'react';

const ContactPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We'd love to hear from you. Feel free to reach out with any questions or inquiries!
        </p>
        {/* Optional: add contact form or contact info here */}
      </div>
    </main>
  );
};

export default ContactPage;
