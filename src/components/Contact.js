import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-lg text-center mb-8">Feel free to drop me a message below!</p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
