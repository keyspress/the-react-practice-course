import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { movieslist, directorslist } from './actions';

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
        <h3>List</h3>
        {this.renderMovies(this.props.data.movies)}
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
