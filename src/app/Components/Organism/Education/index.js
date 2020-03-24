import React from 'react';
import { FaGraduationCap } from "react-icons/fa";

function Education(props) {
    return (
        <div className="col-12 my-2">
            <div className="row education">
                <i className="icon"><FaGraduationCap/></i>
                <div className="col mx-2 d-flex justify-content-between align-items-center info px-4">
                    <b className="m-0">{props.desc}</b>
                    <span>{props.since} - {props.to}</span>
                </div>
            </div>
        </div>
    )
}
export default Education;