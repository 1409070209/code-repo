import React, {Component} from 'react';

class Item extends Component {
    componentWillMount(){
        console.log('Mount' + this.props.index);
    }
    componentWillUpdate(){
        console.log('Update' + this.props.index);
    }
    render() {
        return (
            <div className="Item">
                <p>{this.props.index}</p>
            </div>
        )
    }
}

export default Item;