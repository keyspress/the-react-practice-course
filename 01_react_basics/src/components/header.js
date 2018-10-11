import React, { Component } from 'react';
import classes from '../css/styles.css';

class Header extends Component {
  state = {
    keywords: ''
  };

  inputChangeHandler = e => {
    this.setState({
      keywords: e.target.value
    });
  };

  render() {
    return (
      <header className={this.state.active}>
        <div className={classes.logo}>Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
