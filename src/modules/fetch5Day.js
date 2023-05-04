
class Forecast {
    constructor (desc, date, minTemp, maxTemp) {
        this.desc = desc;
        this.date = date;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
    }
}

const createForecast = (arrayForeData) => {
    const desc = arrayForeData.weather[0].description;
    const date = new Date(arrayForeData.dt_txt);
    const minTemp = Math.round(arrayForeData.main.temp_min) + " °C";
    const maxTemp = Math.round(arrayForeData.main.temp_max) + " °C";

    return new Forecast(desc, date, minTemp, maxTemp);
}

const fetch5Days = async (searchCity, searchCountry) => {
    try {

        const responFore = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "," + searchCountry + "&units=metric&appid=e39d30bcea67c9dc937b80d55b763470", {mode: "cors"});
        const foreData = await responFore.json();
        const arrayForeData = foreData.list;

        //Creates new array with forecast objects
        let fiveDays = [];

        for(let i = 0; i < arrayForeData.length; i+=8) {
            const temporary = createForecast(arrayForeData[i]);
            fiveDays.push(temporary);
        }

        console.log("Fetching current data from API...", foreData);
        console.log(fiveDays);



        return fiveDays;

    } catch (err) {
        console.log("fetching error", err);
    }
}

export {
    fetch5Days
}