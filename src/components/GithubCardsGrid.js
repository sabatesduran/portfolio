import React, { Component } from "react";
import Link from "gatsby-link";
import axios from "axios";
import GithubCard from "../components/GithubCard";

class GithubCardsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentWillMount() {
    axios
      .get("https://api.github.com/users/sabatesduran/repos")
      .then(response => response.data)
      .then(repos => this.setState({ repos: repos }));
  }

  createGithubCards() {
    return this.state.repos.map(repo => {
      if (!repo.fork) {
        return (
          <GithubCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
            language={repo.language}
            repoURL={repo.html_url}
            liveURL={repo.homepage}
          />
        );
      }
    });
  }

  render() {
    const { repos } = this.state;

    return (
      <div className="cards">
        {repos.length > 0 ? this.createGithubCards() : "Loading repos ..."}
      </div>
    );
  }
}

export default GithubCardsGrid;
