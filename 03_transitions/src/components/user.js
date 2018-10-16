import React, { Component } from 'react';

import UserTemplate from './user_template';

class User extends Component {
  state = {
    name: 'Frank',
    lastName: 'Furter',
    age: 25,
    hobbies: ['run', 'jump'],
    spanish: false,
    message() {
      console.log('sup');
    },
    car: { brand: 'ford', model: 'focus' },
    mother: 'Jane',
    color: 'red'
  };

  changeColor() {
    // this.setState({
    //   color: 'blue'
    // });
    this.refs.myColor.style.color = 'blue';
  }

  render() {
    const style = {
      color: this.state.color
    };
    return (
      <div>
        <h4 style={style} ref="myColor">
          {this.state.mother}
        </h4>
        <div onClick={() => this.changeColor()}>Change</div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;
