const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("results");

let usersData = [];

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    usersData = await response.json();
  } catch (error) {
    displayError("Failed to load users. Please try again.");
    console.error("Error fetching data:", error);
  }
}

function filterUsers(query) {
  return usersData.filter((user) => user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query));
}

function displayResults(users) {
  resultsContainer.innerHTML = users.length > 0 ? users.map((user) => `<p class="result-item">${user.name} - ${user.email}</p>`).join("") : "<p class='no-results'>No results found</p>";
}

function displayError(message) {
  resultsContainer.innerHTML = `<p class='error-message'>${message}</p>`;
}

function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (query.length === 0) {
    resultsContainer.innerHTML = "";
    return;
  }
  displayResults(filterUsers(query));
}

// Debounce function
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

// Fetch users initially
fetchUsers();

// Attach debounced event listener
searchInput.addEventListener("input", debounce(handleSearch, 300));
