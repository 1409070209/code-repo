import React, {Component} from 'react';
import './App.css';
import RouterView from "./component/ReactRouter/router/RouterView";

class App extends Component {
    componentDidMount(){
        window.addEventListener('popstate',()=>{
            console.log('popstate');
        });
    }
    
    render() {
        return (
            <RouterView/>
        );
    }
}

export default App;
