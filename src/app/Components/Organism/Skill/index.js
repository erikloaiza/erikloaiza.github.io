import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skill() {
  const percentage = 66;
  const skill = "Skill";
  return (
    <div className="col-6 col-md-3 col-lg-2 p-3 skill m-3">
      <CircularProgressbar
        value={percentage}
        text={skill}
        circleRatio="0.75"
        strokeWidth="4"
        className="skill"
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8
        })}
      />
    </div>
  );
}
export default Skill;
