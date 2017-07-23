import React from 'react';
import {connect} from 'react-redux';
import WhiskyInBasket from './whiskyInBasket';

class Basket extends React.Component {

    render() {

        var Whiskys = [];
        if (this.props.basket[0] != null) {
            console.log("basket > 0");
            Whiskys = this.props.basket.map((whisky) => <WhiskyInBasket key={whisky.id} whisky={whisky}/>);
        } else {
            console.log("basket < 0");
            console.log(this.props.basket.length)
        }

        const maxAmountShown = 5;

        var more = "";
        if (Whiskys.length > maxAmountShown) {
            Whiskys.splice(maxAmountShown);
            more = "Und "
            more += (Whiskys.length - maxAmountShown).toString();
            more += " weitere ...";
            console.log(Whiskys.length - maxAmountShown);
        }

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


