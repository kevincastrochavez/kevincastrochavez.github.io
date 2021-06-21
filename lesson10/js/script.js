window.addEventListener("load", () => {
  const hamButton = document.querySelector(".ham");
  const mainNav = document.querySelector("#navigation");
  const dateFooter = document.querySelector(".date");
  const banner = document.querySelector(".banner");

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

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayWeek = date.getDay();

  dateFooter.innerHTML = `${days[dayWeek]}, ${day} ${months[month]} ${year}`;

  if (dayWeek !== 5) {
    banner.style.display = "none";
  } else {
    banner.style.display = "flex";
  }

  hamButton.addEventListener(
    "click",
    () => {
      mainNav.classList.toggle("responsive");
    },
    false
  );
});

const API_KEY = "90110c6c5296ba96a34270bcbcee731b";
const CITY_ID = "5604473";
const currentCond = document.getElementById("condition");
const high = document.getElementById("high");
const currentTemp = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const windChill = document.getElementById("windChill");

const url = `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=imperial`;

// const apiCall = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       currentCond.textContent = data.weather[0].main;
//       high.textContent = `${data.main.temp_max.toFixed(0)}°F`;
//       currentTemp.textContent = `${data.main.temp.toFixed(0)}°F`;
//       humidity.textContent = `${data.main.humidity}%`;
//       windSpeed.textContent = `${data.wind.speed.toFixed(0)}mph`;

//       const temperatureSplit = Number(currentTemp.textContent.split("°")[0]);
//       const windSpeedSplit = Number(windSpeed.textContent.split("m")[0]);

//       const windChillFactor = (
//         35.74 +
//         0.6215 * temperatureSplit -
//         35.75 * windSpeedSplit ** 0.16 +
//         0.4275 * temperatureSplit * windSpeedSplit ** 0.16
//       ).toFixed(0);

//       windChill.textContent = `${Number(windChillFactor)}°F`;
//     });
// };

// apiCall();
