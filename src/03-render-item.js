// // Using the first candy, create a new <div> 
// // create one then which shows the candy information as an <h3> for the name, 
// // make one for an <img> of its image, 
// // and make one for a <p> of its rating

// // Add it to the '#candy-container' div

// // creating first div and array of candies [] using firstCandy
// const firstCandy = candies[0]
// console.log (firstCandy.name)
// let candyDiv = document.createElement("div")

// // setting the variables to pass arguments through  
// let candyH3 = document.createElement("h3")
// let candyImg = document.createElement("img")
// let candyP = document.createElement("p")

// // this is assigning the elements 
// candyH3.textContent = firstCandy.name 
// candyImg.src = firstCandy.img_url
// candyP.textContent = firstCandy.rating 
// candyDiv.append(candyH3, candyImg, candyP);

// // this adds it to the #candy-containder div 
// const container = document.querySelector("#candy-container")

// //settiung up an array so I can do my .forEach, apending all the other candies  
// let candyDivs = []; 
// container.append(candyDiv)

// // If you finish this quickly, do this for all the candies with a `.forEach`

// candyDivs.forEach((candyDiv)=> {
//   let allCandy = document.createElement("div")
//   candyDivs.push(candyDiv)
//   candyContainer.append(candyDiv);
// });

let candyContainer = document.querySelector("#candy-container");
let candyDivs = [];

candies.forEach((candy) => {
  let candyDiv = document.createElement("div");

  let candyH3 = document.createElement("h3");
  let candyImg = document.createElement("img");
  let candyP = document.createElement("p");

  candyH3.textContent = candy.name;
  candyImg.src = candy.img_url;
  candyP.textContent = candy.rating;

  candyDiv.append(candyH3, candyImg, candyP);
  candyDivs.push(candyDiv);
});

candyDivs.forEach((candyDiv) => {
  candyContainer.append(candyDiv);
});
