// Object
// object in array 1
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// common methods in array
// 1. Filter -> filtering nilai
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.log(filteredItems);

// 2. map -> mencetak nilai
const mapItems = items.map((item) => {
  return item.price;
});
console.log(mapItems);

// 3. find -> menemukan value di dalam objek
const foundItem = items.find((item) => {
  return item.name == "Computer";
});
console.log(foundItem);

// forEach -> mencetak nilai array
items.forEach((item) => {
  console.log(item.price);
});

// reduce -> untuk menjumlahkan nilai yang ada di dalam array
const total = items.reduce((currentValue, item) => {
  return item.price + currentValue;
}, 0);
console.log(total);

// object in array 2
const items2 = [
  { name: "Ibrahim", surname: "mahardika", age: 20 },
  { name: "rizky", surname: "raffandy", age: 20 },
];

// accessing object
console.log(items2[0].name);
console.log(items2[1].age);
