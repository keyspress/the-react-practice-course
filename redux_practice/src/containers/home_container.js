import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from '../components/search';
import Artistlist from '../components/artistlist';
import { artistListAll } from '../actions';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.artistListAll();
  }

  getKeywords = event => {
    let key = event.target.value;

    console.log(key);
  };

  render() {
    return (
      <div>
        <Search keywords={this.getKeywords} />
        <Artistlist artists={this.props.artists.artistList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ artistListAll }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
