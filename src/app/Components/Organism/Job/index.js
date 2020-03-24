import React from "react";
import "react-circular-progressbar/dist/styles.css";

function Job(props) {
  return (
    <div className="col-md-6">
      <div className="job my-2 px-4 pb-2 pt-3">
          <h3>{props.title}</h3>
          <div className="d-flex mb-2 flex-wrap">
            <h6>{props.since} - {props.to}</h6>
            <span className="ml-auto">{props.company}</span>
          </div>
          <p>
              {props.desc}
          </p>
      </div>
    </div>
  );
}
export default Job;
