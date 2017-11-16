import React, {Component} from 'react';

function InputHoc(Input) {
    return class extends Component {
        constructor(){
            super();
            this.state = {
                value: ''
            }
        }
        onChange(e){
            console.log(e.target.value);
            this.setState({
                value: e.target.value
            })
        }
        render(){
            return (
                <Input {...this.props} value={this.state.value} onChange={this.onChange.bind(this)} />
            )
        }
    }
}
export default InputHoc;