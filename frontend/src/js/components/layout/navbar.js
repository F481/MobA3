import React from "react";
import {IndexLink, Link} from "react-router";
import {connect} from "react-redux";

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    /**
     * Toggles collapsing navbar on mobile devices
     */
    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {

        /**
         * Routes of the navbar elements
         */
        const {location} = this.props;
        const {collapsed} = this.state;
        const homeClass = location.pathname === "/" ? "active" : "";
        const mainClass = location.pathname.match(/^\/all/) ? "active" : "";
        const scotchClass = location.pathname.match(/^\/scotch/) ? "active" : "";
        const searchClass = location.pathname.match(/^\/search/) ? "active" : "";
        const cashoutClass = location.pathname.match(/^\/cashout/) ? "active" : "";
        const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
        const adminClass = location.pathname.match(/^\/admin/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

        const navbarStyle = {
            background: 'linear-gradient(#555000,#444000)',
            paddingBottom: '30px',
            paddingTop: '30px'
        };

        const navbarLogoStyle = {
            height: '220px',
            transform: 'translate(70px, -80px)'
        };

        const navbarBrandMargin = {
            marginRight: '70px'
        };

        var isAuthenticated = this.props.authenticated;

        /**
         * Displays navbar with logo, "admin area" only displayed on authentication.
         */
        return (
            <div class="wqheader">
                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style={navbarStyle}>
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"/>
                                <span class="icon-bar"/>
                                <span class="icon-bar"/>
                            </button>
                            <a class="navbar-brand" rel="home" href="#" style={navbarBrandMargin}>
                                <img src="/img/wq_logo_big.png" style={navbarLogoStyle} alt="logo">
                                </img>
                            </a>
                        </div>
                        <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li class={homeClass}>
                                    <Link to="/" onClick={this.toggleCollapse.bind(this)}>Home</Link>
                                </li>
                                <li class={mainClass}>
                                    <IndexLink to="all" onClick={this.toggleCollapse.bind(this)}>Alle</IndexLink>
                                </li>
                                <li class={scotchClass}>
                                    <IndexLink to="scotch" onClick={this.toggleCollapse.bind(this)}>Scotch
                                        Whisky</IndexLink>
                                </li>
                                <li class={searchClass}>
                                    <Link to="search" onClick={this.toggleCollapse.bind(this)}>Suche</Link>
                                </li>
                                <li class={cashoutClass}>
                                    <Link to="cashout" onClick={this.toggleCollapse.bind(this)}>Kasse ...</Link>
                                </li>
                                <li class={loginClass}>
                                    <Link to="login" onClick={this.toggleCollapse.bind(this)}>Login ...</Link>
                                </li>
                                {isAuthenticated
                                    ? <li class={adminClass}>
                                        <Link to="admin" onClick={this.toggleCollapse.bind(this)}>Administration</Link>
                                    </li>
                                    : null
                                }

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.userData.authenticated
    };
}

export default connect(mapStateToProps)(Navbar);