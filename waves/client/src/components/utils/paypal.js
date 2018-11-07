import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends Component {
  render() {
    const onSuccess = payment => {
      // console.log(JSON.stringify(payment));
      this.props.onSuccess(payment);

      // {
      //   "paid":true,
      //   "cancelled":false,
      //   "payerID":"QUCDQY7QXNH2Y",
      //   "paymentID":"PAY-7FK99840P2721511DLPRRXQI",
      //   "paymentToken":"EC-5WA121398A733710S",
      //   "returnUrl":"https://www.sandbox.paypal.com/?paymentId=PAY-7FK99840P2721511DLPRRXQI&token=EC-5WA121398A733710S&PayerID=QUCDQY7QXNH2Y",
      //   "address":{
      //     "recipient_name":"test buyer",
      //     "line1":"1 Main St",
      //     "city":"San Jose",
      //     "state":"CA",
      //     "postal_code":"95131",
      //     "country_code":"US"
      //   },
      //   "email":"kylespresser4biz-buyer@gmail.com"
      // }
    };

    const onCancel = data => {
      console.log(JSON.stringify(data));
    };

    const onError = err => {
      console.log(JSON.stringify(err));
    };

    let env = 'sandbox';
    let currency = 'USD';
    let total = this.props.toPay;

    const client = {
      sandbox:
        'AQbjUy_zhoN3aGiH8nSH6IsLTrCWJRpx-ekBHxJ4AugZi65j9yHdMy_J2fdvSltk3HT_3qLiwRoLvg94',
      production: ''
    };

    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: 'large',
            color: 'blue',
            shape: 'rect',
            label: 'checkout'
          }}
        />
      </div>
    );
  }
}
