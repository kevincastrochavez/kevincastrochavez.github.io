async function getRecipe() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  const response = await fetch(url);
  const data = response.json();
  console.log(data);

  if (response.status == 200) {
    return data;
  } else {
    throw new Error(`No meals found: ${response.status}`);
  }
}

function newRecipe() {
  const recipeId = document.querySelector("#recipes");

  const r = getRecipe()
    .then((item) => {
      myRecipe = item.meals[0];
      let card = document.createElement("section");

      card.innerHTML = `<h2>${myRecipe.strMeal}</h2>`;
      recipeId.appendChild(card);

      console.log(myRecipe);
    })
    .catch((error) => console.log(error.message));
}
