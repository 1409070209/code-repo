function removeProps(props, filer) {
    if (filer === null || filer.length === 0) {
        return props;
    }
    let nextProps = {};
    for (let key in props) {
        const item = props.key;
        if (filer.indexOf(item) === -1) {
            nextProps.key = item;
        }
    }
    return nextProps
}

export default removeProps;