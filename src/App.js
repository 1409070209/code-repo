import React, {Component} from 'react';
import './App.css';
import RouterView from "./Demo/ReactRouter/router/RouterView";
import Body from "./Demo/Event/Body/Body";
import Form from "./Component/Form/Form";
import Input from "./Component/Input/Input";

class App extends Component {

    
    render() {
        return (
            <Form>
                <Input type="text"/>
                <Input type="password"/>
            </Form>
        );
    }
}

export default App;
