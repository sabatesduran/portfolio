import React, { Component } from "react";
import GithubCardsGrid from "../components/GithubCardsGrid";

const Projects = ({ data }) => (
  <div>
    <h2>Github projects</h2>
    <GithubCardsGrid />
  </div>
);

export default Projects;
