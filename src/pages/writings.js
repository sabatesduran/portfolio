import React from "react";
import Link from "gatsby-link";
import ArticleCard from "../components/ArticleCard";

const Writings = ({ data }) => (
  <div>
    <h1>Writings</h1>
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
