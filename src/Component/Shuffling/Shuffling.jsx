import React, {Component} from 'react';
import Card from "../Card/Card";
import './Shuffling.css';
import Util from "../util";


class Shuffling extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }
    static defaultProps = {
            width: '100%',
            startOffset:0,
            startZIndex:1,
            className: '',
            onSlide: ()=>{}
    };
    click(e){
        this.setState({
            count:this.state.count+1
        });
        const index = (this.props.startOffset - this.state.count) % this.props.children.length
        this.props.onSlide(index);
    }
    componentDidMount(){
        this.setState({
            offset:this.props.startOffset
        });
        // setInterval(this.click.bind(this),1000);
    }
    getLeft(index , length){
        const startOffset = parseInt(this.props.startOffset);
        const thisOffset = (index-this.state.count-startOffset) % length;
        return thisOffset < 0-startOffset
                    ?(length+thisOffset)
                    :thisOffset
    }
    render() {
        const {width} = this.props;
        const startZIndex = parseInt(this.props.startZIndex);
        const widthNum = Util.getNum(width);
        const fix = Util.getFix(width);

        const cardList = this.props.children;
        return (
            <div>
                <ul className={this.props.className+' clear Shuffling '}>
                    {
                        cardList.map((item , index)=>{
                            const leftNum = this.getLeft(index , cardList.length);
                            const nextLeftNum = this.getLeft(index+1,cardList.length);
                            return(
                                <li className='float-left'
                                    style={{
                                        left: leftNum*widthNum+fix,
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