import React from "react";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div>
    <h1>Dídac Sabatés</h1>
    <p>Welcome to my site.</p>
    <Link to="/github-repos">Github projects</Link>
  </div>
);

export default IndexPage;
