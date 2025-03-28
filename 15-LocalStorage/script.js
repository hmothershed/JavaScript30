// select necessary DOM elements
const addItems = document.querySelector(".add-items"); // form element for adding items
const itemsList = document.querySelector(".plates"); // list container to display items
const items = JSON.parse(localStorage.getItem("items")) || []; // retrieve stored items or initialize an empty array
const toggleItems = document.querySelector(".toggle-items"); // button to toggle all items as done/undone
const clearItems = document.querySelector(".clear-list"); // button to clear aall items from the list

// function to handle adding a new line
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

// function to populate the list with items
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

// function to toggle the checked status of an item
function toggleDone(e) {
  if (!e.target.matches("input")) return; // only proceed if an input chekbox is clicked

  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// function to toggle all items as checked/unchecked
function toggleAllDone(e) {
  e.preventDefault();
  items.filter((el) => (el.done = !el.done)); // flip the done status of all items
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// function to clear all items from the list
function clearList(e) {
  e.preventDefault();
  items.length = 0;
  localStorage.clear();
  populateList([], itemsList);
}

// function to delete a single item from the list
function deleteItem(e) {
  if (!e.target.matches(".delete-btn")) return;

  const index = e.target.dataset.index;
  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// event listeners
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
toggleItems.addEventListener("click", toggleAllDone);
clearItems.addEventListener("click", clearList);
itemsList.addEventListener("click", deleteItem);

// populate the list with stored items when the page loads
populateList(items, itemsList);
