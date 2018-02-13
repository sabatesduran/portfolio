import React, { Component } from "react";

class ExternalLink extends Component {
  render() {
    const { url, className, children } = this.props;
    return (
      <a href={url} className={className} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }
}

export default ExternalLink;
