class Utils {
	static isInt = (value) => {
		var x;
		return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
	}

	static snakeToTitleCase = (str) => {
		return str
        .split('_')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join('')
	}

    static titleToSnakeCase = (str = "") => {
        return str && str.match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                            .map(s => s.toLowerCase())
                            .join('_');
    }

	static getPropType = (val) => {
        const type = typeof val
        switch (type) {
            case 'number':
                return Utils.isInt(val) ? 'int' : 'double'
            case 'object':
                if (val === null) { return 'null' }
                else if (Array.isArray(val)) { return 'arr' }
                else { return 'object' }
            default:
                return type
        }
    }
}

export default Utils