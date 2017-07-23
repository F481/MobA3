import React from "react";
import {addWhiskyToBasket} from '../actions/whiskyToBasket';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Whisky extends React.Component {
  render() {
    const {whisky} = this.props;

    return (
      <div class="col-md-9">
        <h4>{whisky.name}</h4>
        <p>{whisky.description}</p>
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({addWhiskyToBasket: addWhiskyToBasket}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Whisky);

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.