import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <ul className="space-y-3 text-xl">
              <li>
                <a href="#about" className="hover:text-gray-400">
                  Air X
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-gray-400">
                  Lexo Z
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-gray-400">
                  Gravity 9
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3 text-xl">
              <li>
                <a href="#help" className="hover:text-gray-400">
                  Fleet
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Company
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-400">
                  Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="hover:text-gray-400">
                  Purchasing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Charging
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-400">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#policy" className="hover:text-gray-400">
                  Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="hover:text-gray-400">
                  Spaces
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Investors
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-400">
                  Career
                </a>
              </li>
              <li>
                <a href="#policy" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
