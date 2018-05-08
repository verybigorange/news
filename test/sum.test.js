const sum = require('../src/utils/sum');

test('test 1+2 的结果',() =>{
    expect(sum(1,2)).toBe(3)
})