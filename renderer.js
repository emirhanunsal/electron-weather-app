// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the input, button, and result div
    const cityInput = document.getElementById('city');
    const fetchWeatherButton = document.getElementById('fetchWeather');
    const weatherResultDiv = document.getElementById('weatherResult');
  
    // Add an event listener to the button
    fetchWeatherButton.addEventListener('click', async () => {
      const cityName = cityInput.value.trim(); // Get the city name from the input field
  
      if (!cityName) {
        weatherResultDiv.innerHTML = '<p>Please enter a city name.</p>';
        return;
      }
  
      try {
        // Fetch weather data from the OpenWeather API
        const apiKey = ''; // Replace with your OpenWeather API key
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        );
  
        if (!response.ok) {
          throw new Error('City not found');
        }
  
        const weatherData = await response.json();
  
        // Display the weather data
        weatherResultDiv.innerHTML = `
          <p><strong>City:</strong> ${weatherData.name}</p>
          <p><strong>Temperature:</strong> ${weatherData.main.temp}°C</p>
          <p><strong>Weather:</strong> ${weatherData.weather[0].description}</p>
        `;
      } catch (error) {
        // Display error messages
        weatherResultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      }
    });
  });
  