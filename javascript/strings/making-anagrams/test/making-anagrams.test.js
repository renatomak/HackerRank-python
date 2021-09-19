const makeAnagram = require('../making-anagrams');

test('test with an empty string', () => {
    expect(makeAnagram('', 'abc')).toBe(3)
    expect(makeAnagram('abc', '')).toBe(3)
})

test('test with two identical strings', () => {
    expect(makeAnagram('abc', 'abc')).toBe(0)
})

test('unrepeated strings', () => {
    expect(makeAnagram('cde', 'abc')).toBe(4)
    expect(makeAnagram('showman', 'woman')).toBe(2)
})

test('testing strings with repetition', () => {
    expect(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')).toBe(30)
})

test('first string longer than the second', () => {
    expect(makeAnagram('jxwtrhvujlmrpdoqbisbwhmgpmeoke', 'fcrxzwscanmligyxyvym')).toBe(30)
})

test('first string smaller than the second', () => {
    expect(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')).toBe(30)
})