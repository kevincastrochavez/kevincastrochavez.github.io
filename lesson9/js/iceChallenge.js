const requestURL = "https://www.ahfx.com/person.php";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let eye = document.getElementById("eye");
    const city = document.getElementById("city");
    const children = document.getElementById("children");
    const ip = document.getElementById("ip");

    name.textContent =
      jsonObject.person.personal.name +
      " " +
      jsonObject.person.personal.last_name;
    password.textContent = jsonObject.person.online_info.password;
    email.textContent = jsonObject.person.online_info.email;
    eye.textContent = jsonObject.person.personal.eye_color;
    city.textContent = `${jsonObject.person.personal.city}/${jsonObject.person.personal.country}`;
    if (jsonObject.person.marriage.married) {
      children.textContent = jsonObject.person.marriage.children;
    } else {
      children.textContent = "0";
    }
    ip.textContent = `${jsonObject.person.online_info.ip_address}`;
  });
