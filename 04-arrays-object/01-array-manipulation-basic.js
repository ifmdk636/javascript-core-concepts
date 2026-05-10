// Creating array
const shopping = ["bread", "pancake", "cake"];
console.log(shopping);

// We can store many datatypes in JS array
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

// Length
console.log(shopping.length);

// Accessing an array
console.log(shopping[0]);

// Modifying an array
shopping[0] = "sausage";
console.log(shopping);

// Adding items
shopping.push("nugget");
console.log(shopping);

// Adding items start on array with shift
shopping.unshift("blueberry");
console.log(shopping);

// Removing items
shopping.pop();
console.log(shopping);

// Accessing every items
for (const grocery in shopping) {
  console.log(grocery);
}
