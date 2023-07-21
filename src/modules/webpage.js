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

  // function switchBtn() {
  //   const toggleBtn = document.getElementById('toggle-btn');

  // }

  const toggleBtn = document.getElementById("toggle-btn");
  let tempStatus = "C";
  toggleBtn.addEventListener("click", () => {
    if (tempStatus === "C") {
      tempStatus = "F";
    } else if (tempStatus === "F") {
      tempStatus = "C";
    }
  });

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
    wind.textContent = `${weatherData.windSpeed}k/hm`;
    humidity.textContent = `${weatherData.humidityData}%`;
    icon.src = `${weatherData.weatherIcon}`;

    if (tempStatus === "C") {
      temperature.textContent = `${weatherData.temperatureC}°C`;
      feelsLike.textContent = `${weatherData.feelsLikeC}°C`;
    } else if (tempStatus === "F") {
      temperature.textContent = `${weatherData.temperatureF}°F`;
      feelsLike.textContent = `${weatherData.feelsLikeF}°F`;
    }
  }

  return { showWeather, createFooterContent };
})();

export default webpage;
