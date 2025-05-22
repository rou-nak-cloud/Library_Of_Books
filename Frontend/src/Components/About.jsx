import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <> 
    <Navbar />
    <section className="min-h-screen bg-slate-400 dark:bg-slate-300 py-20 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">About Shimlamirch</h1>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-12">
          Shimlamirch is more than a website — it's a sanctuary for book lovers, storytellers, and curious minds. Whether you're into ancient epics, modern fiction, or thought-provoking non-fiction, we’re here to turn every scroll into a story.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="space-y-6 text-gray-700 text-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p>
            We aim to ignite a passion for reading in every corner of the internet. With curated book lists, reviews, and author interviews, we’re building a digital library where imagination thrives.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Why the Name Shimlamirch?</h2>
          <p>
            Like the vibrant spice it’s named after, Shimlamirch blends flavor and curiosity — we believe every book should surprise you, nourish your soul, and leave a little heat behind.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Join the Story</h2>
          <p>
            From readers to writers, everyone has a chapter to tell. Connect with us, explore the stacks, or contribute your own book picks and reviews.
          </p>
        </div>

        {/* Right image or visual */}
        <div className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Bookshelves"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-20 text-center">
        <p className="text-gray-600 text-lg">
          Ready to explore your next favorite book?{" "}
          <a
            href="/contacts"
            className="text-red-800 font-semibold hover:underline"
          >
            Get in touch →
          </a>
        </p>
      </div>
    </section>
    </>
  );
};

export default About;
