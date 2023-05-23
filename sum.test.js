const { sum, substract, capitalize } = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// const { substract } = require("./sum");

test("substracts 5 - 3 to equal 2", () => {
    expect(substract(5, 3)).toBe(2);
});

test("change first character of 'abc' to equal 'A'", () => {
    expect(capitalize("abc")).toBe("Abc");
});
