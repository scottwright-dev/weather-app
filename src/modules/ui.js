export function updateUI(weatherData) {
    const displayData = document.querySelector('.display-data');

    const content = `
        <p>The current temperature in ${weatherData.locationName} is ${weatherData.currentTemp} degrees, and the outlook is ${weatherData.currentCondition}.</p>
        <p>The forecast for the next 3 days is:</p>
        <ul>
            <li>${weatherData.forecast[0].date} will be ${weatherData.forecast[0].condition}</li>
            <li>${weatherData.forecast[1].date} will be ${weatherData.forecast[1].condition}</li>
            <li>${weatherData.forecast[2].date} will be ${weatherData.forecast[2].condition}</li>
        </ul>
    `;

    displayData.innerHTML = content;
}