import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import "react-circular-progressbar/dist/styles.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Skill(props) {
  const percentage = props.percentage;
  const skill = props.text;
  return (
    <div className="col-5 col-md-3 col-lg-2 p-3 skill my-2 mx-2">
      <VisibilitySensor>
        {({ isVisible }) => {
          const value = isVisible ? percentage : 0;
          return (
            <CircularProgressbar
              value={value}
              text={skill}
              circleRatio="0.75"
              strokeWidth="4"
              className="skill--detail"
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                pathTransitionDuration: 0.5
              })}
            />
          );
        }}
      </VisibilitySensor>
    </div>
  );
}
export default Skill;
