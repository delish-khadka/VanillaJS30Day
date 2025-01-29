// script.js
const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon", "Mango", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tangerine", "Watermelon"];

const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");

// Function to filter data based on user input
function filterResults(query) {
  return data.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
}

// Function to display filtered results
function displayResults(results) {
  resultsContainer.innerHTML = ""; // Clear previous results

  if (results.length > 0) {
    results.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      resultsContainer.appendChild(li);
    });
    resultsContainer.style.display = "block"; // Show results
  } else {
    resultsContainer.style.display = "none"; // Hide results if no matches
  }
}

// Event listener for input changes
searchInput.addEventListener("input", function () {
  const query = this.value.trim(); // Get the search query
  if (query.length > 0) {
    const filteredResults = filterResults(query);
    displayResults(filteredResults);
  } else {
    resultsContainer.style.display = "none"; // Hide results if input is empty
  }
});

// Optional: Close results when clicking outside
document.addEventListener("click", function (event) {
  if (!event.target.matches("#searchInput")) {
    resultsContainer.style.display = "none";
  }
});
