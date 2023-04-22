// Async function to fetch current forecast from user input
const fetchCurrentWeather = async () => {
    try {
        const searchCity = document.getElementById("search-city").value;
        const searchState = document.getElementById("search-state").value;
        const searchCountry = document.getElementById("search-country").value;
        console.log(searchCity);
        console.log(searchState);
        console.log(searchCountry);

        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "," + searchState + "," + searchCountry + "&units=metric&appid=e39d30bcea67c9dc937b80d55b763470", {mode: "cors"});
        const currentData = await response.json();
        console.log("Fetching current data from API...", currentData);
        return currentData;

    } catch (err) {
        console.log("fetching error", err);
    }
}

const clearSearch = () => {
    document.getElementById("search-city").value = "";
    document.getElementById("search-state").value = "";
    document.getElementById("search-country").value = "";
}


export {
    fetchCurrentWeather,
    clearSearch
}