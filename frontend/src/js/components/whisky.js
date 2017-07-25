import React from "react";
import {addWhiskyToBasket} from '../actions/whiskyToBasket';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Whisky extends React.Component {
    render() {
        const {whisky} = this.props;

        return (
            <div class="col-md-9">
                <hr/>
                <h3>{whisky.name}</h3>
                <img src={"/img/" + whisky.name + ".png"} height="300"/>
                <hr/>
                <p>{whisky.description}</p>
                <h5>{whisky.price} €</h5>
                <a class="btn btn-default" onClick={() => this.props.addWhiskyToBasket(whisky)}>In Warenkorb</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        whiskys: state.whiskys
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addWhiskyToBasket: addWhiskyToBasket}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Whisky);
