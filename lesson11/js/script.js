const dateFooter = document.querySelector(".date");
const banner = document.querySelector(".banner");

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const dayWeek = date.getDay();

if (dayWeek !== 5) {
  banner.style.display = "none";
} else {
  banner.style.display = "flex";
}

window.addEventListener("load", () => {
  const hamButton = document.querySelector(".ham");
  const mainNav = document.querySelector("#navigation");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  dateFooter.innerHTML = `${days[dayWeek]}, ${day} ${months[month]} ${year}`;

  hamButton.addEventListener(
    "click",
    () => {
      mainNav.classList.toggle("responsive");
    },
    false
  );

  getRegions();
});

const url = "https://byui-cit230.github.io/weather/data/towndata.json";

async function getRegions() {
  const response = await fetch(url);
  const data = await response.json();

  const { towns } = data;
  const filteredArray = towns.filter(
    (town) =>
      town.name === "Soda Springs" ||
      town.name === "Preston" ||
      town.name === "Fish Haven"
  );

  filteredArray.map((item) => {
    const section = document.createElement("section");
    const infoContainer = document.createElement("div");
    const titleContainer = document.createElement("div");
    const headingTwo = document.createElement("h2");
    const span = document.createElement("span");
    const townInfo = document.createElement("div");
    const paragraphOne = document.createElement("p");
    const paragraphTwo = document.createElement("p");
    const paragraphThree = document.createElement("p");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");

    infoContainer.classList.add("info");
    titleContainer.classList.add("title");
    townInfo.classList.add("town-info");
    imgContainer.classList.add("img-container");

    headingTwo.textContent = item.name;
    span.textContent = item.motto;
    paragraphOne.textContent = `Year Founded: ${item.yearFounded}`;
    paragraphTwo.textContent = `Population: ${item.currentPopulation}`;
    paragraphThree.textContent = `Annual Rain Fall: ${item.averageRainfall}`;
    img.setAttribute("src", `images/${item.photo}`);
    img.setAttribute("alt", `${item.name}`);

    section.appendChild(infoContainer);
    section.appendChild(imgContainer);
    infoContainer.appendChild(titleContainer);
    infoContainer.appendChild(townInfo);
    titleContainer.appendChild(headingTwo);
    titleContainer.appendChild(span);
    townInfo.appendChild(paragraphOne);
    townInfo.appendChild(paragraphTwo);
    townInfo.appendChild(paragraphThree);
    imgContainer.appendChild(img);

    document.querySelector(".sections-container").appendChild(section);
  });
}
