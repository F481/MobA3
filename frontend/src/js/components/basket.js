import React from 'react';
import {connect} from 'react-redux';
import WhiskyInBasket from './whiskyInBasket';

class Basket extends React.Component {

    render() {

        /**
         * Checks if basket contains any elements, and maps them to whiskyInBasket.js objects.
         * @type {Array}
         */
        var Whiskys = [];
        if (this.props.basket[0] != null) {
            console.log("basket > 0");
            Whiskys = this.props.basket.map((whisky) => <WhiskyInBasket key={whisky._id} whisky={whisky}/>);
        } else {
            console.log("basket < 0");
            console.log(this.props.basket.length)
        }

        /**
         * Cuts of more than "maxAmountShown" whiskys, so the basket page will not have to scroll.
         * @type {number}
         */
        const maxAmountShown = 5;
        var more = "";
        if (Whiskys.length > maxAmountShown) {
            more = "Und "
            more += (Whiskys.length - maxAmountShown);
            more += " weitere ...";
            Whiskys.splice(maxAmountShown);
            console.log(Whiskys.length - maxAmountShown);
        }

        /**
         * Render all whiskyInBasket.js objects.
         */
        return (
            <div class='col-lg-3'>
                <h1>Warenkorb:</h1>
                <hr/>
                <div class="row" class='col-lg-3'>{Whiskys}</div>
                <hr/>
                <p>{more}</p>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        basket: state.basket
    };
}

export default connect(mapStateToProps)(Basket);


