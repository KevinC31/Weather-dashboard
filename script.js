const cityInput = document.getElementById("city-input");

const searchButton = document.getElementById("search-btn");

const API_KEY = '23c2413827056e1c80731b1db114f52b';


// fetching the weather details from API response
const getWeatherDetails = (cityName, lat, lon) => {
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  fetch(WEATHER_API_URL).then(res => res.json()).then(data =>{
  console.log(data);
}).catch(() => {
    alert("An error occured while fetching the weather forecast!");
  });
}

// Grabbing the value of the city user input
const getCityCoordinates = () => {
    cityName = cityInput.value.trim();
    if(!cityName) return;

    const GEOCODING_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

   fetch(GEOCODING_API_URL).then(res => res.json()).then(data =>{
     if(!data.length) return alert(`No coordinates found for ${cityName}`);
     const {name, lat, lon} = data[0];
     getWeatherDetails(cityName, lat, lon);
   }).catch(() => {
     alert("An error occured while fetching the coordinates!");
   });


}
    

searchButton.addEventListener("click", getCityCoordinates);