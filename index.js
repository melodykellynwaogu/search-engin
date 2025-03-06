// Sample dataset
const data = [
    { title: "Introduction to JavaScript", content: "JavaScript is a programming language used for web development." },
    { title: "HTML Basics", content: "HTML is the standard markup language for creating web pages." },
    { title: "CSS Styling", content: "CSS is used to style and layout web pages." },
    { title: "Advanced JavaScript", content: "Learn about closures, promises, and async/await in JavaScript." },
  ];
  
  // Function to perform the search
  function search(query) {
    const results = data.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.content.toLowerCase().includes(query.toLowerCase())
    );
    return results;
  }
  
  // Display results
  function displayResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  
    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>No results found.</p>";
      return;
    }
  
    results.forEach(item => {
      const resultItem = document.createElement("div");
      resultItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
      resultsContainer.appendChild(resultItem);
    });
  }
  
  // Event listener for the search button
  document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    const results = search(query);
    displayResults(results);
  });