import React, { Component, PureComponent, Fragment } from "react";
import "../styles/App.css";

const createE = React.createElement;

function Button(props) {
  return (
    <button onClick={props.handleClick}>{props.name.toUpperCase()}</button>
  );
}

function MainText(props) {
  return createE("h1", { className: "mainText" }, props.content);
}

const Form = createE(
  "form",
  { className: "searchFrom" },
  createE("label", { className: "label" }, "Type name of film or actor"),
  createE("input", { type: "text", value: "And here is a child" }),
  <Button name="Search" />
);

class FooterContent extends PureComponent {
  render() {
    return <h3>React.Minsk.2019</h3>;
  }
}

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <header>{Form}</header>
        <main>
          {createE(MainText, { content: "No films, but wait..." }, null)}
        </main>
        <footer>
          <FooterContent />
        </footer>
      </Fragment>
    );
  }
}

export default App;
