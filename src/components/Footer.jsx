import React from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-black dark:text-white p-5">
      <h1 className="text-center text-3xl mb-5 font-semibold">FinTrack</h1>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-12 md:gap-6">
        <div className="flex space-x-8 justify-start items-start">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="text-sm flex flex-col gap-2">
              <li>
                <a href="/about" className="text-black dark:text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms" className="text-black dark:text-white hover:underline">
                  Terms And Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-black dark:text-white hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <ul className="text-sm flex flex-col gap-3">
              <li>
                <a href="https://twitter.com/FinTrack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black dark:text-white hover:underline">
                  <FaXTwitter /> @FinTrack
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/fintrack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black dark:text-white hover:underline">
                  <FaLinkedin /> @FinTrack
                </a>
              </li>
              <li>
                <a href="https://facebook.com/fintrack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black dark:text-white hover:underline">
                  <FaFacebook /> @FinTrack
                </a>
              </li>
              <li>
                <a href="mailto:admin@fintrack.com" className="flex items-center gap-2 text-black dark:text-white hover:underline">
                  <IoMailOutline /> admin@fintrack.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 opacity-50 my-8"></div>
      <p className="text-center text-black dark:text-white text-sm">
        © {new Date().getFullYear()} FinTrack | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
