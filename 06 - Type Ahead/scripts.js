let cities = [];

let searchInput = document.querySelector("#input-field");
async function fetchCities() {
  try {
    const response = await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json");
    let data = await response.json();
    cities = data;
    console.log(cities);
  } catch (error) {
    // displayError("Failed to load cities. Please try again.");
    console.error("Error fetching data:", error);
  }
}

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayResults(matches) {
  const resultsContainer = document.querySelector(".suggestions");
  resultsContainer.innerHTML = matches
    .map((place) => {
      return `
        <li>
          <span class="name">${place.city}, ${place.state}</span>
          <span class="population">${place.population}</span>
        </li>
      `;
    })
    .join("");
}

searchInput.addEventListener("input", () => {
  const matches = findMatches(searchInput.value, cities);
  if (!matches) {
    resultsContainer.innerHTML = "";
    return;
  }
  displayResults(matches);
});

fetchCities();
