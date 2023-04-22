import { fetchCurrentWeather, clearSearch } from "./fetchForecast";
//DOM Module Pattern
const domManip = () => {
    const searchButton = document.querySelector(".search-button");
    const clearButton = document.querySelector(".reset-button");
    searchButton.addEventListener("click", fetchCurrentWeather);
    clearButton.addEventListener("click", clearSearch);
}


export default domManip;