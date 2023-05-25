const { capitalize, reverseString, calculator, caesarCipher, arrayAnalysis } = require("./functions");

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


test("CAESAR CIPHER TEST 1", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});
test("CAESAR CIPHER TEST 2", () => {
  expect(caesarCipher("what a wonderful day", 3)).toBe("zkdw d zrqghuixo gdb");
});
test("CAESAR CIPHER TEST 3", () => {
  expect(caesarCipher("i really need to sleep early tonight!", 6)).toBe(
    "o xkgrre tkkj zu yrkkv kgxre zutomnz!"
  );
});
test("CAESAR CIPHER TEST 4", () => {
  expect(caesarCipher("going to work", 11)).toBe("rztyr ez hzcv");
});

test("ARRAY ANALYSIS TEST 1", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("ARRAY ANALYSIS TEST 2", () => {
  expect(arrayAnalysis([1, 1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  });
});

test("ARRAY ANALYSIS TEST 3", () => {
  expect(arrayAnalysis([5, 1, 2, 3, 7, 1])).toEqual({
    average: 19 / 6,
    min: 1,
    max: 7,
    length: 6,
  });
});

test("ARRAY ANALYSIS TEST 4", () => {
  expect(arrayAnalysis([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});
