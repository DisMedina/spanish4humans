import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Quote, Star } from 'lucide-react';

const AlumniPage = () => {
  const location = useLocation();
  const { state } = location;

  const { title, body, image } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-96 md:h-[600px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 md:order-2">
            {/* Quote Icon */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              <Quote className="w-4 h-4" />
              <span>Student Testimony</span>
            </div>

            <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
              About Them
            </h2>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
              My Journey: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">{title}</span>
            </h1>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Testimonial Card */}
            <div className="relative backdrop-blur-sm bg-white/80 rounded-2xl p-8 shadow-xl border border-primary-200/50">
              {/* Large Quote Mark */}
              <Quote className="absolute top-4 left-4 w-12 h-12 text-primary-200 -z-0" />

              {/* Body Text */}
              <p className="relative text-neutral-700 leading-relaxed text-lg italic z-10">
                "{body}"
              </p>

              {/* Attribution */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-neutral-800 font-semibold">{title}</p>
                <p className="text-sm text-neutral-600">Spanish for Humans Student</p>
              </div>
            </div>

            {/* Stats or Additional Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl font-bold text-primary-600">✓</div>
                <div className="text-xs text-neutral-600 mt-1">Verified Student</div>
              </div>
              <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl font-bold text-primary-600">5.0</div>
                <div className="text-xs text-neutral-600 mt-1">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
