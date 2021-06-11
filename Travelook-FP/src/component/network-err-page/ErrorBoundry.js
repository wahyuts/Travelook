import React, {Component} from 'react';

class ErrorBoundry extends Component  {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error,info){
        this.setState ({hasError: true})
    }

    render() {
        if(this.state.hasError){
            <h1>Maaf kawan kawan ada error so jadi ga bisa dibuka</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry