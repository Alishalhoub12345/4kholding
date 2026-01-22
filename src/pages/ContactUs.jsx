import React from "react";
import contactImg from "../assets/journey1.jfif"; 

const ContactUs = () => {
  return (
    <section id="contact" className=" bg-[#F6F6F6] max-h-[74vh]">
      <div className="max-w-7xl mx-auto py-20">
      <div className="flex flex-col md:flex-row  ">

        <div className="md:w-1/2 flex items-center ">
          <div className="w-full max-w-md">

            <h2 className="text-3xl font-light mb-12">
              Let’s get in touch
            </h2>

            <form className="space-y-8">

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Your Message
                </label>
                <textarea
                  rows="3"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black py-2 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-8 px-10 py-3 border border-black rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>

        <div className=" w-1/2 relative">
          <img
            src={contactImg}
            alt="Contact"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
        </div>
</div>
      </div>
    </section>
  );
};

export default ContactUs;
