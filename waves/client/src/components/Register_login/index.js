import React from 'react';

import MyButton from '../utils/button';
import Login from './login';

export default function RegisterLogin() {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque at
              autem saepe quos deleniti consequuntur officiis iste natus
              excepturi ab. Accusantium quod optio consequuntur dolorum, quae
              debitis nam voluptatum distinctio.
            </p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin: '10px 0 0 0'
              }}
            />
          </div>
          <div className="right">
            <h2>Registered customers</h2>
            <p>If you have and account please log in.</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
