import React from "react";
import {connect} from "react-redux";

class Admin extends React.Component {
    render() {

        const marginMid = {
            marginTop: '100px'
        };

        if (this.props.authenticated === true) {
            return (
                <div style={marginMid}>
                    <h2>Willkommen!</h2>
                    <hr/>
                    <p>Administrativer Bereich</p>
                    <hr/>
                </div>
            );
        } else {
            return (
                <div style={marginMid}>
                    <h4>Zugriff beschränkt</h4>
                </div>
            );
        }
    }
}


function mapStateToProps(state) {
    return {
        authenticated: state.authenticated
    };
}

export default connect(mapStateToProps)(Admin);