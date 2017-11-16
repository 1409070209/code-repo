import React, {Component} from 'react';
import InputHoc from "../InputHOC";

class Input extends Component {
    render() {
        return (
            <input type="text" {...this.props}/>
        )
    }
}

export default InputHoc(Input);