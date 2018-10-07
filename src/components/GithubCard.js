import React, { Component } from "react";
import ExternalLink from "../components/ExternalLink";

class GithubCard extends Component {
  render() {
    const { name, description, stars, language, repoURL, liveURL } = this.props;
    return (
      <div className="card">
        <a className="card-title" href={repoURL} target="_blank">
          {name}
        </a>
        <p className="card-description">{description}</p>
        <div className="d-flex flex-wrap">
          <span>
            <i className="fa fa-star" /> {stars}
          </span>
          <span className="card-language">
            <i className={`fa fa-circle ${language.toLowerCase()}`} />{" "}
            {language}
          </span>
          {liveURL &&
            liveURL != "" && (
              <span className="live-demo">
                <ExternalLink url={liveURL}>
                  <i className="fas fa-external-link-alt" /> Demo
                </ExternalLink>
              </span>
            )}
        </div>
      </div>
    );
  }
}

export default GithubCard;
