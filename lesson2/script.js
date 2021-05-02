window.addEventListener("load", () => {
  const currentYear = document.getElementById("year");
  const updatedDate = document.getElementById("lastDate");

  const date = new Date();
  const year = date.getFullYear();
  const lastModified = new Date(document.lastModified).toLocaleString();

  currentYear.innerHTML = year;
  updatedDate.innerHTML = lastModified;
});
