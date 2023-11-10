import React from "react";

class SimpleClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Suad" };
  }
  //componenta mount je kad je stavljena na dom
  // svaka komponenta ima tri procesa mounting updating unmountig
  //   lifecicle metode
  //Hook funkcije koje se zakace za lifecycle metode na pocetku funkcionalnih komponenti se koriste
  componentDidMount() {
    console.log("didMount");
  }
  componentDidUpdate() {}
  render() {
    console.log("render");
    return (
      <div>
        {this.state.name}
        <button onClick={() => this.setState({ name: "changed" })}>
          Click
        </button>
      </div>
    );
  }
}
export default SimpleClassComponent;
