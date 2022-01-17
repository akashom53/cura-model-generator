import { Templates } from "./template";
import Utils from "./Utils";


class DartClass {
    constructor(name = "", props = [], fileName, imports) {
        this.name = name
        this.props = props
        this.fileName = fileName
        if (!fileName) {
            this.fileName = Utils.titleToSnakeCase(name)
        }
        this.imports = imports
    }

    _convertToDartType(prop) {
        const jsType = prop['type']
        switch (jsType) {
            case 'string':
                return 'String'
            case 'int':
            case 'double':
                return jsType
            case 'boolean':
                return 'bool'
            case 'object':
                return Utils.snakeToTitleCase(prop['key'])
            case 'arr':
                const arr = prop['val']
                if (arr.length === 0) return 'List<dynamic>'
                const innerProp = arr[0]
                const innerType = Utils.getPropType(innerProp)
                if (innerType === 'object') {
                    return `List<${Utils.snakeToTitleCase(prop['key'])}>`
                } else {
                    return `List<${this._convertToDartType({ key: prop['key'], type: innerType, val: innerProp })}>`
                }
            case 'null':
            default:
                return 'dynamic'
        }
    }


    static generateClass(name, obj, onInnerClass, fileName) {
        const { props, imports } = DartClass._buildPropsAndImports(obj, onInnerClass)
        return new DartClass(name, props, fileName, imports)
    }


    static _buildPropsAndImports = (obj, onInnerClass) => {
        let props = []
        let imports = []
        for (let key in obj) {
            const type = Utils.getPropType(obj[key])
            const val = obj[key]
            if (type === 'arr') {
                if (val.length !== 0) {
                    const innerObj = val[0]
                    const innerType = Utils.getPropType(innerObj)

                    if (innerType === 'object') {
                        const innerClass = DartClass.generateClass(Utils.snakeToTitleCase(key), innerObj, onInnerClass, key)
                        imports.push(key)
                        onInnerClass(innerClass)
                    }
                }
            }
            else if (type === 'object') {
                const innerClass = DartClass.generateClass(Utils.snakeToTitleCase(key), obj[key], onInnerClass, key)
                imports.push(key)
                onInnerClass(innerClass)
            }
            props.push({
                key, type, val: obj[key]
            })
        }
        return { props, imports }
    }

    generateDartCode = () => {
        let classTemplate = Templates.classTemplate
        let defineProps = []
        let constructorProps = []
        let copyParamProps = []
        let copyBodyProps = []
        let equatableProps = []

        let dartImports = this.imports.map(
            (fileName) => Templates.importTemplate.replaceAll(Templates.fileName, fileName)
        )

        for (let prop of this.props) {
            let propDefinitionTemlpate = Templates.propDefinitionTemlpate
            defineProps.push(propDefinitionTemlpate
                .replaceAll(Templates.propType, this._convertToDartType(prop))
                .replaceAll(Templates.name, prop['key']))
            let propConstructorParamTemlpate = Templates.propConstructorParamTemlpate
            constructorProps.push(propConstructorParamTemlpate
                .replaceAll(Templates.name, prop['key']))

            let propCopyParamTemplate = Templates.propCopyParamTemplate
            copyParamProps.push(propCopyParamTemplate
                .replaceAll(Templates.propType, this._convertToDartType(prop))
                .replaceAll(Templates.name, prop['key']))

            let propCopyBodyTemplate = Templates.propCopyBodyTemplate
            copyBodyProps.push(propCopyBodyTemplate
                .replaceAll(Templates.name, prop['key']))

            equatableProps.push(prop['key'])
        }
        return classTemplate
            .replaceAll('{{name}}', this.name)
            .replaceAll(Templates.defineProps, defineProps.join('\n\t'))
            .replaceAll(Templates.constructorProps, constructorProps.join('\n\t\t'))
            .replaceAll(Templates.copyParamProps, copyParamProps.join('\n\t\t'))
            .replaceAll(Templates.copyBodyProps, copyBodyProps.join('\n\t\t\t\t'))
            .replaceAll(Templates.equatableProps, equatableProps.join(',\n\t\t\t\t'))
            .replaceAll(Templates.imports, dartImports.join('\n'))
    }
}


export default DartClass