import React from "react";
import { services } from "../datasets";
import { Services } from "../../components";
import { BookOpen } from "lucide-react";

const ServiceCards = () => {
  return (
    <section id="s4h_servicecards" className="py-20 bg-gradient-to-br from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Course Catalog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            <span className="relative inline-block">
              Learning
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary-300/50 to-accent-300/50 -z-10"></span>
            </span>
            {" "}Hub: Course
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600"> Offerings </span>
            and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600"> Timetable</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 text-lg mt-4">
            Choose the perfect learning path for your Spanish journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Services
              key={service.id}
              clase={service.clase}
              icon={service.icon}
              title={service.title}
              body={service.body}
              detalles={service.detalles}
              meetingType={service.meetingType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
