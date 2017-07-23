import React from 'react';

export default class WhiskyInBasket extends React.Component {
  render() {
    const {whisky} = this.props;

    return (
      <div class="col-lg-3">
        <h4>{whisky.basketAmount}x {whisky.name}</h4>
        <p>{whisky.price * whisky.basketAmount} Euro</p>
        <a class="btn btn-default">Entfernen ...</a>
      </div>
    );
  }
}
