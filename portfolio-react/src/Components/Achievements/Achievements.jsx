import React from "react";
import "./Achievements.css";
import Achievements_Data from "../../assets/achievements_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Achievements = () => {
  return (
    <div id="achievements" className="services">
      <div className="services-title">
        <h1>Achievements</h1>
      </div>

      <div className="services-container">
        {Achievements_Data.map((item, index) => (
          <div key={index} className="services-format">
            <h3>{item.s_no}</h3>
            <h2>{item.s_name}</h2>
            <p>{item.s_desc}</p>

            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
