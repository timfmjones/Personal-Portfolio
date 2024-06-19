import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service ID and template ID
    const serviceID = 'service_3b9crb3';
    const templateID = 'template_8yc1dib'; // Template ID from EmailJS
    const userID = 'vP2BKM0EF_eeQiyHe'; // user ID from EmailJS

    emailjs.send(serviceID, templateID, formData, userID)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        setFormData({ // Reset form after successful submission
          name: '',
          email: '',
          message: '',
        });
      }, error => {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <form className="w-full max-w-lg mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="John Doe" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="example@example.com" name="email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Your message" name="message" value={formData.message} onChange={handleChange} required rows="4"></textarea>
      </div>
      <div className="flex justify-center">
        <button className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
