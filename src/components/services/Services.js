import React from "react";
import "./Services.css";
import "./cardAnimation.css";

const Services = ({ title, body, detalles, meetingType }) => {
  const scheduleLesson = () => {
    const eventDetails = encodeURIComponent(`Meeting Type: ${meetingType}\nDetails: ${detalles}`);
    const gCalendarLink = `https://calendar.app.google/EaLse3iRPLuUS1Z49?text=${encodeURIComponent(title)}&details=${eventDetails}`;
    window.open(gCalendarLink, "_blank");
  };

  return (
    <div className={`container servicesList`}>
      <li className="card">
        {title}
        <div className="card-body">
          <p className="card-text bolder">{body}</p>
          <p className="card-text">{detalles}</p>
          {title === "Group classes by level" || title === "Conversational group classes by level" ? (
            <a className="card-button" href={`mailto:humanslearnspanish@gmail.com?subject=${meetingType}&body=${body}`}>Click to Send an Email</a>
          ) : (
            <button className="card-button" onClick={scheduleLesson}>
              Schedule a Lesson
            </button>
          )}
        </div>
      </li>
    </div>
  );
};

export default Services;
