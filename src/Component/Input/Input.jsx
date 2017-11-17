import React, {Component} from 'react';
import InputHoc from "../InputHOC";
import removePropsHoc from "../removePropsHOC";

const unableProps = [
    'value',
    'onChange',
    'onKeyUp'
];
class Input extends Component {
    render() {
        return (
            <input {...this.props}/>
        )
    }
}

export default InputHoc(removePropsHoc(Input , unableProps));