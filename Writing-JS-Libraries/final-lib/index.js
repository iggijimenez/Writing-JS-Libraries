// Challenge 1

function suffix(numo) {
    const splits = numo.toString().split("")
    const lastItem = splits[splits.length - 1]
    const secondItem = splits[splits.length - 2]

    if (secondItem == 1) {
        return numo + "th"
    } else {
        if (lastItem == 1) {
            return numo + "st"
        } else if (lastItem == 2){
            return numo + "nd"
        } else if (lastItem == 3) {
            return numo + "rd"
        } else {
            return numo + "th"
        }
    }
}

console.log(suffix(112))