import { test, expect } from "vitest";
import { findFactorial } from "./main.js";


  // Test for valid input

test("should return 6 if input is 3", () => {
    const expected = 6;
    const actual = findFactorial(3);
    expect(actual).toBe(expected);
  });
  

  // Test for valid input

  test("should return 40320 if input is 8", () => {
    const expected = 40320;
    const actual = findFactorial(8);
    expect(actual).toBe(expected);
  });


  // Test for valid input

  test("should return 87178291200 if input is 14", () => {
    const expected = 87178291200
    const actual = findFactorial(14);
    expect(actual).toBe(expected);
  });


  // Test for input of 0 (valid input)

test("should return 1 if input is 0", () => {
  const expected = 1;
  const actual = findFactorial(0);
  expected(actual).toBe(expected)
});


// Test for invalid (negative number) input

test("should return an error if input is not a number", () => {
  const input = -1;
  expect(() => findFactorial(input)).toThrowError("input must be a positive integer");
});



//Test for an invalid (float) input

  test("should return an error if input is not a number", () => {
    const input = 3.48;
    expect(() => findFactorial(input)).toThrowError("input must be a positive integer");
});


//Test for an invalid (string) input

  test("should return an error if input is not a number", () => {
    const input = "this is not a number";
    expect(() => findFactorial(input)).toThrowError("input must be a positive integer");
});


  //Test for an invalid (boolean) input

test("should return an error if input is not a number", () => {
  const input = false;
  expect(() => findFactorial(input)).toThrowError("input must be a positive integer");
});
