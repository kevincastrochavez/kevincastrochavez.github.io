const count = 10;
const apiKey = "waPU92E_1DCl7KU3FR7dr4qVitXFzPV5NK4qshYtBj0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getPhotos();
