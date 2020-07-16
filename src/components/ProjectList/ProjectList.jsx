import React from "react";
import { connect } from "react-redux";

const ProjectList = (props) => {
  const { projects } = props;
  return (
    <div>
      <ul>
        {projects.map((project) => {
          return <li>{project.name}</li>;
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(ProjectList);
