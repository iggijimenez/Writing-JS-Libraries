module.exports = {
    capitalize: capitalize,
    allCaps: allCaps,
    capitalizeWords: capitalizeWords,
    removeExtraSpaces: removeExtraSpaces,
    kebobCase: kebobCase,
    snakeCase: snakeCase,
    camelCase: camelCase,
    shift: shift,
    makeHashTag: makeHashTag,
    isEmpty: isEmpty
};
// Challenge 1
function capitalize(str) {
    var first = str[0].toUpperCase();
    var second = str.slice(1);
    return first + second;
}
// Challenge 2
function allCaps(str) {
    return str.toUpperCase();
}
// Challenge 3
function capitalizeWords(str) {
    return str.split(" ").map(function (word) { return capitalize(word); }).join(" ");
}
// Challenge 4 working on this
function removeExtraSpaces(str) {
    var tStr = str.trim(); //this is removing the first and last empty spaces 
    var words = tStr.split(" "); // this splits the remaining words into each having its own index
    // console.log(words, "*")
    var isEmpty = words.filter(function (word) { return "" != word; });
    var joined = isEmpty.join(" ");
    return joined;
}
// Challenge 5
function prekebobCase(str, cStr) {
    var tStr = str.trim();
    tStr = tStr.toLowerCase();
    tStr = tStr.split(" ");
    tStr = tStr.join(cStr);
    return tStr;
}
function kebobCase(str) {
    var tStr = prekebobCase(str, "-");
    return tStr;
}
// Challenge 6
function snakeCase(str) {
    var tStr = prekebobCase(str, "_");
    return tStr;
}
// Challenge 7
function camelCase(str) {
    var tStr = str.split(" ");
    tStr = tStr.map(function (word) { return capitalize(word); }).join("");
    var pStr = tStr[0].toLowerCase(); // lowercases the first letter of the sentence
    tStr = tStr.split(tStr[0]); // splits the word after the first letter
    var eStr = pStr + tStr.join(""); // concantes the lowercase letter with the spit second part while joining the it
    return eStr;
}
// Challenge 8
function shift(str) {
    var tStr = str.split("");
    tStr = tStr.map(function (word) { return word; }).join("");
    var pStr = tStr[0]; // grabs the first character
    tStr = tStr.split(tStr[0]); // splits the word after the first letter
    var eStr = tStr.join("") + pStr; // concantes the lowercase letter with the spit second part while joining the it
    return eStr;
}
// Challenge 9
function makeHashTag(str) {
    var tStr = str.split(" ");
    tStr.sort(function (a, b) { return b.length - a.length; });
    var nArr = tStr.slice(0, 3).map(function (str) { return "#" + str; });
    return nArr;
}
// Challenge 10
function isEmpty(str) {
    var tStr = str.split("");
    var emptyCharacter = function (currentValue) { return currentValue == " "; };
    return tStr.every(emptyCharacter);
}
