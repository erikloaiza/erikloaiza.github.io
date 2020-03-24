import React from "react";

function Project(props) {
  const redirectTo = (url)=>{
    window.open(url, "_blank") //to open new page
  }
  return (
    <div className="col-12 project m-2 px-4 pb-2 pt-3">
      <div className="d-flex m-2">
        <img src={props.img} />
        <div className="ml-md-4">
          <h3>{props.title}</h3>
          <div>
            {
              props.types.map(type=>{
                return <span className="mr-3">{type}</span>
              })
            }
          </div>
          <p>{props.desc}</p>
          <button className="p-2" onClick={()=>redirectTo(props.url)}>View</button>
        </div>
      </div>
    </div>
  );
}
export default Project;
