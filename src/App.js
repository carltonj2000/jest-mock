import React, { Component } from "react";
import "./App.css";
import { getUser } from "./api/github";

const renderLine = (user, key) => (
  <li key={key}>
    <b>{key}</b>: {user[key]}
  </li>
);

class App extends Component {
  state = { user: {}, err: null };

  componentDidMount = () =>
    getUser("vnglst")
      .then(user => this.setState({ user: user }))
      .catch(err => this.setState({ err: err }));

  render() {
    const { user, err } = this.state;
    return (
      <div className="App">
        <ul style={{ listStyle: "none" }}>
          {// Loop over the object keys and render each key
          Object.keys(user).map(key => renderLine(user, key))}
        </ul>
        {err && <div>Error: {err}</div>}
      </div>
    );
  }
}

export default App;
