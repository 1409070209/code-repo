import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <p style={{color:'red'}}>{this.props.value}</p>
            </div>
        )
    }
}

export default Card;