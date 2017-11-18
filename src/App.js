import React, {Component} from 'react';
import './App.css';
import Shuffling from "./Component/Shuffling/Shuffling";
import Card from "./Component/Card/Card";

class App extends Component {
    constructor(){
        super();
    }
    change(e) {
        console.log(e);
    }
    render() {
        return (
            <div className='App'>
                <Shuffling startOffset='1' startZIndex='1' className='shuffling' onSlide={this.change.bind(this)}>
                    <Card value='1'/>
                    <Card value='12'/>
                    <Card value='123'/>
                    <Card value='1234'/>
                    <Card value='12345'/>
                </Shuffling>
            </div>
        );
    }
}

export default App;
