const chunchArray = require('./chuckingArray')

test('string reverses', () => {
    expect(chunchArray).toBeDefined
});

test('chunk an array of 10 values with length of 2', () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const len = 2;
    const chuckedArr = chunchArray(numbers, len)
    expect (chuckedArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]])
})