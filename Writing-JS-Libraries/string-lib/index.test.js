const {capitalize, allCaps, capitalizeWords, removeExtraSpaces, kebobCase, snakeCase, camelCase, shift, makeHastTag, isEmpty} = require("./index.js")

test("testing capitalize", () => {
    expect(capitalize("ignacio")).toBe("Ignacio")
})

test("testing allCaps", () => {
    expect(allCaps("ignacio")).toBe("IGNACIO")
})

test("testing capitalizeWords", () => {
    expect(capitalizeWords("ignacio jimenez")).toBe("Ignacio Jimenez")
})

test("testing removeExtraSpaces", () => {
    expect(removeExtraSpaces("Ignacio     Jimenez ")).toBe("Ignacio Jimenez")
})

test("testing kebobase", () => {
    expect(kebobCase("Ignacio Jimenez")).toBe("ignacio-jimenez")
})

test("testing snakeCase", () => {
    expect(snakeCase("Ignacio Jimenez")).toBe("ignacio_jimenez")
})

test("testing camelCase", () => {
    expect(camelCase("Ignacio Jimenez")).toBe("ignacioJimenez")
})


test("testing shift", () => {
    expect(shift("Ignacio")).toBe("gnacioI")
})

test("testing makeHasTag", () => {
    expect(makeHastTag("Ignacio")).toBe("#Ignacio")
})

test("testing isEmpty", () => {
    expect(isEmpty("    ")).toBe(true)
})