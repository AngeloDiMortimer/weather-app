import {format, addMinutes, parseISO} from "date-fns";


//chooses which icon is going to be displayed
const checkWeatherIcon = (desc, time) => {

}

//gets hour
const getDate = (dt, timezone) => {
    const utc_seconds = parseInt(dt, 10) + parseInt(timezone, 10);
    const utc_milliseconds = utc_seconds * 1000;
    const local_date = new Date(utc_milliseconds);
    
    const test = format(addMinutes(local_date, local_date.getTimezoneOffset()), 'yyyy-MM-dd HH:mm:ss'); //returns UTC time
    const result = parseISO(test, 1);
    
    
    return result;
}

//formats the hour
const convertHour = (date) => {
    const dateHour = format(date, "h");
    const dateMinute = format(date, "mm");
    const dateAMPM = format(date, "bbb");
    const dateTime = `${dateHour}:${dateMinute} ${dateAMPM}`;

    return dateTime;
}

//formats the date
const convertDate = (date) => {
    const dateMonth = format(date, "MMMM");
    const dateDay = format(date, "do");
    const dateYear = format(date, "y");
    const dateDayWeek = format(date, "EEEE");
    const dateFormated = `${dateDayWeek}, ${dateDay} ${dateMonth} ${dateYear}`

    return dateFormated;
}

//Capitalizes the first letter of every word in a string
const capitalizeLetter = (str) => {
    
    const arr = str.split(" ");

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");

    return str2;

}

const displayWeather = (weather) => {
   const description = document.querySelector(".info-desc");
   const localization = document.querySelector(".info-city");
   const date = document.querySelector(".info-date");
   const hour = document.querySelector(".info-time");
   const temperature = document.querySelector(".info-temp");
   const weatherImg = document.querySelector(".info-img");

    description.textContent = capitalizeLetter(weather.desc);
    localization.textContent = weather.place;
    date.textContent = convertDate(weather.date);
    hour.textContent = convertHour(weather.date);
    temperature.textContent = weather.temp;
}


const generatePage = (weather, forecast) => {
    
   displayWeather(weather);

}

export {
    generatePage,
    getDate
};