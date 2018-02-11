import React, { Component } from "react";
import Link from "gatsby-link";
import axios from "axios";
import GithubCardsGrid from "../components/GithubCardsGrid";

const GithubRepositoriesPage = ({ data }) => (
  <div>
    <h2>Github projects</h2>
    <GithubCardsGrid />
  </div>
);

export default GithubRepositoriesPage;
