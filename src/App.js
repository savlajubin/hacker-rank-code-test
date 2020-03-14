import React, { Component } from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormValid: false,
        };
        this.isFormValid = this.isFormValid.bind(this)
    }

    isFormValid = isValid => {
        this.setState({
            isFormValid: isValid
        })
    }

    render() {
        return (<div>
            <Form isFormValid={this.isFormValid}></Form>
            <Message isFormValid={this.state.isFormValid}></Message>
        </div>);
    }
}

export default App;
