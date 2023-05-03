import { fetchCurrentWeather} from "./fetchForecast";
import { fetch5Days } from "./fetch5Day";
import { generatePage } from "./utils";
const clearInput = () => {
    const formInput = document.getElementById("input-form");
    formInput.reset();
}

//DOM Module Pattern
const domManip = () => {
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", async (e) => {
        
        const cWeather = await fetchCurrentWeather();
        const forecast5Days = await fetch5Days();
        
        generatePage(cWeather, forecast5Days); //funcion inutil por ahora
        clearInput();
        
    });

}


export default domManip;