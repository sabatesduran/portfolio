import React, { Component } from "react";
import Link from "gatsby-link";

class GithubCard extends Component {
  render() {
    const { name, description, stars, language, repoURL, liveURL } = this.props;
    return (
      <div className="card">
        <a href={repoURL} target="_blank">{name}</a>
        <p className="card-description">
          {description}
        </p>
        <div className="d-flex flex-wrap">
          <span>
            <i className="fa fa-star" /> {stars}
          </span>
          <span className="card-language">
            <i className={`fa fa-circle ${language.toLowerCase()}`} /> {language}
          </span>
          { liveURL && liveURL != "" &&
            <span className="live-demo">
              <i className="fas fa-external-link-alt" /> &nbsp;
              <a href={liveURL} target="_blank">Demo</a>
            </span>
          }
        </div>
      </div>
    );
  }
}

export default GithubCard;