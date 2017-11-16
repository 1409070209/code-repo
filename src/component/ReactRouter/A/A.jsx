import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class A extends Component {
    componentWillMount(){
        console.log('A 组件被装载');
    }
    componentWillUnmount(){
        console.log('A 组件被卸载');
    }
    componentDidUpdate(){
        console.log('A 更新');
    }
    componentDidMount(){
        console.log('A  Did mount');
    }
    componentWillUpdate(){
        console.log('A  will update');
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
            <div className="A">
                <p>A</p>
                <br/>
                <Link to="/B">Link去往B</Link><br/>
                <a href="/#/B">a去往B</a>
                <br/>
                <a href="/B" onClick={this.run.bind(this)}>browser a去往B</a>
            </div>
        )
    }
}

export default A;