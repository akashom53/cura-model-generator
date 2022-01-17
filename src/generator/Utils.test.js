import Utils from "./Utils"

test('should return snake case', () => {
    const ret = Utils.titleToSnakeCase("HelloWorld")
    console.log(ret)
})
