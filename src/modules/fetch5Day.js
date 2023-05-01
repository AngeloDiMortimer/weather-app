import {format} from "date-fns";

class Forecast {
    constructor (main, date, minTemp, maxTemp) {
        this.main = main;
        this.date = date;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
    }
}

const createForecast = (arrayForeData) => {
    const main = arrayForeData.weather[0].main;
    const date = new Date(arrayForeData.dt*1000);
    const minTemp = Math.round(arrayForeData.main.temp_min);
    const maxTemp = Math.round(arrayForeData.main.temp_max);

    return new Forecast(main, date, minTemp, maxTemp);
}

const fetch5Days = async () => {
    try {
        const searchCity = document.getElementById("search-city").value;
        const searchCountry = document.getElementById("search-country").value;

        const responFore = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "," + searchCountry + "&units=metric&appid=e39d30bcea67c9dc937b80d55b763470", {mode: "cors"});
        const foreData = await responFore.json();
        const arrayForeData = foreData.list;

        //Creates new array with forecast objects
        let fiveDays = [];

        for(let i = 0; i < arrayForeData.length; i+=8) {
            const temporary = createForecast(arrayForeData[i]);
            fiveDays.push(temporary);
        }

        console.log("Fetching current data from API...", fiveDays);



        return fiveDays;

    } catch (err) {
        console.log("fetching error", err);
    }
}

export {
    fetch5Days
}