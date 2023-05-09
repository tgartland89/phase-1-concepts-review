// With your array of candies from the last file, iterate through each item and
// console.log only each name one at a time

// The terminal should read:

// Twizzlers
// Sour Punch Straws
// Kit Kats
// Reese's Cups
fetch("http://localhost:3000/candies")
.then(r => r.json())
.then(data => {
data.forEach(candy=>{
    console.log (candy.name)}
        )
    }       
)




