import React, {Component} from 'react';
import removePropsHoc from "../removePropsHOC";

const unableProps = ['getValue1'];

class Form extends Component {
    constructor(){
        super();
        this.state = {
            value : 'form的value'
        }
    }

    render() {
        return (
            <div>
                <form>
                    {this.props.children}
                </form>
            </div>
        )
    }
}

export default removePropsHoc(Form , []);