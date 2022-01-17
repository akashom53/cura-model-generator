
import obj from "./fixture.json";
import Generator from "./Generator";

test('1 level', () => {
    const ret = Generator.generateDart(JSON.stringify(obj), "Test")
    console.log(ret.reverse()[0].generateDartCode())
})