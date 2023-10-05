import loader from './loader';

/**
 * Module for creating and displaying page elements.
 * @module display
 */

const display = (()=> {
    // Target HTML display elements
    const content = document.querySelector('.content');
    // Create HTML display elements
    const place = createElement('h1', {class: ['place']});
    const desc = createElement('p', {class: ['description']});
    const icon = createElement('img', {class:  ['icon'], src: '#', alt: 'Weather Icon'});
    const tempC = createElement('p', {class: ['temps', 'temp_c']});
    const tempF = createElement('p', {class: ['temps', 'temp_c']});

    /**
     * Creates an HTML element with specified attributes.
     * 
     * @param {string} elementName - The name of the HTML element to create (e.g., 'div', 'img', 'p').
     * @param {Object} attributes - An object containing attributes and their values for the element.
     *                              Classes have an array value for multiple class names.
     * @returns {HTMLElement} - The created HTML element.
     */
    function createElement(elementName, attributes) {
      const element = document.createElement(elementName);
      for (let [key, value] of Object.entries(attributes)) {
        if (key === 'class') {
          // Join names of classes in array
          element.setAttribute(key, value.join(' '));
        } else {
          element.setAttribute(key, value);
        }
      }

      return element;
    }

    // Add display elements to page container
    function addWeatherElements() {
      const elements = [place, desc, icon, tempC, tempF];
      elements.forEach(el => content.appendChild(el));
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
    function updatedElements(data) {
      clear();
      place.textContent = `${data.area}, ${data.country}`;
      desc.textContent = data.condition;
      icon.src = data.icon;
      icon.style.visibility = 'visible';
      tempC.textContent = data.tempC + ' \u00B0C';
      tempF.textContent = data.tempF + ' \u2109';
      addWeatherElements();
    }

    // Add loading icon to container
    function loadingIcon() {
      clear();
      content.appendChild(loader.createLoader());
    }

    // Clear elements from the content container
    function clear() {
      content.innerHTML = '';
    }

    return { updatedElements, loadingIcon, clear };
})();

export default display;
