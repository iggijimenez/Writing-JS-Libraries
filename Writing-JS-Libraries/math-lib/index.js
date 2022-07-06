module.exports = {
    goldenRatio: goldenRatio,
    round: round,
    floor: floor,
    ceil: ceil,
    pads: pads,
    degToRad: degToRad,
    radToDeg: radToDeg,
    toDollars: toDollars,
    tax: tax,
    interest: interest,
    mortage: mortage
};


// Challange 1 Golden Ratio

function goldenRatio() {
    return ((61.8 + 38.2) / 61.8)
}

// Challenge 2 Number Methods

function round(x) {
    return Math.round(x)
}

Number.prototype.round = function () {
    return round(this)
}

function floor(x) {
    return Math.floor(x)
}

Number.prototype.floor = function () {
    return floor(this)
}

function ceil(x) {
    return Math.ceil(x)
}

Number.prototype.ceil = function () {
    return ceil(this)
}

// Challenge 3

function pads(numb, left, right) {
    const numStr = numb.toString()
    const splitted = numStr.split(".");

    const leftStr = splitted[0].padStart(left, "0")
    const rightStr = splitted[1].padEnd(right, "0")

    return leftStr + "." + rightStr
}

Number.prototype.pads = function (left, right) {
    return pads(this, left, right)
}

// Challenge 4

function degToRad(deg) {
    return deg * (Math.PI / 180)
}

// Chalenge 5

function radToDeg(radians) {
    return radians * (180 / Math.PI)
}

// Challenge 6

function toDollars(amount) {
    return "$" + amount.toFixed(2)
}

// Challenge 7

function tax(rate) {
    return "$" + (rate + rate * 0.08).toFixed(2)
}

// Challnge 8

function interest(total, year, rate) {
    var interestRate = rate / 100 + 1
    return parseFloat((total * Math.pow(interestRate, year)).toFixed(4))
}

// Challenge 9

function mortage(principal, numberOfPayments, interestRate) {
    return principal * numberOfPayments * (Math.pow(1 + numberOfPayments, interestRate)) / (Math.pow(1 + numberOfPayments, interestRate) - 1)
}
