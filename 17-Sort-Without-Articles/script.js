// select the sorting button and the unsorted element
const sorter = document.querySelector("a");
const listElement = document.querySelector("#bands");
// array of band names
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled', 
  'Say Anything',
  'The Midway State', 
  'We Came as Romans', 
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

/**
	* function to strip common articles ("A", "An", "The") from band names
  * for sorting purposes
  * @param {string} bandName - The name of the band
  * @returns {sting} - Band name without the articles
	*/
const strip = bandName => {
  return bandName.replace(/^(a |the |an )/i, "".trim());
};

// sor thte bands alphabetically, ignoring the articles
let sortedBands = [...bands].sort((a, b) => (strip(a) > strip(b) ? 1 : -1));


/**
	* function to build the list of bands and render it in the DOM
  * @param {Array} listOfBands - the array of band names
  * @param {HTMLElement} listElement - the target HTML list element
	*/
const buildList = (listOfBands, listElement) =>
  (listElement.innerHTML = listOfBands
    .map(band => `<li data-band="${band}">${band}</li>`)
    .join(""));

// track sorting state
let isSorted = false;

/**
	* function to sort or unsort the band list when the button is clicked
  * @param {Event} e - the click event
	*/
const sort = e => {
  e.preventDefault();
  isSorted = !isSorted;	// toggle sorting state
  const listToUse = isSorted ? sortedBands : bands;
  sorter.textContent = isSorted ? "unsort" : "sort";	//update button text

// apply sorting animation by translating list items
  listToUse.forEach((band, i) => {
    setTimeout(() => {
      const bandElement = document.querySelector(`[data-band='${band}']`);
      bandElement.style.position = "absolute"; // Set absolute positioning only when sorting
      bandElement.style.transform = `translateY(calc(${i * 40}px)`;
    }, 10 * i);
  });
};

// initialize the list with the original band order
buildList(bands, listElement);
// attach event listener to sorting button
sorter.addEventListener("click", sort);
