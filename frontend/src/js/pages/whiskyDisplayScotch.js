import React from 'react';
import {connect} from 'react-redux';

import Whisky from "../components/whisky";

class WhiskyDisplay extends React.Component {
    render() {

        const Whiskys = this.props.whiskys.map((whisky) => <Whisky key={whisky.id} title={whisky.name}
                                                                   description={whisky.description}/>);

        //TODO whisky-reducer.filter(kategory=scotch).map((etc)=>Whisky);

        return (
            <div>
                <h1>Scotch Whiskys (react stream/filter/map muss ich mir nochmal anschauen, daher wieder alle:)</h1>
                <div class="row">{Whiskys}</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        whiskys: state.whiskys
    };
}

export default connect(mapStateToProps)(WhiskyDisplay);


