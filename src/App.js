import React, {Component} from 'react';
import './App.css';
import Shuffling from "./Component/Shuffling/Shuffling";
import ImageLoad from "./Component/ImageLoad/ImageLoad";
import Key from "./Demo/Key/Key";
import Item from "./Demo/Key/Item/Item";

const itemList = [
    <Item index='1'/>,
    <Item index='2'/>,
    <Item index='3'/>,
    <Item index='4'/>
];
class App extends Component {
    constructor(){
        super();
        this.state = {
            state: ''
        }
    }
    click(e) {
        itemList.unshift(<Item index='5'/>);
        this.setState({
            state:'1'
        })
    }
    render() {
        return (
            <div className='App'>
                <Key>
                    {
                        itemList
                    }
                </Key>
                <button onClick={this.click.bind(this)}>change list</button>
            </div>
        );
    }
}

export default App;
