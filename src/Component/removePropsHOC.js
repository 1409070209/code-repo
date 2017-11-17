import React, {Component} from 'react';

function removeProps(props , filer = []) {
    if (filer.length === 0) {
        return props;
    }
    let nextProps = {};
    for (let key in props) {
        const item = props[key];
        if (filer.indexOf(key) !== -1) {
            nextProps[key] = item;
        }
    }
    return nextProps;
}

function removePropsHoc(Input, filer) {
    return class extends Component {

        render(){
            const next = removeProps(this.props , filer);
            return (
                <Input {...next}>
                    {next.children}
                </Input>
            )
        }
    }
}

export default removePropsHoc;