import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import MyButton from '../utils/MyButton';

class Pricing extends Component {
  state = {
    prices: [1000000, 1500000, 2500000],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nobis?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quasi.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, quam!'
    ],
    linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#fff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
