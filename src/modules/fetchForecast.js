// Async function to fetch current forecast from user input
const fetchCurrentWeather = async () => {
    try {
        
        const searchCity = document.getElementById("search-city").value;
        const searchCountry = document.getElementById("search-country").value;
        console.log(searchCity);
        
        console.log(searchCountry);

        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "," + searchCountry + "&units=metric&appid=e39d30bcea67c9dc937b80d55b763470", {mode: "cors"});
        const currentData = await response.json();
        console.log("Fetching current data from API...", currentData);
        return currentData;

    } catch (err) {
        console.log("fetching error", err);
    }
}

const clearInput = () => {
    const formInput = document.getElementById("input-form");
    formInput.reset();
}


export {
    fetchCurrentWeather,
    clearInput
}