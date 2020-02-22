import React from 'react';

import Job from '../../Components/Organism/Job'

function Experience(){
    return(
        <div>
            <h1 className="display-3">Experience</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam ab voluptatem, totam reiciendis dolorem quaerat necessitatibus cupiditate ducimus magnam minus provident quam praesentium repellendus aspernatur laudantium facilis maxime excepturi.
            </p>
            <h1 className="display-5">Jobs</h1>
            <div className="row">
                <Job/>
                <Job/>
            </div>
            <h1 className="display-5">Education</h1>
        </div>
    )
}
export default Experience;