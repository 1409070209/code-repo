import React, {Component} from 'react';
import './App.css';
import RouterView from "./Demo/ReactRouter/router/RouterView";
import Body from "./Demo/Event/Body/Body";
import Form from "./Component/Form/Form";
import Input from "./Component/Input/Input";

class App extends Component {
    constructor(){
        super();
        this.state = {
            value : 'App.value'
        }
    }
    enter (e) {
        console.log(e.target.value);
        console.log('App.Enter');
    }
    render() {
        return (
            <div>
                <Form>
                    <Input value="123"/>
                    <br/>
                    <Input type='password' onEnterUp={this.enter.bind(this)}/>
                    <br/>
                </Form>
                <button onClick={this.click.bind(this)}>getState</button>
            </div>
        );
    }
}

export default App;
