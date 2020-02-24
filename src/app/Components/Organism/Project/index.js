import React from "react";

function Project() {
  return (
    <div className="col-12 project m-2 px-4 pb-2 pt-3">
      <div className="d-flex m-2">
        <img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        <div className="ml-md-4">
          <h3>Project Title</h3>
          <div>
            <span className="mr-3">type</span>
            <span className="mr-3">type</span>
            <span className="mr-3">type</span>
            <span className="mr-3">type</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="p-2">View</button>
        </div>
      </div>
    </div>
  );
}
export default Project;
