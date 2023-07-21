import "./style.css";
import weather from "./modules/weatherAPI";
import webpage from "./modules/webpage";

async function generateWeather(value) {
  const weatherData = await weather.getData(value);
  webpage.showWeather(weatherData);
}

webpage.createFooterContent();
generateWeather("Moscow");

const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("input");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (searchInput.value === "") {
    return;
  }
  generateWeather(searchInput.value);
});
