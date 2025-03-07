# Challenge #7 - Array Cardio Day 2
<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjg0cGQwZDh4NWRvZm93ZjM4MHVrOXp2YzBwNjZ3N3l1YTRwbjhscCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d314tXXrfzPGqZlnMu/giphy.gif" />
</p>

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/07-Array-Cardio-Day-2/)
Part 2 hands-on JavaSCript project that explores various array methods, including `some()`, `every()`, `find()`, and `findIndex()`. Open your browser console (`F12` → Console) to see the results in action!

## 🚀 Features
- **Check for Adults** - Uses `some()` and `every()` to check if at least one or all people are 19 or older.
- **Find Specific Data** - Uses `find()` to locate an object in an arry by ID.
- **Find and Remove an Item** - Uses `findIndex()` and `slice()` to delete an object from an array.

## 🔧 How It Works
### Checking If At Least One Person is 19+
Uses `some()` to check if any person in the `people` array is 19 or older:
```javascript
const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);
console.log({ isAdult });
```

### Checking If Everyone is 19+
Uses `every()` to check if all people in the `people` array are 19 or older:
```javascript
const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19);
console.log({ allAdults });
```

### Finding a Comment by ID
Uses `find()` to locate a comment in the `comments` array with a specific ID:
```javascript
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);
```

### Finding and Removing a Comment
Uses `findIndex()` to locate the index of a comment by ID and `slice()` to remove it:
```javascript
const index = comments.findIndex(comment => comment.id === 823423);
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
console.log(newComments);
```
