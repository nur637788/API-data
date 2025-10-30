import React, { useState } from "react";
import { FaEnvelope, FaLocationArrow, FaWhatsapp } from "react-icons/fa6";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingContacts = JSON.parse(localStorage.getItem("contacts")) || [];

    existingContacts.push(formData);
    // local Storage a data rakhchi
    localStorage.setItem("contacts", JSON.stringify(existingContacts));

    alert("✅ Message Sent Successfully! We'll get back to you soon.");
    // Form khali korchi
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <section className=" grid grid-cols-1 max-w-2xl m-auto gap-5 justify-center bg-white text-white px-6 md:px-10 py-20">
        <div className="bg-white w-full  p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-900 text-center mb-8 px-20">
            Have any questions or suggestions? Feel free to contact us!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md shadow text-gray-700 bg-white border border-e-blue-600 outline-none focus:ring-2 focus:ring-pink-500" />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md shadow text-gray-700 bg-white border border-e-blue-600 outline-none focus:ring-2 focus:ring-pink-500" />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md shadow text-gray-700 bg-white border border-e-blue-600 outline-none focus:ring-2 focus:ring-pink-500" />

            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 rounded-md shadow text-gray-700 bg-white border border-e-blue-600 outline-none focus:ring-2 focus:ring-pink-500"></textarea>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 py-2 rounded-md font-semibold transition-all duration-200">
              Send Message
            </button>
          </form>
        </div>

      </section>

    </div>
  );
}

export default Contact;
