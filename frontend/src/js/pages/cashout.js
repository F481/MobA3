import React from 'react';
import {connect} from 'react-redux';

import WhiskyInBasket from "../components/whiskyInBasket";

class Cashout extends React.Component {
    render() {

        var Whiskys = [];
        if (this.props.basket[0] != null) {
            console.log("basket > 0");
            Whiskys = this.props.basket.map((whisky) => <WhiskyInBasket key={whisky.id} whisky={whisky}/>);
        }

        var total = 0;
        this.props.basket.map(whisky => total += (Math.round((whisky.price * whisky.basketAmount) * 100)/100));

        if (Whiskys.length > 0) {
            return (
                <div>
                    <h1>Ihre Bestellung: </h1>
                    <div class="row">{Whiskys}</div>
                    <hr/>
                    <h3>Gesamt: {total} €</h3>
                    <button>Bezahlen ...</button>
                </div>
            );
        } else {
            return (
                <div>
                    <hr/>
                    <h2>Ihr Warenkorb ist leer.</h2>
                </div>
            );
        }
    }
}


function mapStateToProps(state) {
    return {
        basket: state.basket
    };
}

export default connect(mapStateToProps)(Cashout);


