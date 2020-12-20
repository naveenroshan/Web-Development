const functions = require('./functions');

//test one
//test for be positive part
test('add', () => {
    expect(functions.add(2, 2)).toBe(4)
});

//test two
//test for to be not negative.
// test('Not equal', () => {
//     expect(functions.add(2, 2)).not.toBe(4)
// });

//test 3
//test for the null value
test('should be Null', () => {
    expect(functions.isNull()).toBeNull();
});

//test 4
//test for the check value
test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

//test 5
//test for the checking the user name
test('user should be naveen roshan', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'naveen',
        lastName: 'roshan'
    });
});

//test 6
//test the less than or greater than
test('should be under  1600', () => {
    const load1 = 200;
    const load2 = 500;
    expect(load1 + load2).toBeLessThan(1600);
  //  expect(load1 + load2).toBeGreaterThan(1600);
});

//test 7
//testing regular expression the name "team should not have 'I'"
test('There should not be I in team', () => {
    expect('team').not.toMatch(/I/);
});

//test 8
//testing the array
test('admin should be in the username', () => {
    userName = ['ram', 'gokul', 'admin']
    expect(userName).toContain('admin');
});

//test 9
//testing real api demo
test('user fetched name is Leanne Graham', () => {
   expect.assertions(1);
   return functions.fetchUser()
   .then(data =>{
       expect(data.name).toEqual('Leanne Graham')
   })
});

//test 10
//testing real api demo with asyn wait
test('user fetched name is Leanne Graham by async wait ', async () => {
   expect.assertions(1);
   const data  = await functions.fetchUser();
   expect(data.name).toEqual('Leanne Graham')
});