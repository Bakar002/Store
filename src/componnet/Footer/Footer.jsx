import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa'; // Importing card payment icons
import { FaGoogle } from 'react-icons/fa'; // Google Pay (Google Icon as placeholder)
import { FaApple } from 'react-icons/fa'; // Apple Pay (Apple Icon as placeholder)

const Footer = () => {
  return (
    <footer className="bg-stone-900">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        {/* Desktop Footer */}
          {/* Desktop sections remain as they were */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          <div className="mb-6 md:mb-0">
            <h5 className="text-base md:text-lg font-medium mb-2 pb-2 border-b border-stone-700 text-white uppercase">
              Company info
            </h5>
            <ul className="space-y-2 md:space-y-3 mt-4 text-white text-base">
              <li>Belike Group</li>
              <li>Affiliate & Influencer: Earn Commission</li>
              <li>Contact us & Cognac</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Belike Tree Planting Program</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h1 className="text-base md:text-lg font-medium mb-2 pb-2 border-b border-stone-700 text-white uppercase">
              Customer service
            </h1>
            <ul className="space-y-2 md:space-y-3 mt-4 text-white text-base">
              <li>Return and refund policy</li>
              <li>Intellectual property policy</li>
              <li>Shipping info</li>
              <li>Report suspicious activity</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h1 className="text-base md:text-lg font-medium mb-2 pb-2 border-b border-stone-700 text-white uppercase">
              Help
            </h1>
            <ul className="space-y-2 md:space-y-3 mt-4 text-white text-base">
              <li>Support center & FAQ</li>
              <li>Safety center</li>
              <li>Temu purchase protection</li>
              <li>Sitemap</li>
              <li>Partner with Belike</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h5 className="text-base md:text-lg font-medium mb-2 pb-2 border-b border-stone-700 text-white uppercase">
              Download the App
            </h5>
            <ul className="space-y-2 md:space-y-3 mt-4 text-white text-base">
              <li>Price-drop alerts</li>
              <li>Track orders any time</li>
              <li>Track orders any time</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h5 className="text-base md:text-lg font-medium mb-2 pb-2 border-b border-stone-700 text-white uppercase">
              LQRS
            </h5>
            <ul className="space-y-2 md:space-y-3 mt-4 text-white text-base">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        

        {/* Mobile Footer */}
        <div className="md:hidden divide-y divide-stone-700">
          {/* Mobile Company info */}
          <details className="group cursor-pointer">
            <summary className="w-full text-left py-4 text-white font-medium uppercase border-b border-stone-700">
              Company info
            </summary>
            <ul className="space-y-2 text-white text-base pb-4">
              <li>Belike Group</li>
              <li>Affiliate & Influencer: Earn Commission</li>
              <li>Contact us & Cognac</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Belike Tree Planting Program</li>
            </ul>
          </details>

          {/* Mobile Customer service */}
          <details className="group cursor-pointer">
            <summary className="w-full text-left py-4 text-white font-medium uppercase border-b border-stone-700">
              Customer service
            </summary>
            <ul className="space-y-2 text-white text-base pb-4">
              <li>Return and refund policy</li>
              <li>Intellectual property policy</li>
              <li>Shipping info</li>
              <li>Report suspicious activity</li>
            </ul>
          </details>

          {/* Mobile Help */}
          <details className="group cursor-pointer">
            <summary className="w-full text-left py-4 text-white font-medium uppercase border-b border-stone-700">
              Help
            </summary>
            <ul className="space-y-2 text-white text-base pb-4">
              <li>Support center & FAQ</li>
              <li>Safety center</li>
              <li>Temu purchase protection</li>
              <li>Sitemap</li>
              <li>Partner with Belike</li>
            </ul>
          </details>

          {/* Mobile Download the App */}
          <details className="group cursor-pointer">
            <summary className="w-full text-left py-4 text-white font-medium uppercase border-b border-stone-700">
              Download the App
            </summary>
            <ul className="space-y-2 text-white text-base pb-4">
              <li>Price-drop alerts</li>
              <li>Track orders any time</li>
              <li>Track orders any time</li>
            </ul>
          </details>

          {/* Mobile LQRS */}
          <details className="group cursor-pointer">
            <summary className="w-full text-left py-4 text-white font-medium uppercase border-b border-stone-700">
              LQRS
            </summary>
            <ul className="space-y-2 text-white text-base pb-4">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </details>
        </div>
        <div className="mt-6 flex flex-wrap justify-center sm:justify-start space-x-4 sm:ml-[30%]">
  {/* Payment Methods */}
  <h1 className="text-white text-md font-bold mr-4 mb-2 sm:mb-0">We Accept:</h1>
  
  <div className="text-blue-500 hover:text-white transition-colors" aria-label="Visa">
    <FaCcVisa className="text-[30px]" />
  </div>
  <div className="text-orange-500 hover:text-white transition-colors" aria-label="MasterCard">
    <FaCcMastercard className="text-[30px]" />
  </div>
  <div className="text-green-500 hover:text-white transition-colors" aria-label="American Express">
    <FaCcAmex className="text-[30px]" />
  </div>
  <div className="text-indigo-500 hover:text-white transition-colors" aria-label="Discover">
    <FaCcDiscover className="text-[30px]" />
  </div>
  <div className="text-red-500 hover:text-white transition-colors" aria-label="Google Pay">
    <FaGoogle className="text-[30px]" />
  </div>
  <div className="text-black hover:text-white transition-colors" aria-label="Apple Pay">
    <FaApple className="text-[30px]" />
  </div>
</div>



        <div className="sm:mb-8 mb-2 mt-8 pt-4 border-t border-gray-700 flex flex-col justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-base text-stone-300 mb-2">&copy; 2024 LQRS. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            {/* Social Media Links */}
            <a
              className="text-stone-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              href="https://www.facebook.com"
            >
              <FaFacebook className="text-[24px]" />
            </a>
            <a
              className="text-stone-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              href="https://www.twitter.com"
            >
              <FaTwitter className="text-[24px]" />
            </a>
            <a
              className="text-stone-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              href="https://www.instagram.com"
            >
              <FaInstagram className="text-[24px]" />
            </a>
            <a
              className="text-stone-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              href="https://www.linkedin.com"
            >
              <FaLinkedin className="text-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
