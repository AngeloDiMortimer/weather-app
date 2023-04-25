import {format} from "date-fns";

class Weather {
    constructor(weather, place, temp, humidity, wind) {
        this.weather = weather;
        this.place = place;
        this.temp = temp;
        this.humidity = humidity;
        this.wind = wind;
    }
}

const createWeather = (currentData) => {
    const weather = currentData.weather[0].main;
    const place = currentData.name + "," + currentData.sys.country;
    const temp = Math.round(currentData.main.temp);
    const humidity = currentData.main.humidity + "%";
    const wind = currentData.wind.speed + "km/h";

    return new Weather(weather, place, temp, humidity, wind);

}

// Async function to fetch current forecast from user input
const fetchCurrentWeather = async () => {
    try {
        
        const searchCity = document.getElementById("search-city").value;
        const searchCountry = document.getElementById("search-country").value;
        console.log(searchCity);
        
        console.log(searchCountry);

        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "," + searchCountry + "&units=metric&appid=e39d30bcea67c9dc937b80d55b763470", {mode: "cors"});
        const currentData = await response.json();
        console.log("Fetching current data from API...", currentData);

        const newWeather = createWeather(currentData); //creates new Weather object
        /* Formats the date
        const dateTest = new Date(currentData.dt*1000); // minus
        
        const dateMonth = format(dateTest, "MMMM");
        const dateDay = format(dateTest, "do");
        const dateYear = format(dateTest, "y")
        const dateFormated = `${dateMonth} ${dateDay}, ${dateYear}`;

        const dateHour = format(dateTest, "h");
        const dateMinute = format(dateTest, "mm");
        const dateAMPM = format(dateTest, "bbb");
        const dateTime = `${dateHour}:${dateMinute}${dateAMPM}`;

        console.log(dateTest);
        console.log(dateFormated);
        console.log(dateTime);
        */
        console.log(newWeather);
        return currentData;

    } catch (err) {
        console.log("fetching error", err);
    }
}




export {
    fetchCurrentWeather,
  
}