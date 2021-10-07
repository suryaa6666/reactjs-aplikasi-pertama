import React, { Component } from "react";
import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";

class Home extends Component {
  render() {
    return (
      <div>
        <YoutubeComponent name="AKU NARUTOOO" />
        <YoutubeComponent name="AKU SASUKEEE"/>
        <YoutubeComponent name="AKU GARA"/>
        <YoutubeComponent/>
      </div>
    );
  }
}



export default Home;
