import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import ExternalLink from "./ExternalLink";

class JobInfo extends Component {
  render() {
    const job = this.props.job.node;
    return (
      <div className="job">
        <h3 className="job-company-name">
          <ExternalLink url={job.url}>
            {job.company_name},
          </ExternalLink>
          <span className="job-position">{job.position}</span>
        </h3>
        <h4 className="job-date-and-location">
          ({job.start_date} to {job.end_date}) - {job.location}
        </h4>
        <div className="projects">
          {job.projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default JobInfo;
