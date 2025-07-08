import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-10 mt-10">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center text-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-6">
              <a
                href="https://github.com/AshishRajput18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-300 transition-all duration-300 hover:scale-125"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajput-ashish-880162369"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition-all duration-300 hover:scale-125"
              >
                <FaLinkedinIn size={26} />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?igsh=5kenyz58mscu&utm_content=ocux68g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition-all duration-300 hover:scale-125"
              >
                <FaInstagram size={26} />
              </a>
              <a
                href="https://t.ly/psiYO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-green-400 transition-all duration-300 hover:scale-125"
              >
                <FaWhatsapp size={26} />
              </a>
            </div>

            {/* Footer Text */}
            <div className="border-t border-gray-600 pt-4">
              <p className="text-sm md:text-base">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-red-400">Ashish Rajput</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
