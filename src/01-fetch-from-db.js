// For this first challenge you'll need to fetch the data from the database, parse it, and
// then console.log it

document.addEventListener("DOMContentLoaded", () => {
  });


fetch("http://localhost:3000/candies")
.then(r => r.json())
.then(data => console.log(data));
