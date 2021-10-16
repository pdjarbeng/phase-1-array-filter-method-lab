// Code your solution here

function findMatching(array, stringz) {
    const matching = array.filter(keyName => keyName.toLowerCase() === stringz.toLowerCase())
    return matching
}

function fuzzyMatch(array, stringz) {
    const match = array.filter(letter => letter.substring(0, 2) === stringz.substring(0, 2))
    return match
}

function matchName(array, stringz) {
    const result = array.filter(key => key.name === stringz)
    return result
}