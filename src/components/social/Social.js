import React from "react";
import { Instagram } from "lucide-react";

const Social = () => {
  const instagramLink = "https://www.instagram.com/spanishforhumans?igsh=MW40M3Fqc2xvOHkxdw%3D%3D&utm_source=qr";

  const handleInstagramClick = () => {
    window.location.href = instagramLink;
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleInstagramClick}
        className="group w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5 text-white group-hover:text-primary-300 transition-colors duration-200" />
      </button>
      {/* Additional social media buttons can be added here */}
    </div>
  );
};

export default Social;
