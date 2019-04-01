import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = props => {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action">
            <div>Starting Date: {project.startingDate}</div>
            <div>Finnishing Date: {project.finnishingDate}</div>
          </div>
          <div className="card-action">
            <div>Product Name: {project.productName}</div>
            <div>Product Description: {project.productDescription}</div>
            <div>Product Number: {project.productNumber}</div>
          </div>
          <div className="card-action">
            <div>Area Name: {project.areaName}</div>
            <div>Height: {project.height}</div>
            <div>Width: {project.width}</div>
            <div>Total Sqft: {project.totalSqft}</div>
          </div>

          <div className="card-action grey lighten-5 grey-text">
            <div>
              Posted by {project.userFirstName} {project.userLastName}
            </div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetails);
