import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import DocListItem from "./DocListItem";

class Menu extends Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    this.getDocs();
  };

  getDocs = async () => {
    const response = await axios.get("/docs/");
    this.setState({ data: response.data });
  };
  render = () => {
    return (
      <div>
        {this.state.data.map(doc => {
          return (
            <DocListItem
              key={doc._id}
              docID={doc._id}
              setter={this.props.setter}
              name={doc.name}
              wpd={doc.words_per_day}
            />
          );
        })}
      </div>
    );
  };
}

export default Menu;
