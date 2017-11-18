import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div style={{background:'#000',height:100}}>
                <p style={{color:'red'}}>{this.props.value}</p>
            </div>
        )
    }
}

export default Card;