import React, { Component } from "react";
import Header from "./header/HeaderComponent";
import Footer from "./footer/FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    );
  }
}

export default Main;
