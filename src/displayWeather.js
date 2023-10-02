import loader from './loader';

/**
 * Module for creating and displaying elements for weather data.
 * @module displayWeather
 */

const displayWeather = (()=> {
    // Target HTML display elements
    const content = document.querySelector('.content');
    // Create HTML display elements
    const place = createPlaceTitle();
    const desc = createDescription();
    const icon = createIcon();
    const tempC = createTempC();
    const tempF = createTempF();

    
    function createPlaceTitle() {
      const place = document.createElement('h1');
      place.classList.add('place');
      
      return place;
    }
    
    function createDescription() {
      const description = document.createElement('p');
      description.classList.add('description');
      
      return description;
    }
    
    function createIcon() {
      const icon = document.createElement('img');
      icon.classList.add('icon');
      icon.src = '#';
      icon.alt = 'Weather Icon'
      
      return icon;
    }

    function createTempC() {
      const temp = document.createElement('p');
      temp.classList.add('temp_c', 'temps');
      
      return temp;
    }

    function createTempF() {
      const temp = document.createElement('p');
      temp.classList.add('temp_f', 'temps');
      
      return temp;
    }

    // Add display elements to container
    function addWeatherElements() {
      content.appendChild(place);
      content.appendChild(desc);
      content.appendChild(icon);
      content.appendChild(tempC);
      content.appendChild(tempF);
    }
    
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
    function updateWeatherElements(data) {
      clearContent();
      addWeatherElements();
      place.textContent = `${data.area}, ${data.country}`;
      desc.textContent = data.condition;
      icon.src = data.icon;
      icon.style.visibility = 'visible';
      tempC.textContent = data.tempC + ' \u00B0C';
      tempF.textContent = data.tempF + ' \u2109';
    }

    function displayLoadingIcon() {
      clearContent();
      content.appendChild(loader.createLoader());
    }

    function clearContent() {
      content.innerHTML = '';
    }

    return { updateWeatherElements, displayLoadingIcon, clearContent };
})();

export default displayWeather;
