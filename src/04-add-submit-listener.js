// When the '#candy-form' form is submitted, add the submitted candy to the `#candy-container`
let candyForm = document.querySelector("#candy-form");

candyForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form input values
  let nameInput = document.querySelector("input[name='candy-name']");
  let imgInput = document.querySelector("input[name='candy-image']");
  let ratingInput = document.querySelector("input[name='candy-rating']");

  let name = nameInput.value;
  let img_url = imgInput.value;
  let rating = ratingInput.value;

  // Create the candy div
  const candyDiv = document.createElement("div");
  const candyH3 = document.createElement("h3");
  const candyImg = document.createElement("img");
  const candyP = document.createElement("p");

  candyH3.textContent = name;
  candyImg.src = img_url;
  candyP.textContent = rating;

  candyDiv.append(candyH3, candyImg, candyP);
  candyContainer.append(candyDiv);

  // Reset the form
  candyForm.reset();
});