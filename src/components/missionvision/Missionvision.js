import React from "react";
import "./Missionvision.css";
import "aos/dist/aos.css";

const Missionvision = () => {
  return (
    <section id="s4h_mission" className="container-square-background">
      <div className="container-square">
        <div className={`info-container`}>
          <p className={`info-title`}>SPANISH FOR HUMANS' <span className="highlighted-text-1">MISSION</span> AND <span className="highlighted-text-1">VISION</span></p>
        </div>
        <div className={`info-container`}>
          <h2 className={`location-title`}>
            <span className="highlighted-text-2">Language</span> learning is a challenging time and a lot of work. Whether you are going on a trip, taking an exam or getting certified in a certain level of <span className="highlighted-text-2">Spanish</span>, it is a stressful time.
            <span className="highlighted-text-2">Spanish for Humans</span> believes that learning can have a different motivation and pace to suit the tranquility and enjoyment of learning something new.
            Here we seek to reduce stress and increase enjoyment, learning calmly and giving you the time to do so with a commitment to your own goal: learning <span className="highlighted-text-2">Spanish</span>.
            <span className="highlighted-text-2">Spanish for Humans</span> follows the teaching levels according to the Common European Framework of Reference for Languages but promotes a space of calm and freedom so that the student can take the time to consolidate their knowledge. 
            This is a place where we can be ourselves, learn at our own time, feel confident and enjoy the process!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Missionvision;
