import  React , {Component} from 'react';

class  ErrorBoundary extends Component{
    state = {
        hasError: false,
        errorMessages: ''
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError){
            return <h1>{this.state.errorMessages}</h1>;
        }
        else {
            return this.props.children;
        }

    }

}
export default ErrorBoundary;