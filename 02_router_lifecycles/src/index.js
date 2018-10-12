import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import PostItem from './components/post_item';
import Profile from './components/profiles';
import Life from './components/lifecycles';

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
          <br />
          <NavLink to="/life">Life</NavLink>
        </header>
        <Switch>
          <Route path="/posts/:id" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/life" component={Life} />
          <Route path="/" exact component={Home} />
          <Route component={Posts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
