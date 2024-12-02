import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-xl mx-10 pl-24">
        <h2 className="text-3xl md:text-2xl font-semibold text-white text-left">
          Subscribe to our Newsletter
        </h2>
        <div className="mt-6 flex items-center">
          <div className="flex w-full border-b border-white max-w-sm overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow  py-2 text-gray-700 focus:outline-none bg-black"
            />
            <button className="text-white px-4 py-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m-6-6 6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
