import { fetchCurrentWeather} from "./fetchForecast";
import { fetch5Days } from "./fetch5Day";
const clearInput = () => {
    const formInput = document.getElementById("input-form");
    formInput.reset();
}

//DOM Module Pattern
const domManip = () => {
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", (e) => {
        
        fetchCurrentWeather();
        fetch5Days();
        clearInput();
        
    });

}


export default domManip;