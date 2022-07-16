const {suffix} = require("./index.js")

test("testing suffix", () => {
    expect(suffix(10)).toBe("10th")
    expect(suffix(21)).toBe("21st")
})

test("testing suffix teens", () => {
    expect(suffix(11)).toBe("11th")
    expect(suffix(12)).toBe("12th")
})