import React from "react";
import { Mail, Globe } from "lucide-react";
import Social from '../social/Social.js'

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Let's Connect */}
          <div>
            <h4 className="text-2xl font-display font-bold mb-4">Let's Connect</h4>
            <div className="mb-4">
              <Social />
            </div>
            <a
              href="https://www.spanishforhumans.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 border border-white/10 hover:border-white/30"
            >
              <Globe className="w-5 h-5 text-white/90 group-hover:text-white transition-colors duration-200" />
              <span className="text-white/90 group-hover:text-white transition-colors duration-200">
                spanishforhumans.com
              </span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-display font-bold mb-4">Contact</h4>
            <a
              href="mailto:humanslearnspanish@gmail.com"
              className="group inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 border border-white/10 hover:border-white/30"
            >
              <Mail className="w-5 h-5 text-white/90 group-hover:text-white transition-colors duration-200" />
              <span className="text-white/90 group-hover:text-white transition-colors duration-200">
                humanslearnspanish@gmail.com
              </span>
            </a>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-2xl font-display font-bold mb-4">Legal</h4>
            <a
              href="/privacypolicy"
              className="group inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 border border-white/10 hover:border-white/30"
            >
              <span className="text-white/90 group-hover:text-white transition-colors duration-200">
                Privacy Policy
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/70 text-sm mt-12 pt-8 border-t border-white/10">
          <p>© {new Date().getFullYear()} Spanish for Humans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
