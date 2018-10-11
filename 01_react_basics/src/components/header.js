import React, { Component } from 'react';
import '../css/styles.css';

class Header extends Component {
  state = {
    title: 'The keywords are:',
    keywords: ''
  };

  inputChangeHandler = e => {
    // console.log(e.target.value);
    this.setState({
      keywords: e.target.value
    });
  };

  render() {
    console.log(this.state.keywords);
    return (
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
      </header>
    );
  }
}

export default Header;
