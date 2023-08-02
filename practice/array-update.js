var fruits = ["Apple", "banana", "orange"];
var bananaIndex = fruits.indexOf("banana");
fruits[bananaIndex] = "Mango";
fruits.pop();
fruits.push("watermelon");
console.log(fruits);
console.log(bananaIndex);
