import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions'
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

        if (this.props.products.products == undefined) {
            console.log(" Props.products undefined");
        } else {
            console.log("next Props of WhiskyScotchSide");
            console.log(this.props.products.products);
            Whiskys = this.props.products.products.filter(whisky => whisky.category == "Scotch Highland").map((whisky) => <Whisky key={whisky.id} whisky={whisky}/>);
        }

        return (
            <div>
                <h1>Scotch Whiskys:</h1>
                <div class="row">{Whiskys}</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.whiskys.products
    };
}

export default connect(mapStateToProps)(WhiskyDisplay);


