import React from 'react';
import Project from '../../Components/Organism/Project';
import CheckInput from '../../Components/Atom/CheckInput';

function Portfolio(){
    return(
        <div>
            <h1 className="display-3">Portfolio</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam ab voluptatem, totam reiciendis dolorem quaerat necessitatibus cupiditate ducimus magnam minus provident quam praesentium repellendus aspernatur laudantium facilis maxime excepturi.
            </p>
            <div className="row mx-0 my-4">
                <div className="col-12 col-md-4 px-0 d-flex align-items-center">
                    <span >Filter by:</span>
                </div>
                <div className="row mx-auto mt-md-0 mt-4">
                    <CheckInput/>
                    <CheckInput/>
                    <CheckInput/>
                    <CheckInput/>
                </div>
            </div>
            <div className="row mr-md-2">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}
export default Portfolio;