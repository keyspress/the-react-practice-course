import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { movieslist, directorslist } from '../actions';

import Movieslist from '../components/moviesList';

class App extends Component {
  componentWillMount() {
    this.props.movieslist();
    this.props.directorslist();
  }

  renderMovies = movies =>
    movies ? movies.map(item => <div key={item.id}>{item.name}</div>) : null;

  render() {
    console.log(this.props);
    return (
      <div>
        <Movieslist {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      movieslist,
      directorslist
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
