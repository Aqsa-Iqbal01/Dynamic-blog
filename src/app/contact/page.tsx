
'use client'
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  // State to track form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // State to handle success or error message
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission logic
    setTimeout(() => {
      // Simulate successful form submission
      setIsSuccess(true);
      setStatusMessage('Your message has been sent successfully!');
      
      // Clear form data
      setFormData({ name: '', email: '', message: '' });
    }, 1000); // Simulate a delay (e.g., API call delay)
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-screen"
          style={{
            backgroundImage: "url('/background-image.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gray-400 opacity-10"></div>

          {/* Contact Content */}
          <div className="relative py-20 px-8 text-center text-black z-10">
            {/* Contact Header */}
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              We’d love to hear from you! Whether you have questions, feedback, or just want to chat, feel free to reach out.
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="www.gmail.com"
                className="text-black hover:text-blue-500 text-4xl transition-all"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-500 text-4xl transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Aqsa-Iqbal01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-500 text-4xl transition-all"
              >
                <FaGithub />
              </a>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg p-8 shadow-xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="text-start">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="text-start">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="text-start">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="What would you like to say?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={6}
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              {/* Status message */}
              {statusMessage && (
                <div
                  className={`mt-6 text-center p-4 rounded-md ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                >
                  {statusMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
