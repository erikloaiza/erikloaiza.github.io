import React from 'react';

import Skill from '../../Components/Organism/Skill'

function About(){
    return(
        <div>
            <h1 className="display-3">About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam ab voluptatem, totam reiciendis dolorem quaerat necessitatibus cupiditate ducimus magnam minus provident quam praesentium repellendus aspernatur laudantium facilis maxime excepturi.
            </p>
            <h1 className="display-5">Skills</h1>
            <div className="row pl-3 pl-md-0">
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </div>
    )
}
export default About;