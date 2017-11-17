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
            this.setState({
                value: e.target.value
            })
        }
        keyUp(e){
            const {onEnterUp} = this.props;
            if (typeof onEnterUp === 'function' && e.keyCode === 13) {
                onEnterUp(e);
            }
        }

        render(){
            return (
                <Input
                        {...this.props}
                        value={this.state.value}
                        onChange={this.onChange.bind(this)}
                        onKeyUp={this.keyUp.bind(this)}
                />
            )
        }
    }
}
export default InputHoc;