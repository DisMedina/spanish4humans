import React from "react";
import { Video, Users, MessageCircle, Calendar, ArrowRight, Mail } from "lucide-react";

const Services = ({ title, body, detalles, meetingType }) => {
  const scheduleLesson = () => {
    const eventDetails = encodeURIComponent(`Meeting Type: ${meetingType}\nDetails: ${detalles}`);
    const gCalendarLink = `https://calendar.app.google/EaLse3iRPLuUS1Z49?text=${encodeURIComponent(title)}&details=${eventDetails}`;
    window.open(gCalendarLink, "_blank");
  };

  // Determine icon based on title
  const getIcon = () => {
    if (title.includes("Trial")) return <Video className="w-6 h-6 text-primary-600" />;
    if (title.includes("One-on-one")) return <Users className="w-6 h-6 text-primary-600" />;
    if (title.includes("Conversational")) return <MessageCircle className="w-6 h-6 text-primary-600" />;
    return <Users className="w-6 h-6 text-primary-600" />;
  };

  // Determine badge text
  const getBadge = () => {
    if (title.includes("Trial")) return "Free Evaluation";
    if (title.includes("One-on-one")) return "60 Minutes";
    if (title.includes("Conversational")) return "Practice Focused";
    return "Group Learning";
  };

  const isGroupClass = title === "Group classes by level" || title === "Conversational group classes by level";

  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-neutral-200 hover:border-primary-300 transform hover:-translate-y-2 transition-all duration-300">
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-l-2xl"></div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4">
        {getIcon()}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-neutral-800 mb-2">{title}</h3>

      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-3">
        {getBadge()}
      </div>

      {/* Body */}
      <p className="text-neutral-600 mb-2 leading-relaxed">{body}</p>

      {/* Details */}
      {detalles && detalles.length > 0 && (
        <p className="text-neutral-500 text-sm mb-6 italic">{detalles}</p>
      )}

      {/* Button */}
      <div className="mt-6">
        {isGroupClass ? (
          <a
            href={`mailto:humanslearnspanish@gmail.com?subject=${encodeURIComponent(meetingType)}&body=${encodeURIComponent(body)}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>Send an Email</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        ) : (
          <button
            onClick={scheduleLesson}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule a Lesson</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
