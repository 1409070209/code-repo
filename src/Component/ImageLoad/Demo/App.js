import React, {Component} from 'react';
import './App.css';
import Shuffling from "./Component/Shuffling/Shuffling";
import ImageLoad from "./Component/ImageLoad/ImageLoad";


class App extends Component {
    constructor(){
        super();
        this.state={
            shouldLoad: false,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1cAYvhw8i2i-EytzJWhePpmSBKXmlAZSS8uXnsFlicKRJUmOjg'
        }
    }
    change(e) {
        console.log(e);
    }
    click(e) {
        if (e.target.tagName === 'IMG') {
            this.setState({
                shouldLoad: true
            })
        }
    }
    render() {
        return (
            <div className='App' onClick={this.click.bind(this)}>
                <Shuffling startOffset='1' startZIndex='1' className='shuffling' onSlide={this.change.bind(this)}>
                    <ImageLoad shouldLoad={this.state.shouldLoad} url={this.state.url}/>
                    <ImageLoad shouldLoad={this.state.shouldLoad} url={this.state.url}/>
                    <ImageLoad shouldLoad={this.state.shouldLoad} url={this.state.url}/>
                    <ImageLoad shouldLoad={this.state.shouldLoad} url={this.state.url}/>
                </Shuffling>
            </div>
        );
    }
}

export default App;
