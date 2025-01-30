document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const resultsContainer = document.getElementById("results");

  let usersData = [];

  async function fetchUsers() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=50");
      const data = await response.json();
      usersData = data.results; // API returns users in 'results' key
    } catch (error) {
      displayError("Failed to load users. Please try again.");
      console.error("Error fetching data:", error);
    }
  }

  function filterUsers(query) {
    return usersData.filter((user) => user.name.first.toLowerCase().includes(query) || user.name.last.toLowerCase().includes(query) || user.email.toLowerCase().includes(query));
  }

  function displayResults(users) {
    if (users.length > 0) {
      resultsContainer.innerHTML = users
        .map(
          (user) => `
              <div class="result-item">
                  <img src="${user.picture.thumbnail}" alt="Profile">
                  <div>
                      <p><strong>${user.name.first} ${user.name.last}</strong></p>
                      <p>${user.email}</p>
                  </div>
              </div>
          `
        )
        .join("");
      resultsContainer.style.display = "block"; // Show results when there are matches
    } else {
      resultsContainer.innerHTML = ""; // Clear results
      resultsContainer.style.display = "none"; // Hide when no matches
    }
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
});
