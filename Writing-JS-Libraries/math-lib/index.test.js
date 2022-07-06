const { goldenRatio, round, floor, ceil, pads, degToRad, radToDeg, toDollars, tax, interest, mortage} = require("./index.js")

test("testing goldenRatio", () => {
    expect(goldenRatio()).toBe(1.6181229773462784)
})

//FIX this
test("testing round", () => {
    expect(9.99.round()).toBe(10)
})

test("testing floor", () => {
    expect(9.99.floor()).toBe(9)
})

test("testing ceil", () => {
    expect(9.99.ceil()).toBe(10)
})

test("testing pads", () => {
    const numb = 9.99
    const num2 = 1.1
    expect(numb.pads(4, 4)).toBe("0009.9900")
    expect(num2.pads(2, 1)).toBe("01.1")
})

test("testing degToRad", () => {
    expect(degToRad(45)).toBe(0.7853981633974483)
})

test("testing redToDeg", () => {
    expect(radToDeg(0.785)).toBe(44.97718691776962)
})

test("testing toDollars", () => {
    expect(toDollars(3.9)).toBe("$3.90")
})

test("testing tax", () => {
    expect(tax(10)).toBe("$10.80")
})

test("testing interest", () => {
    expect(interest(10, 10, 8)).toBe(21.5892)
})

test("testing mortage", () => {
    expect(mortage(10, 10, 8)).toBe(100.00000046650739)
})