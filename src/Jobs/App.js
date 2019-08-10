import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import One from "./one";
import Two from "./two";
import Tree from "./tree";
export default class App extends Component {
  constructor() {
    super();
    this.state = { render: "", jobCount: 0 };
  }
  handleClick(jobCount, e) {
    this.setState({ render: jobCount });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case "jobone":
        return <One />;
      case "jobtwo":
        return <Two />;
      case "jobtree":
        return <Tree />;
    }
  }
  render() {
    return (
      <div className="App">
        <ButtonGroup>
          <Button onClick={this.handleClick.bind(this, 0)}>0</Button>
          <Button onClick={this.handleClick.bind(this, "jobone")}>1</Button>
          <Button onClick={this.handleClick.bind(this, "jobtwo")}>2</Button>
          <Button onClick={this.handleClick.bind(this, "jobtree")}>3</Button>
        </ButtonGroup>
        {this._renderSubComp()}
      </div>
    );
  }
}
