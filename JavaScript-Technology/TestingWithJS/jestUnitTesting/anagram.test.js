const isAnagram = require('./anagram');

test('is Anagram function exists', () =>{
    expect(typeof isAnagram).toEqual('function');
})

test('cinema is an Anagram of "iceman"', () =>{
    expect(isAnagram('cinema','iceman')).toBeTruthy();
})