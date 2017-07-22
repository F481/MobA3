import React from 'react';
import {connect} from 'react-redux';

import Whisky from "../components/whisky";

class WhiskyDisplay extends React.Component {
    render() {
        /* DEBUG
      const Whiskys = this.props.whiskys.map((whisky) => {
          return (
              <li key={whisky.id}>
                  {whisky.name}: {whisky.description}
              </li>
          );
      }); */

        const Whiskys = this.props.whiskys.map((whisky) => <Whisky key={whisky.id} title={whisky.name}
                                                                   description={whisky.description}/>);

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
    return {
        whiskys: state.whiskys
    };
}

export default connect(mapStateToProps)(WhiskyDisplay);


