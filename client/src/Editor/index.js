import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Editor extends Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    const response = await axios.get("/docs/" + this.props.docID);
    this.setState({ data: response.data });
  };

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <div id="heading" contentEditable="true">
            {this.state.data.name ? this.state.data.name : "Title..."}
          </div>
          <div id="content" contentEditable="true">
            {this.state.data.content
              ? this.state.data.content
              : "A long time ago, in a galaxy far, far away..."}
          </div>
        </header>
      </div>
    );
  };
}

export default Editor;
