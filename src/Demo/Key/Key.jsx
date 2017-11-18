import React, {Component} from 'react';

class Key extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="Key">
                <ul className="clear">
                    {
                        children.map((item , index)=>{
                            //如果把下面的代码换成普通的 <li key={index}>
                            //将会执行依次mount和四次update
                            return (
                                <li key={item.props.index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Key;