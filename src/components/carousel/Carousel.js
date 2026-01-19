import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data, onlyImages }) => {
  const navigate = useNavigate();

  const handleButtonClick = (item) => {
    console.log(item.id);
    navigate(`/aboutthem/${item.id}`, {
      state: {
        title: item.title,
        body: item.body,
        image: item.image,
      },
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    dotsClass: "slick-dots !bottom-4",
  };

  return (
    <section id="s4h_carousel" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Only for testimonials */}
        {!onlyImages && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>Student Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              What Our Students Say
            </h2>
          </div>
        )}

        {/* Carousel */}
        <div className="carousel-container">
          <Slider {...settings}>
            {data.map((item) => (
              onlyImages ? (
                <div key={item.id} className="px-3">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title || "Gallery"}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div key={item.id} className="px-3">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-96">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent"></div>

                    {/* Content Card (Glassmorphism) */}
                    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/10 border-t border-white/20 p-6">
                      <p className="text-white text-sm mb-4 line-clamp-3 leading-relaxed">
                        "{item.body}"
                      </p>
                      <button
                        onClick={() => handleButtonClick(item)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 text-primary-700 rounded-full font-medium text-sm shadow-lg hover:bg-white transform hover:scale-105 transition-all duration-200"
                      >
                        <span>Read Full Story</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Carousel Styles */}
      <style jsx>{`
        .carousel-container :global(.slick-dots li button:before) {
          color: #10b981;
          opacity: 0.5;
        }
        .carousel-container :global(.slick-dots li.slick-active button:before) {
          color: #10b981;
          opacity: 1;
        }
        .carousel-container :global(.slick-prev),
        .carousel-container :global(.slick-next) {
          z-index: 10;
        }
        .carousel-container :global(.slick-prev:before),
        .carousel-container :global(.slick-next:before) {
          color: #10b981;
          font-size: 30px;
        }
      `}</style>
    </section>
  );
}

export default Carousel;
