# Challenge #4 - Array Cardio Day 1
<p align="center">
  <img src="https://media.giphy.com/media/XaueAhELecdpTsp9BB/giphy.gif?cid=790b76113ztrnb3eaikfa7dxskkgmtn258wls4byzwiru861&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
</p>

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/04-Array-Cardio-Day-1/)
This is an exercise to strengthen JavaSript skills using array methods! ***So be sure to open your JavaScript console when going to the demo.***

## 🚀 Features
- **Filter** - Find inventors born in the 1500s
- **Map** - Extract first and last names from an array
- **Sort** - Order inventors by birthdate and lifespan
- **Reduce** - Calculate total years lived by all inventors
- **Alphabetical Sorting** - Sort names by last names
- **Counting Elements** - Count occurences of transportation methods

## 🔧 How It Works
### 1. Open the Console
- Open the project in a browser
- Press `F12` to open the Developer Console
- Explore the array exercise and outputs!
  
### 2. Array Methods in Action

#### `filter()` - Find inventors born in 1500s
The `filter()` method creates a new array containing only inventors born between the years 1500 and 1600. The callback function checks whether each inventor's birth year falls within the range, and only those who qualify are included in the output.
```javascript
const fifteens = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteens);
```
<br>

#### `map()` - Get full names of inventors
The `map()` method transforms the array of inventor objects into an array of full names by concatenating their first and last names.
```javascript
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullName);
```
<br>

#### `sort()` - Order inventors by birthdate
The `sort()` method orders the array of inventors by birth year, from the oldest to youngest. The callback function compares two inventors at a time and rearranges them accordingly. A return value of `1` means `a` is placed before `b`, while `-1` means `a` comes before `b`.
```javascript
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);
```
<br>

#### `reduce()` - Sum of all years lived
The `reduce()` method calculates the total number of years all inventors lived. It iterates through the array, computing the lifespan of each inventor and adding it to a running total. The initial value of `total` is `0`.
```javascript
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);
```
<br>

#### Sort people alphabetically by last name
Here, `sort()` is used to organize an array of people's names alphabetically by last name. The `split(', ')` method separates last names from first names, allowing for a proper comparison and sorting.
```javascript
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

```
<br>

#### Count transportation methods
The `reduce(0` method counts how many times each type of transportation appears in the array. It starts with an empty object `{}` and increments the count for each type of transportation as it loops through the array.
```javascript
const transportation = data.reduce(function(obj, item) {
  if (!obj[item]){
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);

```
