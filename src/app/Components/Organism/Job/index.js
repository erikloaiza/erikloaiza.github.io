import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Job() {
  const percentage = 66;
  const job = "Job";
  return (
    <div className="col-5 job m-2 px-4 py-2">
        <h3>Job Title</h3>
        <h6>Jan 2019 - Jan 2020</h6>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  );
}
export default Job;
