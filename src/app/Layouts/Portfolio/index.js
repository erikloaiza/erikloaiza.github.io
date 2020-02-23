import React from "react";
import ToggleButton from "../../Components/Atoms/ToggleButton";
import Project from "../../Components/Organism/Project";

function Portfolio() {
  return (
    <div className>
      <h1 className="display-3">Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        laboriosam ab voluptatem, totam reiciendis dolorem quaerat
        necessitatibus cupiditate ducimus magnam minus provident quam
        praesentium repellendus aspernatur laudantium facilis maxime excepturi.
      </p>
      <div className="d-flex justify-content-between">
        <span>Filter by</span>
        <div className="row pr-5">
          <ToggleButton />
          <ToggleButton />
          <ToggleButton />
          <ToggleButton />
          <ToggleButton />
          <ToggleButton />
          <ToggleButton />
        </div>
      </div>
      <div className="row">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
export default Portfolio;
