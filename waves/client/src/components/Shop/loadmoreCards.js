import React from 'react';

import CardBlockShop from '../utils/card_block_shop';

export default function LoadmoreCards(props) {
  return (
    <div>
      <div>
        <CardBlockShop grid={props.grid} list={props.products} />
      </div>
    </div>
  );
}
