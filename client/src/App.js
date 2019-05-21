import React, { Component } from "react";
import "./App.css";

import Editor from "./Editor";
import Menu from "./Menu";

class App extends Component {
  state = {
    selectedDoc: null
  };

  selectDoc = id => {
    this.setState({ selectedDoc: id });
  };

  render = () => {
    return (
      <div>
        {this.state.selectedDoc ? (
          <Editor docID={this.state.selectedDoc} />
        ) : (
          <Menu setter={this.selectDoc} />
        )}
      </div>
    );
  };
}

export default App;
