import React from "react";
import { useNavigate } from "react-router-dom";
import { Award, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import profileImage from "../../assets/profile_v2.jpg";

const Semblance = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/aboutus");
  };

  return (
    <section id="s4h_semblance" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={profileImage}
                    alt="Patricia - Spanish Teacher"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Certified Badge */}
              <div className="absolute -top-4 -right-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-sm font-semibold text-primary-700 border border-primary-200 shadow-lg">
                <Award className="w-4 h-4" />
                <span>Certified Instructor</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
              Semblance
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-6">
              Unlocking <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Spanish</span>: Language{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Learning</span> for the Curious Minds.
            </h3>

            <p className="text-neutral-600 leading-relaxed mb-6">
              ¡Hola! My name is Patricia, and I am a Spanish native speaker from Mexico City. I'm certified as a Spanish instructor as a Foreign Language from the Universidad Nacional Autónoma de México.
              I've been teaching Spanish since 2016, with students of any age and every level, from basic words to test preparation (DELE), Spanish for tourism, Spanish for teachers, and Mexican cooking.
              Learning can be fun, relaxed and based on your needs. If you don't find it easy to adjust to the formal school schedule, this is the place for you! My goal is for you to enjoy and learn at your own pace!
              Contact me for a free trial lesson!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <BookOpen className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">8+</div>
                <div className="text-xs text-neutral-600">Years Teaching</div>
              </div>
              <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <GraduationCap className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">3200+</div>
                <div className="text-xs text-neutral-600">Hours Taught</div>
              </div>
              <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <Award className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">UNAM</div>
                <div className="text-xs text-neutral-600">Certified</div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleButtonClick}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Know more about your teacher</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Semblance;
