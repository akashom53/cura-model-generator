import DartClass from "./DartClass"

class Generator {
    static generateDart = (json, modelName) => {
        this.classes = []
        // try {
        const obj = JSON.parse(json)
        this.classes.push(DartClass.generateClass(modelName, obj, (innerClass) => this.classes.push(innerClass)))
        // let dartClassesCode = this.classes.map((dartClass) => {
        //     return {
        //         code: dartClass.generateDartCode(),
        //         fileName: dartClass.name,
        //     }
        // })
        return this.classes
    }



}



export default Generator