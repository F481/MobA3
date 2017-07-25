import React from 'react';
import {connect} from 'react-redux';

import WhiskyInBasket from "../components/whiskyInBasket";

// Create component for button
class Button extends React.Component {
    render() {
        return (
            <fieldset>
                <button
                    type={this.props.type || 'button'}
                    value={this.props.value || null}
                >
                    {this.props.text}
                </button>
            </fieldset>
        );
    }
}

// Create component for label
class Label extends React.Component {
    render() {
        if (this.props.hasLabel === 'true') {
            return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
        }
    }
}

// Create component for input
class Input extends React.Component {
    render() {
        return (
            <fieldset>
                <Label
                    hasLabel={this.props.hasLabel}
                    htmlFor={this.props.htmlFor}
                    label={this.props.label}
                />
                <input
                    id={this.props.htmlFor}
                    max={this.props.max || null}
                    min={this.props.min || null}
                    name={this.props.name || null}
                    placeholder={this.props.placeholder || null}
                    required={this.props.required || null}
                    step={this.props.step || null}
                    type={this.props.type || 'text'}
                />
            </fieldset>
        );
    }
}

const marginLarge = {
    marginTop: '100px'
};


class Login extends React.Component {
    render() {
        return (
            <div>
                <form method='' action='' style={marginLarge}>
                    <Input
                        hasLabel='true'
                        htmlFor='emailInput'
                        label='E-Mail:  '
                        required='true'
                        type='email'
                    />
                    <hr/>
                    <Input
                        hasLabel='true'
                        htmlFor='passwordInput'
                        label='Passwort:  '
                        required='true'
                        type='password'
                    />
                    <hr/>
                    <Button
                        type='submit'
                        value='submit'
                        text='Login'
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        basket: state.basket
    };
}

export default connect(mapStateToProps)(Login);


