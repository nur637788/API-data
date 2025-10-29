import React, { useState } from "react";
import { FaEnvelope, FaLocationArrow,  FaWhatsapp} from "react-icons/fa6";


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
    <div>
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 bg-white text-white px-6 py-20">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-900 text-center mb-8 px-10">
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
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-pink-500"/>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-pink-500"/>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-pink-500"/>

          <textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-pink-500"></textarea>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 py-2 rounded-md font-semibold transition-all duration-200">
            Send Message
          </button>
        </form>
      </div>

       <div className="bg-white  w-full max-w-lg p-8 rounded-2xl shadow-lg space-y-5">
          <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">Get In Tach</h2>
          <div className="flex  items-center gap-5 text-black">
            <div className="  text-4xl"><FaWhatsapp /> </div>
            <div className="text-xl hover:underline"><a href="tel:+8801749535688">01749535688</a></div>
          </div>
          <div className="flex  items-center gap-5 text-black">
            <div className="  text-4xl"><FaEnvelope /> </div>
            <div className="text-xl hover:underline"><a href="Mailto:mdnoyon63@outlook.com">Send Mail...</a></div>
          </div>
          <div className="flex  items-center gap-5 text-black">
            <div className="  text-4xl"><FaLocationArrow /> </div>
            <div className="text-xl hover:underline"><a href="">Mohakhali, Dhaka-1212</a></div>
          </div>
          <h3 className="text-2xl text-red-500 text-center font-semibold">Thank you for visiting our website.</h3>
        </div>
    </section>
      
    </div>
  );
}

export default Contact;
