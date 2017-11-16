import React, {Component} from 'react';

class Form extends Component {
    render() {
        console.log(this.props.children);
        return (
            <form {...this.props}>
                {this.props.children}
            </form>
        )
    }
}

export default Form;