import React, { Component } from 'react';

class ErrorBoudary extends Component {
    constructor(props) {
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError : true});
    }

    render() {
        if(this.state.hasError) {
            return <h1>Ooops. Something bad happened.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoudary;