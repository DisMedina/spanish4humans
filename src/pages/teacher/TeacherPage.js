import React, { useEffect } from "react";
import { aboutPictures } from "../../components/datasets";
import { Carousel } from "../../components";
import { GraduationCap, Award, Users } from "lucide-react";
import profileImage from "../../assets/profile_v3-2.jpg";

const TeacherPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500 to-accent-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-white">
                    <img
                      src={profileImage}
                      alt="Patricia Rivera - Spanish Teacher"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
                About Me
              </h2>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
                Journey into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Expertise</span>: About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Teacher</span>
              </h1>

              <p className="text-neutral-600 leading-relaxed mb-8">
                Patricia Rivera is a Mexican screenwriter, writer, playwright and film director with a degree in Dramatic Literature and Theater from the National
                Autonomous University of Mexico (UNAM) and a degree in Film writing and directing from Faculty of Filmmaking. She has a degree in Spanish as a Foreign
                Language from CEPE UNAM and has eight years of experience with groups of children, teenagers, adults and seniors. She uses mixed and personalized
                teaching techniques according to the needs of each student. She has over 3200 hours of teaching Spanish as a foreign language in front of students since
                2016.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-3 gap-4">
                <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-lg text-center">
                  <GraduationCap className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-xs text-neutral-600">UNAM</div>
                  <div className="text-sm font-bold text-neutral-800">Certified</div>
                </div>
                <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-lg text-center">
                  <Award className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-xs text-neutral-600">8+ Years</div>
                  <div className="text-sm font-bold text-neutral-800">Experience</div>
                </div>
                <div className="backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-lg text-center">
                  <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-xs text-neutral-600">3200+</div>
                  <div className="text-sm font-bold text-neutral-800">Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Carousel data={aboutPictures} onlyImages={true} />
    </div>
  );
};

export default TeacherPage;
