
// Challenge 1

function capitalize(str) {
    const first = str[0].toUpperCase()
    const second = str.slice(1)
    return first + second
}

// Challenge 2

function allCaps(str) {
    return str.toUpperCase()
}

// Challenge 3

function capitalizeWords(str) {
    return str.split(" ").map(word => capitalize(word)).join(" ")
}

// Challenge 4 working on this

function removeExtraSpaces(str) {
    const tStr =  str.trim() //this is removing the first and last empty spaces 
    const words =  tStr.split(" ") // this splits the remaining words into each having its own index
    // console.log(words)
    for (word in words) {
        if (word == " ") {
            console.log(word)
        } else {
            console.log(word)
        }
        // console.log(words)
        // words.join()
    }
    // console.log(words)



    // if(!str.includes(" ")){          //checking weather array contain the id
    //     arr.push(" ");               //adding to array because value doesnt exists
    // }else{
    //     arr.splice(arr.indexOf(" "), 1);  //deleting
    // }

    // return str.replace(/\s+/g, '')
}

// Challenge 5

function kebobCase(str) {
    const tStr =  str.trim()
    return tStr
}

console.log(kebobCase("        hello          my name is iggi"))