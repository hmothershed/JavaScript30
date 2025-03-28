# Challenge #15 - LocalStorage and Event Delegation
![LocalStorage](https://github.com/user-attachments/assets/62127a7f-66fb-459e-a17f-8b8c2f8e978a)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/15-LocalStorage/)
THis is a simple web-based to-do list that uses LocalStorage to persist data. Users can add, remove, and toggle the completion status of items on the list.

## 🚀 Features
- Add items to the ist
- Remove individual items
- Mark items as completed
- Toggle all items as completed/uncompleted
- Clear the entire list
- Data persistence using LocalStorage

## 🔧 How It Works
### Adding Items
When a user submits an item through the form, the `addItem` function captures the input, adds it to the `items` array, updates LocalStorage, and repopulates the list.
```js
function addItem(e) {
  e.preventDefault(); // prevent page to reload on form submission
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false // set default state as unchecked
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}
```

### Displaying Items
The `populateList` function dynamically generates the list items from the stored array and updates the HTML.
```js
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
        <label for="item${i}">${plate.text}</label>
        <button class="delete-btn" data-index=${i}>❌</button>
      </li>
    `;
    })
    .join(""); // convert array to HTML and insert it into the list
}
```

### Marking Items as Completed
Users can toggle the completion status of an item by clicking its checkbox, triggering the `toggleDone` function.
```js
function toggleDone(e) {
  if (!e.target.matches("input")) return; // only proceed if an input chekbox is clicked

  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
```

### Clearing the List
The `clearList` function removes all items from LocalStorage and the diplayed list.
```js
function clearList(e) {
  e.preventDefault();
  items.length = 0;
  localStorage.clear();
  populateList([], itemsList);
}
```

This simple yet effective LocalStorage-based to-do list ensures that items remain available aven after refreshing the page.
