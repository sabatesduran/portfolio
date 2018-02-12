import React, { Component } from "react";

class JobInfo extends Component {
  render() {
    const job = this.props.job.node;
    return (
      <div className="job">
        <h3 className="job-company-name">
          <a href={job.url} target="_blank" rel="noopener">
            {job.company_name},
          </a>
          <span className="job-position">{job.position}</span>
        </h3>
        <h4 className="job-date-and-location">
            ({job.start_date} to {job.end_date}) - {job.location}
        </h4>
        <div className="projects">
          {/* <h4>Projects ({job.projects.length})</h4> */}
        </div>
      </div>
    );
  }
}

export default JobInfo;
