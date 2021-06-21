const API_KEY = "90110c6c5296ba96a34270bcbcee731b";
const CITY_ID = "5604473";
const currentTemp = document.getElementById("current-temp");
const image = document.getElementById("imagesrc");
const icon = document.getElementById("icon");

const url = `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=imperial`;

const apiCall = async () => {
  const response = await fetch(url);
  const data = await response.json();

  currentTemp.textContent = data.main.temp;

  const imagesrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  image.textContent = imagesrc;
  icon.setAttribute("src", imagesrc);
  icon.setAttribute("alt", desc);
};

apiCall();
