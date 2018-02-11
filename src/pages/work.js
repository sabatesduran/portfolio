import React from "react";
import Link from "gatsby-link";
import JobInfo from "../components/JobInfo";

const Work = ({ data }) => (
  <div>
    <h1>Work</h1>
    <div className="jobs">
      {data.allJobsJson.edges.map(job => (
        <JobInfo key={job.node.company_name} job={job} />
      ))}
    </div>
  </div>
);

export default Work;

export const jobsQuery = graphql`
  query jobs {
    allJobsJson {
      edges {
        node {
          company_name
          url
          position
          start_date
          end_date
          location
          projects {
            name
            type
            platform
            logo
            url
            tools
          }
        }
      }
    }
  }
`;
