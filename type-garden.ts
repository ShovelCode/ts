// Defining variables with explicit data types
let name: string = "John";
let age: number = 30;
let isStudent: boolean = true;
let favoriteFruits: string[] = ["apple", "banana", "cherry"];
let person: { name: string, age: number } = { name: "Alice", age: 25 };

// Function with parameter types and return type
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Enum to represent days of the week
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// Union types
let result: string | number;
result = "Success";
result = 42;

// Type aliases
type Point = { x: number, y: number };
let coordinates: Point = { x: 10, y: 20 };
