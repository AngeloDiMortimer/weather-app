import {format, addMinutes, parseISO} from "date-fns";


//chooses which icon is going to be displayed
const checkWeatherIcon = (desc, time) => {
    const hour = format(time, "H");
    let image = "";
    
    switch (desc) {
        case "clear sky": {
            if (hour >= 6 && hour < 18 ) {
                image = "./images/SVG/clear_day.svg";
            } else {
                image = "./images/SVG/clear_night.svg";
            }
            break;
        }
        case "few clouds": {
            if (hour >= 6 && hour < 18 ) {
                image = "./images/SVG/few_clouds_d.svg";
            } else {
                image = "./images/SVG/few_clouds_n.svg";
            }
            break;
        }
        case "scattered clouds": {
            image = "./images/SVG/scattered_clouds.svg";
            break;
        }
        case "broken clouds": {
            image = "./images/SVG/cloudy.svg";
            break;
        }
        case "shower rain":
        case "rain": {
            image = "./images/SVG/shower_rain.svg";
            break;
        }
        case "thunderstorm": {
            image = "./images/SVG/thunderstorm.svg";
            break;
        }
        case "snow": {
            image = "./images/SVG/snow.svg";
            break;
        }
        case "mist": {
            image = "./images/SVG/mist.svg";
            break;
        }
        default: {
            image = "./images/SVG/cloudy.svg";
        }
    } 
    return image;
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

const generateForecast = (item, forecast) => {
    const foreDay = document.createElement("div");
    const tempContainer = document.createElement("div");
    const tempHigh = document.createElement("div");
    const tempLow = document.createElement("div");
    const foreIcon = document.createElement("div");
    const imgForecast = document.createElement("img");
    
    foreDay.classList.add("forecast-day", "mb-2", "text-2xl", "font-semibold");
    tempContainer.classList.add("forecast-temperature");
    tempHigh.classList.add("temp-high", "text-2xl", "font-bold", "text-2xl", "font-bold");
    tempLow.classList.add("temp-low", "text-sm");
    foreIcon.classList.add("forecast-icon", "w-10");
    

    foreDay.textContent = format(forecast.date, "EEEE");
    tempHigh.textContent = forecast.maxTemp;
    tempLow.textContent = forecast.minTemp;
    imgForecast.src = checkWeatherIcon(forecast.desc, forecast.date);
    imgForecast.alt = "icon";

    tempContainer.appendChild(tempHigh);
    tempContainer.appendChild(tempLow);

    foreIcon.appendChild(imgForecast);

    item.appendChild(foreDay);
    item.appendChild(tempContainer);
    item.appendChild(foreIcon);
}

const displayforecast = (forecast) => {
    const items = document.querySelectorAll("#item");
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.innerHTML = "";
        generateForecast(item, forecast[i]);
    }
}

const displayWeather = (weather) => {
   const description = document.querySelector(".info-desc");
   const localization = document.querySelector(".info-city");
   const date = document.querySelector(".info-date");
   const hour = document.querySelector(".info-time");
   const temperature = document.querySelector(".info-temp");
   const weatherImg = document.querySelector(".info-img");
   const feelsLike = document.getElementById("feels-like");
   const humidity = document.getElementById("humidity");
   const windSpeed = document.getElementById("wind-speed");

    description.textContent = capitalizeLetter(weather.desc);
    localization.textContent = weather.place;
    date.textContent = convertDate(weather.date);
    hour.textContent = convertHour(weather.date);
    temperature.textContent = weather.temp;
    weatherImg.src = checkWeatherIcon(weather.desc, weather.date);
    feelsLike.textContent = weather.feels;
    humidity.textContent = weather.humidity;
    windSpeed.textContent = weather.wind;
}


const generatePage = (weather, forecast) => {
    
   displayWeather(weather);
   displayforecast(forecast);

}

export {
    generatePage,
    getDate
};