import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from "../images/favicon.png";
import Header from "../components/Header";

import "../styles/index.scss";

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Dídac Sabatés"
      meta={[
        { name: "description", content: "Personal site" },
        { name: "keywords", content: "personal, cv, resume,portfolio" }
      ]}
    >
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    <div className="container">
      <Header links={data.allLinksJson.edges} />
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const linksQuery = graphql`
  query links {
    allLinksJson {
      edges {
        node {
          name
          url
          icon
          color
        }
      }
    }
  }
`;
