import React, { Component } from "react";
import Link from "gatsby-link";

class JobInfo extends Component {
  render() {
    const job = this.props.job.node;
    return (
      <div className="job">
        <h3 className="job-company-name">
          <a href={job.url} target="_blank" rel="noopener">
            {job.company_name}
          </a>
          <span className="job-position">{job.position}</span>
        </h3>
        <h4 className="job-date-and-location">
            ({job.start_date} - {job.end_date}) - {job.location}
        </h4>
      </div>
    );
  }
}

export default JobInfo;
