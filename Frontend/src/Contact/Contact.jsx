import React from "react";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
   <>
   <Navbar />
   
    <section className="min-h-screen bg-gray-900 dark:bg-slate-300 py-20 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Let's Talk Books!</h2>
          <p className="text-lg mb-6 text-gray-600">
            Whether you're a reader, author, or publisher — we’d love to connect! Reach out to discuss reviews, collaborations, or just your favorite book.
          </p>

          <div className="space-y-4 text-gray-700 text-md">
            <p><span className="font-semibold">Email:</span> enquiry@shimlamirchbooks.com</p>
            <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
            <p><span className="font-semibold">Location:</span> Remote / India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-700 p-8 rounded-xl shadow-lg dark:bg-slate-200 space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Tell us about your favorite book or how we can help..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-700 hover:bg-red-900 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
</>
  );
};

export default Contact;
