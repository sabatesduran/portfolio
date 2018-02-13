import React, { Component } from "react";
import ExternalLink from "../components/ExternalLink";
import Tag from "../components/Tag";

class ArticleCard extends Component {
  render() {
    const article = this.props.article.node;
    return (
      <div className="article">
        <h3>
          <ExternalLink url={article.url}>
            {article.title}
          </ExternalLink>
        </h3>
        <p className="article-dates">
          <span className="article-date">
            <u>Published</u>: {article.published_at}
          </span>
          <span className="article-date">
            <u>Updated</u>: {article.updated_at}
          </span>
        </p>
        <div className="tags">
          {article.tags.map(tag => {
            return <Tag key={tag} tag={tag} />;
          })}
        </div>
        {/* <hr/> */}
      </div>
    );
  }
}

export default ArticleCard;
