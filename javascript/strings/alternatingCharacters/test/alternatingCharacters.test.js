const alternatingCharacters = require('../alternatingCharacters');

test('interleaved and repeating string', () => {
    expect(alternatingCharacters('AABAAB')).toBe(2)
})
test('repeated string', () => {
    expect(alternatingCharacters('AAAA')).toBe(3)
    expect(alternatingCharacters('BBBBB')).toBe(4)
})
test('interleaved string with no repetitions', () => {
    expect(alternatingCharacters('ABABABAB')).toBe(0)
    expect(alternatingCharacters('BABABA')).toBe(0)
})
test('string with repetition and different characters', () => {
    expect(alternatingCharacters('AAABBB')).toBe(4)
})
