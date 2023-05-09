fetch("http://localhost:3000/candies")
.then(r => r.json())
.then(data => console.log(data))
