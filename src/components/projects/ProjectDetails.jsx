import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            impedit repellat, recusandae quae obcaecati blanditiis. Cum optio
            dolorem et magnam nulla, deserunt suscipit ullam. Quaerat error
            dolorum tenetur tempore facere!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          Posted by echo7yankee
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
