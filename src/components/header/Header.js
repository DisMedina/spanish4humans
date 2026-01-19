import React, { useEffect } from "react";
import { Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../../assets/backgroundBlur.jpg";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="s4h_home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/75 to-accent-900/80" />

      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary-300" />
          <span className="text-white text-sm font-medium">Learn Spanish with Confidence</span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold bg-gradient-to-r from-white via-primary-100 to-accent-100 bg-clip-text text-transparent mb-6 leading-tight animate-slide-up"
          data-aos="fade-right"
        >
          Spanish for Humans
        </h1>

        {/* Subtitle Card */}
        <div
          className="inline-block backdrop-blur-lg bg-white/10 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 border border-white/20 shadow-2xl animate-fade-in"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light">
            Learning Spanish with a <span className="font-semibold text-primary-300">Human Touch</span>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
