import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Logging for debugging
    console.log('Service ID:', 'service_xxx123');
    console.log('Template ID:', 'template_abc456');
    console.log('Public Key:', process.env.REACT_APP_EMAILJS_USER_ID);

    emailjs
      .send(
        'service_xxx123', // Replace with your Service ID
        'template_abc456', // Replace with your Template ID
        {
          name: formData.name, // Template variable for name
          email: formData.email, // Template variable for email
          message: formData.message, // Template variable for message
        },
        process.env.REACT_APP_EMAILJS_USER_ID // Securely stored Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus(`Failed to send message. Error: ${error.text || 'Unknown error.'}`);
        }
      );
  };

  return (
    <section id="contact-me" className="p-12 md:p-24 bg-gray-100 h-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-lg mt-4 text-gray-600">
          I'd love to hear from you! Feel free to reach out via the form below or connect with me on social media.
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-2 p-3 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full mt-2 p-3 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="w-full mt-2 p-3 border rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-center text-sm ${
                status.includes('successfully') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {status}
            </p>
          )}
        </div>
        <div className="text-center md:w-1/3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Me</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:umranabdo112@gmail.com"
                className="text-red-600 hover:underline"
              >
                Email Me
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/yourprofile" // Replace with your actual Facebook profile link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/yourphonenumber" // Replace with your actual WhatsApp contact link
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
