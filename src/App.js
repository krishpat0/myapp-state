import React from "react";
import "./App.css";
import NewPage from "./Components/NewPage";

class App extends React.Component {
  styles = {
    fontStyles: "bold",
    color: "teal",
  };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <NewPage></NewPage>
      </div>
    );
  }
}

export default App;
