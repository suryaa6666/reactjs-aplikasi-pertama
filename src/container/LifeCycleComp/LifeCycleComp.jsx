import React, { Component } from "react";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("CONSTRUCTOR");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("GETDERIVEDSTATEFROMPROPS");
    return null;
  }

  componentDidMount() {
    console.log("COMPONENTDIDMOUNT");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("SHOULDCOMPONENTUPDATE");
    console.log("NEXTPROPS : " + nextState.count);
    console.log("CURRENT STATE : " + this.state.count);
    console.groupEnd();
    if(nextState.count >= 5) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("GETSNAPSHOTBEFOREUPDATE");
    return null;
  }

  componentDidUpdate() {
    console.log("COMPONENTDIDUPDATE");
  }

  componentWillUnmount() {
    console.log("COMPONENTWILLUNMOUNT");
  }

  onChangeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p> LifeCycle Component </p>
        <button onClick={this.onChangeCount}>
          {" "}
          CLICK ME {this.state.count}
        </button>
      </div>
    );
  }
}

export default LifeCycleComp;
