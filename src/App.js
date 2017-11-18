import React, {Component} from 'react';
import './App.css';
import Shuffling from "./Component/Shuffling/Shuffling";

class App extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <Shuffling width='400px' startOffset='2' startZIndex='1'/>
            </div>
        );
    }
}

export default App;
