window.addEventListener("load", () => {
  const hamButton = document.querySelector(".ham");
  const mainNav = document.querySelector("#navigation");

  hamButton.addEventListener(
    "click",
    () => {
      mainNav.classList.toggle("responsive");
    },
    false
  );
});
