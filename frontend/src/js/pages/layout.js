import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";

export default class Layout extends React.Component {
  render() {
    const {location} = this.props;
    const Position = {
      marginTop: "120px"
    };
    console.log("layout");
    return (
      <div>

        <Navbar location={location} />

        <div class="container" style={Position}>
          <div class="row">
            <div class="col-lg-9">

              {this.props.children}

            </div>
            <div class="col-lg-3">
              <div class="affix">
                <h1>Warenkorb</h1>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
