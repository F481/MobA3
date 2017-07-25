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
    componentWillMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {
        /* DEBUG
      const Whiskys = this.props.whiskys.map((whisky) => {
          return (
              <li key={whisky.id}>
                  {whisky.name}: {whisky.description}
              </li>
          );
      }); */


        if(this.props.products.products == undefined){
            console.log(" Props.products undefined");
        }else{
            console.log("next Props of WhiskyallSide");
            console.log(this.props.products.products);
            Whiskys =this.props.products.products.map((whisky) => <Whisky key={whisky.id} whisky={whisky}/>);
        }

        return (
            <div>
                <h1>Alle Whiskys:</h1>
                <div class="row">{Whiskys}</div>
            </div>
        );

        /* OLD
        const adText = [
          "Ad spot #1",
          "Ad spot #2",
          "Ad spot #3",
          "Ad spot #4",
          "Ad spot #5",
        ];

        const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
        console.log("featured");
        return (
          <div>
            <div class="row">
              <div class="col-lg-12">
                <div class="well text-center">
                  {randomAd}
                </div>
              </div>
            </div>

            <div class="row">{Whiskys}</div>
          </div>
        );
         */
    }
}



function mapStateToProps(state) {
    console.log(state);
    return {
        products: state.whiskys.products
    };
}

export default connect(mapStateToProps)(WhiskyDisplay);


