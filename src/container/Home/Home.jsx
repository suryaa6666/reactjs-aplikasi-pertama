import React, { Component } from "react";
// import Counter from "../../component/Counter/Counter";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";

class Home extends Component {
  state = {
    showComponent: true,
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       showComponent: false,
  //     });
  //   }, 2000);
  // }

  render() {
    return (
      <div>
        <h1> Home </h1>
        <hr></hr>
        {this.state.showComponent ? <LifeCycleComp /> : null}
      </div>
    );
  }
}

export default Home;
