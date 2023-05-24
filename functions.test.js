const { capitalize, reverseString, calculator } = require("./functions");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });
// test("subtracts 5 - 3 to equal 2", () => {
//     expect(subtract(5, 3)).toBe(2);
// });


test("change first character of 'abc' to equal 'A'", () => {
    expect(capitalize("abc")).toBe("Abc");
});

test("reverse 'abc' to equal 'cba'", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("adds 1 + 2 to equal 3", () => {
  expect(calculator(1, "+", 2)).toBe(3);
});
test("subtracts 5 - 3 to equal 2", () => {
  expect(calculator(5, "-", 3)).toBe(2);
});
test("multiplies 2 * 5 to equal 10", () => {
  expect(calculator(2, "*", 5)).toBe(10);
});
test("divides 10 - 2 to equal 5", () => {
  expect(calculator(10, "/", 2)).toBe(5);
});