import { fetchCurrentWeather} from "./fetchForecast";

const clearInput = () => {
    const formInput = document.getElementById("input-form");
    formInput.reset();
}

//DOM Module Pattern
const domManip = () => {
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", (e) => {
        
        fetchCurrentWeather();
        clearInput();
        
    });

}


export default domManip;