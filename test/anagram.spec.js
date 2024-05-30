const { describe, it } = require('mocha');
const { expect } = require('chai');

const { isAnagram, isAnagramVariant } = require('../src/interview/anagram')

describe('Verifies Anagram function', () => {
    it('Should return true if both words have the same letters with same number of aparitions', () => {
        expect(isAnagram("The alias men", "Alan Smithee")).to.true;
    })
})

describe('Verifies Anagram variant function', () => {
    it('Should return true if both words have the same letters with diferent number of aparitions', () => {
        expect(isAnagramVariant("The alias men", "Alan Smitheei")).to.true;
    })
})