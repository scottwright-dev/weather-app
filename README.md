## Design

<div align='center'>
<img src='[src/assets/images/weather-wise-desktop.png](https://github.com/scottwright-dev/weather-app/blob/main/src/assets/images/weather-wise-desktop.png)' alt='Screenshot of desktop design'>
  <img src='[src/assets/images/weather-wise-mobile.png](https://github.com/scottwright-dev/weather-app/blob/main/src/assets/images/weather-wise-mobile.png)' alt='Screenshot of mobile design'>
</div>


<br>

## Demo

Click here: [https://scottwright-dev.github.io/weather-app/](https://scottwright-dev.github.io/weather-app/)

<br>

## Description

A project from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app) to develop an understanding of working with and manipulating API data.

The focus of the assignment was to develop a weather app which fetches and processes JSON data from [WeatherAPI.com](https://www.weatherapi.com) and presents that data to the user dynamically based on their searches.

<br>

## Features

- **Search functionality**:
  Users can search for current weather and a 3-day forecast by city, town, or postal/zip code.

- **Temperature unit toggle**:
  Switch between Celsius and Fahrenheit. Wind speed adjusts accordingly—kph for Celsius and mph for Fahrenheit.

- **Data loading component**:
  After a brief 300ms, an animated spinner surfaces, offering users on slower connections a sign that data is being fetched.

- **Error Handling**:  
  Informative messages are displayed for failed data fetches or when users input unrecognized locations.

- **Responsive UI design**:
  With a mobile-first design approach, the app ensures a consistent user experience on all devices.

- **Webpack Bundling**:
  Optimize resource loading by bundling JavaScript modules with Webpack.

- **User-Friendly Interface**: Include a search bar and real-time data updates for a seamless user experience.

<br>

## Project Reflections

Working with real-world data was very inspiring. Determining which information to present the user ignited my creativity.

While I entertained various data design ideas, I remained mindful of the project's core objective - comprehending API data fetching and manipulation. As a result I opted for a relatively minimal initial implementation with a view to return to the project in future.

<br>

## Key Takeaways

For the UI design I felt this was a good opportunity to try Tailwind for the first time.I appreciated the speed and ease the framework offers for style decisions. Giving defined incremental options of things such as padding and color allowed for swifter decision making rather than tweaking pixel by pixel.

I additionally read and implemented several tips from the [Refactoring UI](https://www.refactoringui.com/). The book provided helpful insights nudging me towards starting with gray-scale designs for example. This approach emphasized the importance of element size and spacing, allowing for a more robust design foundation before introducing color.

The current minimalistic design serves as a foundation for future feature enhancements, especially with access to a more comprehensive API dataset.

My familiarity with Webpack deepened, especially when integrating plugins like HtmlWebpackPlugin and MiniCssExtractPlugin.

<br>

## Enhancement Ideas

- **Geo-location functionality**: Whereby the app detects the users location and automatically presents data to the user on initial load.

- **Extended forecast**: The dataset is currently limited to 3 days by the free tier restrictions of WeatherAPI.

- **Enhanced UI data**: Include hourly forecasts for the upcoming 24 hours and details like sunrise/sunset timings.

- **Autosuggest for Location**: As users type, a predictive-text dropdown list of cities could enhance user experience and minimise input errors.
- **HD Animated Icons**: Incorporate HD animated weather icons for a richer visual appeal.
- **Wind Speed Toggle**: Introduce a separate toggle for users to choose between mph and kph for wind speed, independent of temperature unit.

<br>

## Built With

- **Javascript**
- **HTML**
- **Tailwind**
- **Webpack**

<br>

## Credits

- Favicon logo: [Kosoicon](https://www.flaticon.com/authors/kosonicon) at [flaticon.com](https://www.flaticon.com/)
- Powered by [WeatherAPI.com](https://www.weatherapi.com/)

<br>
