import React, { Component,Fragment } from "react";
import "./App.css";
const Temp = () => {
  return (
    <Fragment>
      <div>hi</div>
      <div>Gabriel Fono</div>
    </Fragment>
  )
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Temp />
      </div>
    );
  }
}
export default App;
