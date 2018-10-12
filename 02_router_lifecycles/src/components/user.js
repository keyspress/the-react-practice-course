import React from 'react';
import userHoc from '../hoc/userHoc';

const User = props => {
  console.log(props);
  return (
    <div>
      <h3>User 1</h3>
    </div>
  );
};

const User2 = props => {
  console.log(props);
  return (
    <div>
      <h3>User 2</h3>
    </div>
  );
};

export default userHoc(User, User2, 'hello');
