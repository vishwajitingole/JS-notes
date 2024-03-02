// String
const myStr: string = "My Name";

// Number
const myNum: number = 123;

// Boolean
const myBool: boolean = true;

// Array of Strings
const myStrArr: string[] = ["One", "Two", "Three"];

// Array of Numbers
const myNumArr: number[] = [1, 2, 3];

// Object with specific structure
const myObj: { name: string; age: number } = { name: "name", age: 100 };

// Object with 'any' type (not recommended)
const myAnyObj: any = { name: "name", age: 100 };

// Undefined
const notDefined: undefined = undefined;

// Program with TypeScript
const num1: number = 45;
const num2: number = 55;
const sumTwo = (a: number, b: number): number => {
  return a + b;
};
console.log(sumTwo(num1, num2));

// Interface in TypeScript
interface ISumTwo {
  (num1: number, num2: number): number;
}
const sumTwoFunc: ISumTwo = (a, b) => {
  return a + b;
};
console.log(sumTwoFunc(num1, num2));
