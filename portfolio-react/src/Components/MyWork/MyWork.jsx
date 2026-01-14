import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="myworks">
      {/* title */}
      <div className="myworks-title">
        <h1>My Latest Work</h1>
      </div>

      {/* cards */}
      <div className="myworks-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="myworks-format">
            {/* image (TOP) */}
            <img
              src={work.w_img}
              alt={work.w_title}
              className="mywork-img"
            />

            {/* content (BOTTOM) */}
            <div className="mywork-content">
              <h3>{work.w_title}</h3>
              <p>{work.w_desc}</p>

              {/* read more */}
              <a
                href={work.w_github}
                target="_blank"
                rel="noopener noreferrer"
                className="myworks-readmore"
              >
                <span>View on GitHub</span>
                <img src={arrow_icon} alt="arrow" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
