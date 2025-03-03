# Challenge #6 - AJAX Type Ahead
![image](https://github.com/user-attachments/assets/ab27ac6f-2db6-4a54-925e-7831fc7d9908)

## 📸 Demo [HERE](https://hmothershed.github.io/JavaScript30/06-AJAX-Type-Ahead/)
This is a real-time search filter that allows users to find cities and states as they type. This project fetches a dataset of U.S. cities and dynamically displays matches with highlighted text.

## 🚀 Features
- **Live Search** - Instantly filters cities and states as the user types.
- **Highlighted Matches** - The searched term is highlighted within results.
- **Population Display** - Shows the population of each matched city.

## 🔧 How It Works
### Fetching Data
The project fetches city and state data from an external API and stroes it in an array:
```javascript
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
...
```

### Filter Search Results
When a user types, the function `findMatches()` filters cities and states that match the input:
```javascript
function findMatches(wordToMatch, cities) {
  const regex = new RegExp(wordToMatch, 'gi');
  return cities.filter(place => place.city.match(regex) || place.state.match(regex));
}
```

### Displaying the Results
Filtered results are dynamically inserted into the HTML, with matched text highlighted:
```javascript
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}
```
