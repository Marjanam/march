import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
    startingDate: 0,
    finnishingDate: 0,
    productName: "",
    productDescription: "",
    productNumber: 0,
    areaName: "",
    height: 0,
    width: 0,
    totalSqft: 0
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">date_range</i>
            <input type="date" id="startingDate" onChange={this.handleChange} />
            <label htmlFor="startingDate">Choose starting date here</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">date_range</i>
            <input
              type="date"
              id="finnishingDate"
              onChange={this.handleChange}
            />
            <label htmlFor="finnishingDate">Choose finishing date here</label>
          </div>

          <div className="input-field">
            <textarea
              id="productName"
              className="materialize-textarea"
              onChange={this.handleChange}
              required
            />
            <label htmlFor="productName">Product name</label>
          </div>
          <div className="input-field">
            <textarea
              id="productDescription"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="productDescription">
              Enter some details about the product here..
            </label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="productNumber"
              onChange={this.handleChange}
              required
            />
            <label htmlFor="productNumber">Amount of products</label>
          </div>
          <h4>Coverage Area</h4>
          <div className="input-field">
            <textarea
              id="areaName"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="areaName">Area name</label>
          </div>
          <div className="input-field">
            <input type="number" id="height" onChange={this.handleChange} />
            <label htmlFor="height">Height</label>
          </div>
          <div className="input-field">
            <input type="number" id="width" onChange={this.handleChange} />
            <label htmlFor="width">width</label>
          </div>
          <div className="input-field">
            <input type="number" id="totalSqft" onChange={this.handleChange} />
            <label htmlFor="totalSqft">Total Square feet</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
