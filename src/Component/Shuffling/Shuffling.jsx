import React, {Component} from 'react';
import Card from "../Card/Card";
import './Shuffling.css';
import Util from "../util";
const cardList = [
    <Card value='123'/>,
    <Card value='1234'/>,
    <Card value='12345'/>,
    <Card value='123456'/>,

];
class Shuffling extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }
    static defaultProps(){
        return {
            width: '100%',
            startOffset:0,
            startZIndex:1
        }
    }
    click(e){
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidMount(){
        this.setState({
            offset:this.props.startOffset
        });
        // setInterval(this.click.bind(this),1000);
    }
    getLeft(index){
        const startOffset = parseInt(this.props.startOffset);
        const length = cardList.length;
        const thisOffset = (index-this.state.count-startOffset) % length;
        return thisOffset < 0-startOffset
                    ?(length+thisOffset)
                    :thisOffset
    }
    render() {
        const {width} = this.props;
        const startZIndex = parseInt(this.props.startZIndex);
        console.log(startZIndex);
        const widthNum = Util.getNum(width);
        const fix = Util.getFix(width);

        return (
            <div>
                <ul className='clear Shuffling'>
                    {
                        cardList.map((item , index)=>{
                            const leftNum = this.getLeft(index);
                            const nextLeftNum = this.getLeft(index+1);
                            return(
                                <li className='float-left'
                                    style={{
                                        left: leftNum*widthNum+fix,
                                        width: width,
                                        zIndex : startZIndex + nextLeftNum
                                    }}
                                    key={index}>

                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.click.bind(this)}>Shuffling</button>
            </div>
        )
    }
}

export default Shuffling;