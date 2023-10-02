export function updateUI(data) {
    console.log(`The current temperature in ${data.locationName} is ${data.currentTemp} degrees, and the outlook is ${data.currentCondition}. 

        The forecast for the next 3 days is:

        ${data.forecast[0].date} will be ${data.forecast[0].condition}
        ${data.forecast[1].date} will be ${data.forecast[1].condition} 
        ${data.forecast[2].date} will be ${data.forecast[2].condition} 
    `);
}