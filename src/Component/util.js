class Util{
    static getNum(width) {
        return parseFloat(width);
    }
    static getFix(width) {
        return width.replace(/[0-9]/g,'');
    }
}

export default Util;