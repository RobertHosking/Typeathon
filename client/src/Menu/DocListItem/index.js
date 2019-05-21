import React, { Component } from "react";
import "./style.css";

class DocListItem extends Component {
  render = () => {
    return (
      <div
        className="listItem"
        onClick={() => this.props.setter(this.props.docID)}
      >
        <h3>{this.props.name}</h3>
      </div>
    );
  };
}

export default DocListItem;
