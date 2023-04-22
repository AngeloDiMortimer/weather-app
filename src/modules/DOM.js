import { fetchCurrentWeather, clearInput} from "./fetchForecast";
//DOM Module Pattern
const domManip = () => {
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", (e) => {
        
        fetchCurrentWeather();
        clearInput();
        
    });

}


export default domManip;