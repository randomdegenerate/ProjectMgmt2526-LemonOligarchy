const maths = require("./maths")

test('sum of two and two is four', () => {
   expect(maths.sum(2,2)).toBe(4)
})

test('three multiplied by four is twelve', () => {
    expect(maths.multiply(3,4)).toBe(12)
})

test('five minus four is 1', () => {
    expect(maths.subtract(5,4)).toBe(1)
})

test('3 squared should be 9!', () => {
    expect(maths.square(3)).toBe(9)
})

/*test('Pi is a cake!', () => {
    expect(maths.PI).toEqual('cake')
})*/
