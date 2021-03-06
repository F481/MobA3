import React from 'react';
import {deleteWhiskyFromBasket} from "../actions/whiskyDeleteBasket"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class WhiskyInBasket extends React.Component {
  render() {
    const {whisky} = this.props;

      /**
       * Displays whisky data like whisky.js object, but in "basket friendly" format without description or picture.
       */
    return (
      <div>
        <h4>{whisky.basketAmount}x {whisky.name}</h4>
        <p>{(Math.round((whisky.price * whisky.basketAmount) * 100)/100)} Euro</p>
        <a class="btn btn-default" onClick={() => this.props.deleteWhiskyFromBasket(whisky)}>Entfernen ...</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        basket: state.basket
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({deleteWhiskyFromBasket: deleteWhiskyFromBasket}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WhiskyInBasket);
