/* An anagram is a word that results of the transposition of all its letters of another word.
A word is an anagram of another one if:
both of them have the same letters with same number of aparitions, but in different order.*/
function isAnagram(word1, word2) {
    return sanitizeWord(word1) === sanitizeWord(word2)
}

function sanitizeWord(word) {
    return word.toLowerCase().split('').filter(l => l !== ' ').sort().join('')
}

//same letters with different number of aparitions, but in different order
function isAnagramVariant(word1, word2) {
    let wordAnalysis1 = analyzeWord(sanitizeWord(word1));
    let wordAnalysis2 = analyzeWord(sanitizeWord(word2));

    return Object.keys(wordAnalysis1).join('') == Object.keys(wordAnalysis2).join('')
}

function analyzeWord(word) {
    let wordAnalysis = {}
    word.split('').forEach(element => {
        wordAnalysis[element]++
    });

    return wordAnalysis
}

module.exports = {
    isAnagram, isAnagramVariant
}