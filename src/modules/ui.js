export function updateUI(data) {
    const displayData = document.querySelector('.display-data');

    const content = `
        <p>The current temperature in ${data.locationName} is ${data.currentTemp} degrees, and the outlook is ${data.currentCondition}.</p>
        <p>The forecast for the next 3 days is:</p>
        <ul>
            <li>${data.forecast[0].date} will be ${data.forecast[0].condition}</li>
            <li>${data.forecast[1].date} will be ${data.forecast[1].condition}</li>
            <li>${data.forecast[2].date} will be ${data.forecast[2].condition}</li>
        </ul>
    `;

    displayData.innerHTML = content;
}