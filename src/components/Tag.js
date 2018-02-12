import React, { Component } from "react";

class Tag extends Component {
  render() {
    const { tag } = this.props;
    return (
      <div className="tag">{tag}</div>
    );
  }
}

export default Tag;
