import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
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
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
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
    project: project,
    auth: state.firebase.auth
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
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /projects/{project} {
//       allow read, write : if request.auth.uid !=null
//     }
//     match /users/{userId} {
//      allow create
//       allow read: if request.auth.uid != null
//       allow write: if request.auth.uid == userId
//     }
//   }
// }
// firebase LOGIN COMMAND LINE ERROR
// export PATH=~/.npm-global/bin:$PATH
