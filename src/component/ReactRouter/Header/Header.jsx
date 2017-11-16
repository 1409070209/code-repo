import React, {Component} from 'react';

class Header extends Component {
    componentWillUnmount(){
        console.log('Header 组件被卸载');
    }
    componentWillMount(){
        console.log('Header 组件被装载');
    }
    componentDidUpdate(){
        console.log('Header 更新');
    }
    componentDidMount(){
        console.log('Header  Did mount');
    }
    componentWillUpdate(){
        console.log('Header  will update');
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps,nextState);
        return true;
    }
    render() {
        return (
            <div className="Header">
                <p>Header</p>
            </div>
        )
    }
}

export default Header;