import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class B extends Component {
    componentWillUnmount(){
        console.log('B 组件被卸载');
    }
    componentWillMount(){
        console.log('B 组件被装载');
    }
    componentDidUpdate(){
        console.log('B 更新');
    }
    componentDidMount(){
        console.log('B  Did mount');
    }
    componentWillUpdate(){
        console.log('B  will update');
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps,nextState);
        return true;
    }
    run(e){
        e.preventDefault();
        window.history.pushState({},'',e.target.href);
        window.history.pushState({},'',e.target.href);
        window.history.back();
    }
    render() {
        return (
            <div className="B">
                <p>B</p>
                <br/>
                <Link to="/A">Link去往A</Link><br/>
                <a href="/#/A">a去往A</a>
                <br/>
                <a href="/A" onClick={this.run.bind(this)}>browser a去往A</a>
            </div>
        )
    }
}

export default B;