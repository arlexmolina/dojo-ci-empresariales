const calculator = require('./calculator');

describe('add operation', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds 5 + 5 to equal 10', () => {
        expect(calculator.add(5, 5)).toBe(10);
    });
})

describe('subtract operation', () => {
    test('subtract 50 - 40 to equal 10', () => {
        expect(calculator.subtract(50, 40)).toBe(10);
    });
})



