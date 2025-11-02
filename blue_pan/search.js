// search.js
function searchSite() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const pages = {
    "home": "index.html",
    "about": "about.html",
    "services": "services.html",
    "contact": "contact.html",
    "enquiry": "enquiry.html"
  };

  let found = false;
  for (const page in pages) {
    if (page.includes(query)) {
      document.getElementById("searchResult").innerHTML =
        `Found match: <a href="${pages[page]}">${page}</a>`;
      found = true;
      break;
    }
  }
  if (!found) {
    document.getElementById("searchResult").textContent =
      "Sorry, no results found.";
  }
}








