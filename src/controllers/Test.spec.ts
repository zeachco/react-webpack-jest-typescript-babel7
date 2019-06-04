import { Test } from "./Test";

test('Test', () => {
    const test = new Test('alright');
    expect(test.greet()).toBe('TestClass: alright');
});