import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBrands, getWoods } from '../../actions/products_actions';

import PageTop from '../utils/page_top';

class Shop extends Component {
  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">Left</div>
            <div className="right">Right</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStatetoProps)(Shop);
