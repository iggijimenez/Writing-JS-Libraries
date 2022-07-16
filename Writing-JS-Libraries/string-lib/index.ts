module.exports = {
    capitalize, allCaps, capitalizeWords, removeExtraSpaces, kebobCase, snakeCase, camelCase, shift, makeHashTag, isEmpty
}

// Challenge 1

function capitalize(str:string):string {
    const first = str[0].toUpperCase()
    const second = str.slice(1)
    return first + second
}

// Challenge 2

function allCaps(str:string):string {
    return str.toUpperCase()
}

// Challenge 3

function capitalizeWords(str:string):string {
    return str.split(" ").map(word => capitalize(word)).join(" ")
}

// Challenge 4 working on this

function removeExtraSpaces(str:string):string { //["Ignacio", "", "", "", "Jimenez"]
    const tStr = str.trim() //this is removing the first and last empty spaces 
    const words = tStr.split(" ") // this splits the remaining words into each having its own index
    // console.log(words, "*")

    const isEmpty = words.filter(word => "" != word)
    const joined = isEmpty.join(" ")
    return joined
}

// Challenge 5

function prekebobCase(test:string, cStr:string):string{
    let tStr = test.trim()
    console.log(tStr)
    tStr = tStr.toLowerCase()
    tStr = tStr.split(" ")
    tStr = tStr.join(cStr)
    return tStr
}



function kebobCase(str:string):string {
    const tStr = prekebobCase(str, "-")
    return tStr
}

// Challenge 6

function snakeCase(str:string):string {
    const tStr = prekebobCase(str, "_")
    return tStr
}

// Challenge 7

function camelCase(str:string):string {
    var tStr = str.split(" ")
    tStr = tStr.map(word => capitalize(word)).join("")
    var pStr = tStr[0].toLowerCase() // lowercases the first letter of the sentence
    tStr = tStr.split(tStr[0]) // splits the word after the first letter
    const eStr = pStr + tStr.join("") // concantes the lowercase letter with the spit second part while joining the it
    return eStr
}

// Challenge 8

function shift(str:string):string {
    var tStr = str.split("")
    tStr = tStr.map(word => word).join("")
    var pStr = tStr[0] // grabs the first character
    tStr = tStr.split(tStr[0]) // splits the word after the first letter
    const eStr = tStr.join("") + pStr // concantes the lowercase letter with the spit second part while joining the it
    return eStr
}

// Challenge 9

function makeHashTag(str:string):string[] {
    const tStr = str.split(" ")

    tStr.sort((a, b) => b.length - a.length)
    const nArr = tStr.slice(0, 3).map((str) => "#" + str)

    return nArr
}

// Challenge 10

function isEmpty(str:string):boolean {
    const tStr = str.split("")

    const emptyCharacter = (currentValue) => currentValue == " "
    return tStr.every(emptyCharacter)
}





