import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import PostItem from './components/post_item';
import Profile from './components/profiles';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink>
          <br />
          <NavLink
            to="/posts"
            activeStyle={{ color: 'red' }}
            activeClassName="selected"
          >
            Posts
          </NavLink>
          <br />
          <NavLink
            to={{
              pathname: '/profile'
            }}
          >
            Profile
          </NavLink>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/posts/:id" component={PostItem} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
