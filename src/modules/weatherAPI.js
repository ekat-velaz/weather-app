import APIkey from "./APIkey";

const weather = (() => {
  function convertData(data) {
    const {
      location: { name: cityName, country: countryName, localtime: localTime },
      current: {
        condition: { text: conditionState, icon: weatherIcon },
        feelslike_c: feelsLikeC,
        feelslike_f: feelsLikeF,
        temp_c: temperatureC,
        temp_f: temperatureF,
        wind_mph: windSpeed,
        humidity: humidityData,
      },
    } = data;
    return {
      cityName,
      countryName,
      localTime,
      conditionState,
      weatherIcon,
      feelsLikeC,
      feelsLikeF,
      temperatureC,
      temperatureF,
      windSpeed,
      humidityData,
    };
  }
  async function getData(city) {
    const link = `http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${city}`;
    try {
      const response = await fetch(link, { mode: "cors" });
      if (!response.ok) {
        throw new Error(`City '${city}' not found`);
      }
      const data = convertData(await response.json());
      console.log(data);
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  return { getData };
})();

export default weather;
