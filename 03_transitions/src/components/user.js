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
    mother: 'Jane'
  };

  render() {
    return (
      <div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;
