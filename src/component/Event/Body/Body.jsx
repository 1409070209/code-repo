import React, {Component} from 'react';
import Ul from "../Ul/Ul";

class Body extends Component {
    render() {
        return (
            <div className="Body" id="body" onClick={this.click.bind(this)}>
                <Ul/>
            </div>
        )
    }
    click(e){
        console.log('body的react合成事件');
        console.log(e.target);
    }
    componentDidMount(){
        document.getElementById('body').addEventListener('click',(e)=>{
            console.log('body的冒泡事件');
            console.log(e.target);
        });
        document.getElementById('body').addEventListener('click',(e)=>{
            console.log('body的捕获事件');
            console.log(e.target);
        },true);
        document.getElementById('body').onclick = function (e) {
            console.log('body的onclick事件');
        };
        document.getElementById('body').onclick = function (e) {
            console.log('body的click事件 啊');
            console.log(e);
        };
    }
}

export default Body;