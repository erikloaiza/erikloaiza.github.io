import React from "react";

function Project() {
  return (
    <div className="col-12 m-4 project">
      <div className="row p-4">
        <img className="mr-4" src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        <div>
          <h3>Project Title</h3>
          <div>
            <span className="mr-4">type</span>
            <span className="mr-4">type</span>
            <span className="mr-4">type</span>
            <span className="mr-4">type</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}
export default Project;
