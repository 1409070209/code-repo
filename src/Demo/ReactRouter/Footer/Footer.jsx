import React, {Component} from 'react';

class Footer extends Component {
    componentWillUnmount(){
        console.log('Footer 组件被卸载');
    }
    componentWillMount(){
        console.log('Footer 组件被装载');
    }
    componentDidUpdate(){
        console.log('Footer 更新');
    }
    componentDidMount(){
        console.log('Footer  Did mount');
    }
    componentWillUpdate(){
        console.log('Footer  will update');
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
            <div className="Footer">
                <p>Footer</p>
            </div>
        )
    }
}

export default Footer;