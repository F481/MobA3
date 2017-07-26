import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions'
import {doLogin} from '../actions/loginActions';
import Whisky from "../components/whisky";
var Whiskys;
@connect((store) => {
    console.log("@connectStore_WhiskyAll");
    return {
        products: store.whiskys.products
    };
})

class WhiskyDisplay extends React.Component {

    /**
     * Fetches whisky data, reducerWhisky.js will contain data upon successful return
     */
    componentWillMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {

        /**
         * check for whisky data, if present, map whisky data to whisky.js objects.
         */
        if(this.props.products.products === undefined){
            console.log(" Props.products undefined");
        }else{
            console.log("next Props of WhiskyallSide");
            console.log(this.props.products.products);
            Whiskys =this.props.products.products.map((whisky) => <Whisky key={whisky.id} whisky={whisky}/>);
        }

        /**
         * Display all whisky.js objects
         */
        return (
            <div>
                <h1>Alle Whiskys:</h1>
                <div class="row">{Whiskys}</div>
            </div>
        );
    }
}



function mapStateToProps(state) {
    console.log(state);
    return {
        products: state.whiskys.products
    };
}

export default connect(mapStateToProps)(WhiskyDisplay);


