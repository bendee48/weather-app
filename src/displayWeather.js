// Selects display HTML elements and updates targets with weather data

const displayWeather = (()=> {
    // Target HTML display elements
    const place = document.querySelector('.place');
    const desc = document.querySelector('.description');
    const icon = document.querySelector('.icon');
    const tempC = document.querySelector('.temp_c');
    const tempF = document.querySelector('.temp_f');

    /*
      Updates HTML elements for displaying weather data.
      @param {Object} data - Weather data object containing the following properties:
      @param {string} data.area - The name of the city or area.
      @param {string} data.country - The name of the country.
      @param {string} data.condition - The weather condition (e.g., "Sunny", "Cloudy").
      @param {string} data.icon - The URL of the weather icon image.
      @param {number} data.tempC - The temperature in Celsius.
      @param {number} data.tempF - The temperature in Fahrenheit.
    */  
    function updateElements(data) {
      place.textContent = `${data.area}, ${data.country}`;
      desc.textContent = data.condition;
      icon.src = data.icon;
      icon.style.visibility = 'visible';
      tempC.textContent = data.tempC + ' \u00B0C';
      tempF.textContent = data.tempF + ' \u2109';
    }

    return { updateElements };
})();

export default displayWeather;