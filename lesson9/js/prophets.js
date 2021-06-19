const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject.prophets;

    console.log(prophets);

    for (let i = 0; i < prophets.length; i++) {
      const card = document.createElement("section");
      const h2 = document.createElement("h2");
      const paragraphOne = document.createElement("p");
      const paragraphTwo = document.createElement("p");
      const image = document.createElement("img");
      const infoContainer = document.createElement("div");
      const imgContainer = document.createElement("div");

      infoContainer.classList.add("info-container");
      imgContainer.classList.add("img-container");

      paragraphOne.textContent = `Date of birth: ${prophets[i].birthdate}`;
      paragraphTwo.textContent = `Place birth: ${prophets[i].birthplace}`;
      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;

      card.appendChild(infoContainer);
      infoContainer.appendChild(h2);
      infoContainer.appendChild(paragraphOne);
      infoContainer.appendChild(paragraphTwo);

      document.querySelector("div.cards").appendChild(card);

      altText = `${prophets[i].name} - ${prophets[i].order}`;

      image.setAttribute("src", prophets[i].imageurl);
      image.setAttribute("alt", altText);
      card.appendChild(imgContainer);
      imgContainer.appendChild(image);
    }
  });
