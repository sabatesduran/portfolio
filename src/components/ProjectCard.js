import React, { Component } from "react";
import ExternalLink from "../components/ExternalLink";

class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="project">
        <h5>
          - &nbsp;
          {project.url === "" ? (
            <span>{project.name} (Not available) </span>
          ) : (
            <ExternalLink url={project.url}>
              {project.name}
            </ExternalLink>
          )}
        </h5>
      </div>
    );
  }
}

export default ProjectCard;
