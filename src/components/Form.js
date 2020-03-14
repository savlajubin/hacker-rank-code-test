import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import * as yup from 'yup'

class Form extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            name: '',
            email: '',
            phone: '',
            url: '',
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    schema = yup.object().shape({
        name: yup
            .string()
            .min(3)
            .max(30)
            .matches(/^([a-zA-Z])*$/)
            .required(),
        email: yup
            .string()
            .email(),
        phone: yup
            .string()
            .required()
            .matches(/^([2-9])\d{9}$/),
        url: yup
            .string()
            .url(),
    });

    submitHandler = e => {
        console.log('e', e, this.state)
        const isFormValid = this.props.isFormValid
        e.preventDefault()
        // check validity
        this.schema
            .isValid({
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                url: this.state.url,
            })
            .then(function (valid) {
                // valid; // => true
                isFormValid(valid)
                console.log('valid', valid)
            });
    }

    changeHandler = e => {
        let newState = {}
        newState[e.target.name] = e.target.value
        this.setState({
            ...this.state,
            ...newState
        })
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form onSubmit={this.submitHandler}>
                    <h3>Name:</h3>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        onChange={this.changeHandler}
                        className="name"
                    />
                    <h3>Email:</h3>
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        onChange={this.changeHandler}
                        className="email"
                    />
                    <h3>Phone:</h3>
                    <input
                        name="phone"
                        type="text"
                        placeholder="Enter your phone number"
                        onChange={this.changeHandler}
                        className="phone"
                    />
                    <h3>Blog URL:</h3>
                    <input
                        name="url"
                        type="text"
                        placeholder="Enter your blog URL"
                        onChange={this.changeHandler}
                        className="url"
                    />

                    <div className="small-6 small-centered text-center columns">
                        <button type="submit" className="button success expand round text-center">Verify</button>
                    </div>
                </form>
            </div>);
    }
}

export default Form;
