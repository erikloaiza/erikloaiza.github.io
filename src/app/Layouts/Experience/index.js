import React from 'react';

import Job from '../../Components/Organism/Job'
import Education from '../../Components/Organism/Education'

import ExperienceData from '../../../data/experience'

function Experience(){
    return(
        <div>
            <h1 className="display-3">Experience</h1>
            <p>{ExperienceData.desc}</p>
            <h1 className="display-5">Jobs</h1>
            <div className="row justify-content-between">
                {
                    ExperienceData.jobs.map(job=>{
                        return <Job title={job.title} company={job.company} since={job.since} to={job.to} desc={job.desc}/>
                    })
                }
            </div>
            <h1 className="display-5 mt-5">Education</h1>
            <div className="row m-0">
                {
                    ExperienceData.education.map(ed=>{
                        return <Education type={ed.type} since={ed.since} to={ed.to} desc={ed.desc}/>
                    })
                }
            </div>
        </div>
    )
}
export default Experience;