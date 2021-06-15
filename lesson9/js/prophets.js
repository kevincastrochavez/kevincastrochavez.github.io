const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];

    for (let i = 0; i < prophets.length; i++) {
      const card = document.createElement("section");
      const h2 = document.createElement("h2");
      const image = document.createElement("img");

      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;

      card.appendChild(h2);

      document.querySelector("div.cards").appendChild(card);

      altText = `${prophets[i].name} - ${prophets[i].order}`;

      image.setAttribute("src", prophets[i].imageurl);
      image.setAttribute("alt", altText);
      card.appendChild(image);
    }
  });
