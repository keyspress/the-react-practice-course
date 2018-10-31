import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBrands, getWoods } from '../../actions/products_actions';

import PageTop from '../utils/page_top';
import CollapseCheckbox from '../utils/collapseCheckbox';

class Shop extends Component {
  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }

  handleFilters = () => {};

  render() {
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <CollapseCheckbox
                initState={true}
                title="Brands"
                list={products.brands}
                handleFilters={filters => this.handleFilters(filters, 'brand')}
              />
            </div>
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
