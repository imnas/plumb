import React, { Component } from 'react';
import Footer from './footer.class';
import Header from './header.class';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="mainAppContainer">
            <Header/>
            {this.props.children}
            <Footer/>
      </div>
    );
  }
}

export default Container;