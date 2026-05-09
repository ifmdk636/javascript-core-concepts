const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// 1. Filtered
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.log(filteredItems);

// 2. map
const mapItems = items.map((item) => {
  return item.price;
});
console.log(mapItems);

// 3. find
const foundItem = items.find((item) => {
  return item.name == "Computer";
});
console.log(foundItem);
