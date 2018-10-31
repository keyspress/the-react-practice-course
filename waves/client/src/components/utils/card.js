import React, { Component } from 'react';

export default class Card extends Component {
  renderCardImage(images) {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return '/images/image_not_availible.png';
    }
  }

  render() {
    const props = this.props;
    return (
      <div className={`card_item_wrapper ${props.grid}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImage(props.images)}) no-repeat`
          }}
        />
        <div className="action_container">
          <div className="tags">
            <div className="brand">{props.brand.name}</div>
            <div className="brand">{props.name}</div>
            <div className="brand">${props.price}</div>
          </div>
        </div>
        {props.grid ? <div className="description">description</div> : null}
      </div>
    );
  }
}