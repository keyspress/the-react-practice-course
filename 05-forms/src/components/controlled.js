import React, { Component } from 'react';

class Controlled extends Component {
  state = {
    name: '',
    lastname: ''
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleLastNameChange = e => {
    this.setState({
      lastname: e.target.value
    });
  };

  onshandler = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onshandler}>
          <div className="form_element">
            <label>Enter name</label>
            <input
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>
          <div className="form_element">
            <label>Enter last name</label>
            <input
              type="text"
              onChange={this.handleLastNameChange}
              value={this.state.lastname}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Controlled;
