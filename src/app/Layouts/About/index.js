import React from 'react';
import AboutInfo from '../../../data/about'

import Skill from '../../Components/Organism/Skill'

function About(){
    return(
        <div>
            <h1 className="display-3">About</h1>
            <p>{AboutInfo.desc}</p>
            <h1 className="display-5">Skills</h1>
            <div className="row pl-3 pl-md-0">
                {AboutInfo.skills.map(skill=>{
                    return <Skill percentage={skill.value} text={skill.desc}/>
                })}
            </div>
            <h1 className="display-5 mt-5">Programming Languages</h1>
            <div className="row pl-3 pl-md-0">
                {AboutInfo.languages.map(lang=>{
                    return <Skill percentage={lang.value} text={lang.desc}/>
                })}
            </div>
            <h1 className="display-5 mt-5">Frameworks</h1>
            <div className="row pl-3 pl-md-0">
                {AboutInfo.frameworks.map(framework=>{
                    return <Skill percentage={framework.value} text={framework.desc}/>
                })}
            </div>
            <h1 className="display-5 mt-5">Design Tools</h1>
            <div className="row pl-3 pl-md-0">
                {AboutInfo.design_tools.map(design_tool=>{
                    return <Skill percentage={design_tool.value} text={design_tool.desc}/>
                })}
            </div>
        </div>
    )
}
export default About;