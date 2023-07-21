const webpage = (() => {
  function createFooterContent() {
    const footerText = document.getElementById("footer-text");
    footerText.textContent = `Copyright © ${new Date().getFullYear()} ekat-velaz`;

    const githubLink = document.createElement("a");
    githubLink.setAttribute("id", "github-link");
    githubLink.href = "https://github.com/ekat-velaz";

    const footerContainer = document.getElementById("footer");
    footerContainer.appendChild(githubLink);
  }

  function showWeather(weatherData) {
    if (!weatherData) {
      return;
    }

    const city = document.getElementById("city");
    const country = document.getElementById("country");
    const conditionState = document.getElementById("condition-state");
    const temperature = document.getElementById("temperature");
    const wind = document.getElementById("wind");
    const humidity = document.getElementById("humidity");
    const feelsLike = document.getElementById("feels-like");
    const icon = document.getElementById("icon");

    city.textContent = `${weatherData.cityName},`;
    country.textContent = `${weatherData.countryName}`;
    conditionState.textContent = `${weatherData.conditionState}`;
    temperature.textContent = `${weatherData.temperatureC}°C`;
    wind.textContent = `${weatherData.windSpeed}k/hm`;
    humidity.textContent = `${weatherData.humidityData}%`;
    feelsLike.textContent = `${weatherData.feelsLikeC}°C`;
    icon.src = `${weatherData.weatherIcon}`;
  }

  return { showWeather, createFooterContent };
})();

export default webpage;
