import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from "../images/favicon.png";
import Header from "../components/Header";
import DarkModeSwitch from "../components/DarkModeSwitch";

import "../styles/index.scss";

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.localStorageId = "sabatesduran-config-v0";

    let localeStorageConfig = this.loadConfigFromLocalStorage();

    let defaultState = {
      darkMode: false
    };

    this.state = Object.assign(defaultState, localeStorageConfig);
  }

  checkLocalStorage = () => {
    return typeof Storage !== "undefined";
  };

  loadConfigFromLocalStorage = () => {
    return this.checkLocalStorage()
      ? JSON.parse(localStorage.getItem(this.localStorageId))
      : {};
  };

  saveConfigToLocalStorage = () => {
    this.checkLocalStorage()
      ? localStorage.setItem(this.localStorageId, JSON.stringify(this.state))
      : "";
  };

  onToggleDarkMode = async () => {
    await this.setState({ darkMode: this.state.darkMode ? false : true });
    await this.saveConfigToLocalStorage();
  };

  render() {
    const { children, data } = this.props;
    return (
      <div className={this.state.darkMode ? "dark-mode" : "theme-transition"}>
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
          <DarkModeSwitch onClick={this.onToggleDarkMode} />
        </div>
      </div>
    );
  }
}

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
          class
        }
      }
    }
  }
`;
