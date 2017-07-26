import React from 'react';
import {connect} from 'react-redux';
import {doLogin} from '../actions/loginActions'
import {doRegistry} from '../actions/registryActions'
import WhiskyInBasket from "../components/whiskyInBasket";

class Login extends React.Component {

    /**
     * Initialize state and "Handle" functions
     * @param props
     */
    constructor(props) {
        super(props)
        this.state ={
            email: null,
            name: null,
            password: null
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    /**
     * "Handle" functions take edit event and set state to current user input.
     * @param event
     */

    handleEmailChange = function(event) {
        this.setState({email: event.target.value});
    };

    handleNameChange = function(event) {
        this.setState({name: event.target.value});
    };

    handlePasswordChange = function(event) {
        this.setState({password: event.target.value});
    };



    /**
     * Fire doLogin() action, with JSON parameter containing email and password information
     */
    handleLogin = () => {
        console.log("E-Mail: " + this.state.email);
        console.log("Name: " + this.state.name);
        console.log("Passwort: " + this.state.password);
        var logindata = JSON.stringify({email: this.state.email, password: this.state.password});
        console.log(logindata);
        this.props.dispatch(doLogin(logindata));
    }

    /**
     * Fire doRegistry() action, with JSON parameter containing email, name and password information
     */
    handleRegistry = () => {
        console.log("E-Mail: " + this.state.email);
        console.log("Name: " + this.state.name);
        console.log("Passwort: " + this.state.password);
        var registrydata = JSON.stringify({email: this.state.email,password: this.state.password, name: this.state.name });
        console.log(registrydata);
        this.props.dispatch(doRegistry(registrydata));
    }

    render() {

        const marginLarge = {
            marginTop: '100px'
        };

        /**
         * Display login form
         */
        return(
            <div>
        <h1>Login</h1>
            <form style={marginLarge}>
                <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} /> <br/><hr/>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} /> <br/><hr/>
                <input type="password" name="password" placeholder="Passwort" value={this.state.password} onChange={this.handlePasswordChange} /> <br/><hr/>
                <button type="button" onClick={this.handleLogin}>Login</button>
                <button type="button" onClick={this.handleRegistry}>Registrieren</button>
            </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        basket: state.basket,
        userData: state.userData.userData
    };
}

export default connect(mapStateToProps)(Login);


