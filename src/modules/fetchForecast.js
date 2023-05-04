import {getDate}  from './utils';

class Weather {
    constructor(weather, desc, place, date, temp, feels, humidity, wind) {
        this.weather = weather;
        this.desc = desc;
        this.place = place;
        this.date = date;
        this.temp = temp;
        this.feels = feels;
        this.humidity = humidity;
        this.wind = wind;
    }
}



const createWeather = (currentData) => {
    const weather = currentData.weather[0].main;
    const desc = currentData.weather[0].description;
    const place = currentData.name + ", " + currentData.sys.country;
    const date = getDate(currentData.dt, currentData.timezone);
    const temp = Math.round(currentData.main.temp) + " °C";
    const feels = Math.round(currentData.main.feels_like) + " °C";
    const humidity = currentData.main.humidity + "%";
    const wind = currentData.wind.speed + "km/h";

    return new Weather(weather, desc, place, date, temp, feels, humidity, wind);

}

// Async function to fetch current forecast from user input
const fetchCurrentWeather = async (searchCity, searchCountry) => {
    try {
        
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "," + searchCountry + "&units=metric&appid=e39d30bcea67c9dc937b80d55b763470", {mode: "cors"});
        const currentData = await response.json();
        
        const newWeather = createWeather(currentData); //creates new Weather object
        console.log("Fetching current data from API...", currentData);
        console.log(newWeather);

        return newWeather;

    } catch (err) {
        console.log("fetching error", err);
    }
}




export {
    fetchCurrentWeather,
  
}