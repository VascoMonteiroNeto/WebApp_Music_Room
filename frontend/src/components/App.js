import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>testeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
console.log('aaa')
render(<App />, appDiv);