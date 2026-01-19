import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const Missionvision = () => {
  return (
    <section id="s4h_mission" className="py-20 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-4">
            Spanish for Humans'
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600"> Mission </span>
            and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600"> Vision</span>
          </h2>
        </div>

        {/* Mission/Vision Card */}
        <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary-200/50">
          {/* Decorative Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 -z-10"></div>

          {/* Icon Row */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center shadow-lg">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="text-neutral-700 leading-relaxed text-base md:text-lg space-y-4">
            <p>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Language</span> learning is a challenging time and a lot of work. Whether you are going on a trip, taking an exam or getting certified in a certain level of <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Spanish</span>, it is a stressful time.
            </p>
            <p>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Spanish for Humans</span> believes that learning can have a different motivation and pace to suit the tranquility and enjoyment of learning something new.
            </p>
            <p>
              Here we seek to reduce stress and increase enjoyment, learning calmly and giving you the time to do so with a commitment to your own goal: learning <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Spanish</span>.
            </p>
            <p>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Spanish for Humans</span> follows the teaching levels according to the Common European Framework of Reference for Languages but promotes a space of calm and freedom so that the student can take the time to consolidate their knowledge.
            </p>
            <p className="text-xl font-semibold text-center mt-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              This is a place where we can be ourselves, learn at our own time, feel confident and enjoy the process!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missionvision;
