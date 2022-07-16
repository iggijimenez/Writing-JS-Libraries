// Challange 1 Golden Ratio

function goldenRatio():number {
    return ((61.8 + 38.2) / 61.8)
}

// Challenge 2 Number Methods

function round(x):number {
    return Math.round(x)
}

Number.prototype.round = function () {
    return round(this)
}

function floor(x):number {
    return Math.floor(x)
}

Number.prototype.floor = function () {
    return floor(this)
}

function ceil(x):number {
    return Math.ceil(x)
}

Number.prototype.ceil = function () {
    return ceil(this)
}

// Challenge 3

function pads(numb:number, left:number, right:number):string {
    const numStr = numb.toString()
    const splitted = numStr.split(".");

    const leftStr = splitted[0].padStart(left, "0")
    const rightStr = splitted[1].padEnd(right, "0")

    return leftStr + "." + rightStr
}

Number.prototype.pads = function (left:number, right:number):string {
    return pads(this, left, right)
}

// Challenge 4

function degToRad(deg:number):number {
    return deg * (Math.PI / 180)
}

// Chalenge 5

function radToDeg(radians:number):number {
    return radians * (180 / Math.PI)
}

// Challenge 6

function toDollars(amount:number):string {
    return "$" + amount.toFixed(2)
}

// Challenge 7

function tax(rate:number):string {
    return "$" + (rate + rate * 0.08).toFixed(2)
}

// Challnge 8

function interest(total:number, year:number, rate:number):number {
    var interestRate = rate / 100 + 1
    return parseFloat((total * Math.pow(interestRate, year)).toFixed(4))
}

// Challenge 9

function mortage(principal:number, numberOfPayments:number, interestRate:number):number {
    return principal * numberOfPayments * (Math.pow(1 + numberOfPayments, interestRate)) / (Math.pow(1 + numberOfPayments, interestRate) - 1)
}
