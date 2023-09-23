async function fetchWeatherData(locationSearch) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=dd41ad9a0fc4482f91085416231509&q=${locationSearch}&aqi=no`, { mode: 'cors' });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const fetchedData = await response.json();

        if (!fetchedData) {
            throw new Error("No Data was fetched from your API call");
        }
        return fetchedData;
    } catch (error) {
        console.log("There was an error fetching the data:", error);
        throw error;
    }
}

const searchForm = document.querySelector('#location-search');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const locationSearch = document.querySelector('#search-input').value;
    fetchWeatherData(locationSearch.trim())
    .then(data => {
        console.log(`The current temperature in ${data.location.name} is ${data.current.temp_c} degrees and the outlook is ${data.current.condition.text}`);
    })
    .catch(error => {
        console.error("Error:", error);
    });
})