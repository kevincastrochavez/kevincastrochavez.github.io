const range = document.getElementById("range");
const loader = document.querySelector(".loader");
const button = document.querySelector("button");
const buttonText = document.querySelector(".buttonText");
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

function updateTextInput(val) {
  range.textContent = val;
}

const redirectForm = () => {
  location.href = "/lesson8/stormcenter.html";
};

window.addEventListener("load", () => {
  const hamButton = document.querySelector(".ham");
  const mainNav = document.querySelector("#navigation");
  const dateFooter = document.querySelector(".date");

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
});
