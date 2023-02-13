import React from "react";
import "./about.css";
import code from "../../img/code.jpg";
import award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
      
        <div className="a-card">
          <img src={code} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="a-title">
          <h1>About Me</h1>
          <p className="a-sub">
            I am a multi-skilled web developer and project manager with
            expertise in full-stack development.
          </p>
          <p className="a-desc">
            {" "}
            I am a multi-skilled web developer and project manager with
            expertise in full-stack development, database management, UI/UX
            design, data analysis, writing, and project management
          </p>
          <div className="a-award">
            <img src={award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Best Project Manager</h4>
              <p className="a-award-desc">
                project manager in developing full e-commerce and real estate
                website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
