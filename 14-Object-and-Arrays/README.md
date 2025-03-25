# Challenge #14 - Object and Arrays - Reference VS Copy
<p align="center">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjJ4enVramxndTVjY3hlMmk1YmlzeWltOWRnc24yMGpnOHE1MmhnNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/prtmUSlCuYkpy/giphy.gif" />
</p>

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/14-Object-and-Arrays/)
This project demonstrates the difference between referencing and copying primitive values (strings, numbers, booleans) and complex data structures (arrays, objects) in JavaScript. Understanding this concept is crucial for preventing unintended side effects when manipulating data.

## 🚀 Features
- Explains how primitive values are copied by value.
- Demonstrates how arrays and objects are copied by reference.
- Provides multiple methods to create copies of arrays and objects to avoid unintended modifications.
- Introduces deep cloning for nested objects.

## 🔧 How It Works
### 1. Copying Primitive Values
When we assign `age2 = age`, `age` gets a copy of the value, not a reference. Changing `age` later does not affect `age2`
```js
let age = 100;
let age2 = age;
console.log(age, age2); // 100, 100
age = 200;
console.log(age, age2); // 200, 100
```

### 2. Copying Arrays by Reference
⛔️PROBLEM⛔️ `team` is not a new copy but a reference to `players`. Modifying `team` will also modify `players` because they both point to the same memory location.
```js
const players = ["Harmony", "Sarah", "Ryan", "Poppy"];
const team = players;
console.log(players, team);
```

### 3. Creating True Copy of an Array
All these methods create a new array instead of referencing the original. Modifying the new array does not affect the original one.
#### Using `slice()`
```js
const team2 = players.slice();
```
#### Using `concat()`
```js
const team3 = [].concat(players);
```
#### Using Spread Operator (ES6)
```js
const team4 = [...players];
team4[3] = 'hee haww';
console.log(team4);
```
#### Using `Array.from()`
```js
const team5 = Array.from(players);
```

### 4. Copying Objects by Reference
⛔️PROBLEM⛔️ `captain` is a reference, not a copy. Modifying `captain` also modifies `person`.
```js
const person = {
  name: 'Harmony Mothershed',
  age: 80
};
const captain = person;
captain.number = 99; // Also modifies `person`
```

### 5. Creating a True Copy of an Object
LIMITATION: this only performs a **shallow copy** - nested objects are still referenced!
#### Using `Object.assign()`
```js
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);
```
#### Using Spread Operator (ES6)
```js
const cap3 = {...person};
```

### 6. Deep Copying Objects
`JSON.parse(JSON.stringify(obj))` creates a deep copy. This ensures nested objects are not referenced. However, this method does not preserve functions or special object types (e.g., `Date`).
```js
const harmony = {
  name: "Harmony",
  age: 100,
  social: {
    instagram: "@dehsrehtom",
    twitter: "@dehsrehtom",
  },
};

const dev2 = JSON.parse(JSON.stringify(harmony));
```

## Conclusion
- **Primitive values** are copied by value.
- **Arrays and objects** are copied by reference unless explicitly cloned.
- **Shallow copies** (`Object.assign()`/spread operator) do not copy nested objects.
- **Deep copies** (`JSON.parse(JSON.stringify(obj))`) ensure full duplication but have limitations.
  
  <br>
Understanding this concept helps prevent unintended data modifications and ensures safer state management in JavaScript applications!
