import React, {Component} from 'react';

class Ul extends Component {
    render() {
        return (
            <div className="Ul" id="Ul" onClick={this.click.bind(this)}>
                <li id='Li' onClick={this.clickLi.bind(this)}>Hello World</li>
            </div>
        )
    }
    click(e){
        console.log('Ul的react合成事件');
        console.log(e.target);
    }
    clickLi(e) {
        // e.nativeEvent.stopPropagation();
        console.log('li的react合成事件');
        console.log(e.target);
    }

    componentDidMount(){
        document.getElementById('Ul').addEventListener('click',(e)=>{
            console.log('Ul的冒泡事件');
            console.log(e.target);
        });
        document.getElementById('Ul').addEventListener('click',(e)=>{
            console.log('Ul的捕获事件');
            console.log(e.target);
        },true);

        document.getElementById('Ul').onclick = function (e) {
            console.log('Ul的click事件 啊');
            console.log(e);
        };

        document.getElementById('Li').addEventListener('click',(e)=>{
            console.log('li的冒泡事件');
            console.log(e.target);
        });
        document.getElementById('Li').addEventListener('click',(e)=>{
            console.log('li的捕获事件');
            console.log(e.target);
        },true);
        
        document.getElementById('Li').onclick = function (e) {
            console.log('Li的click事件 啊');
            console.log(e);
        };
    }
}

export default Ul;