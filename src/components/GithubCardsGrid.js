import React, { Component } from "react";
import axios from "axios";
import GithubCard from "../components/GithubCard";

class GithubCardsGrid extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      loadingText: "Loading repos ..."
    };
  }

  componentWillMount() {
    axios
      .get("https://api.github.com/users/sabatesduran/repos")
      .then(response => response.data)
      .then(repos => this.setState({ repos: repos }))
      .catch(error =>
        this.setState({
          loadingText: "Sorry, something happend with the Github API."
        })
      );
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
    const { repos, loadingText } = this.state;
    return (
      <div className="cards">
        {this.state.repos.length > 0 ? this.createGithubCards() : loadingText}
      </div>
    );
  }
}

export default GithubCardsGrid;
