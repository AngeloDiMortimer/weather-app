import { fetchCurrentWeather} from "./fetchForecast";
import { fetch5Days } from "./fetch5Day";
import { generatePage } from "./utils";

const cities = [
    {
        "City": "Rome",
        "Country": "IT"
    },
    {
        "City": "London",
        "Country": "GB"
    },
    {
        "City": "Paris",
        "Country": "FR"
    },
    {
        "City": "Caracas",
        "Country": "VE"
    },
    {
        "City": "Brasília",
        "Country": "BR"
    },
    {
        "City": "Santiago",
        "Country": "CL"
    },
    {
        "City": "Buenos Aires",
        "Country": "AR"
    },
    {
        "City": "Madrid",
        "Country": "ES"
    },
    {
        "City": "New York",
        "Country": "US"
    }
]

const clearInput = () => {
    const formInput = document.getElementById("input-form");
    formInput.reset();
}

//DOM Module Pattern
const domManip = async () => {
    const searchButton = document.querySelector(".search-button");
    const item = cities[Math.floor(Math.random()*cities.length)];
    
    const weather = await fetchCurrentWeather(item.City, item.Country);
    const forecast = await fetch5Days(item.City, item.Country);

    generatePage(weather, forecast);
    
    searchButton.addEventListener("click", async (e) => {
        const searchCity = document.getElementById("search-city").value;
        const searchCountry = document.getElementById("search-country").value;
        
        const cWeather = await fetchCurrentWeather(searchCity, searchCountry);
        const forecast5Days = await fetch5Days(searchCity, searchCountry);
        
        generatePage(cWeather, forecast5Days); //funcion inutil por ahora
        clearInput();
        
    });

}


export default domManip;