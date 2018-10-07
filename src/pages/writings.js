import React from "react";
import Link from "gatsby-link";
import ArticleCard from "../components/ArticleCard";

const Writings = ({ data }) => (
  <div>
    <div className="d-flex align-items-center">
      <h1 className="">Writings</h1> &nbsp;
      <a className="d-flex" href="https://dev.to/sabatesduran">
        <img
          src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
          style={ {backgroundColor: "#fff" } }
          alt="Dídac Sabatés's DEV Profile"
          height="25"
          width="25"
        />
      </a>
    </div>
    <div className="writings">
      {data.allWritingsJson.edges.map(article => (
        <ArticleCard key={article.node.title} article={article} />
      ))}
    </div>
  </div>
);

export default Writings;

export const writingsQuery = graphql`
  query writings {
    allWritingsJson {
      edges {
        node {
          title
          published_at
          updated_at
          url
          tags
        }
      }
    }
  }
`;
