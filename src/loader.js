/**
 * Module for creating loader elements to display loading icons.
 * @module loader
 */

const loader = (()=> {
  /**
    * Creates a loader element to display a loading icon.
    *
    * @returns {HTMLElement} The loader element with the 'loader' class added.
  */
  function createLoader() {
    // Create a new div element to represent the loader
    const loadIcon = document.createElement('div');
    // Add the 'loader' class to the loader element for styling
    loadIcon.classList.add('loader');

    return loadIcon;
  }

  // Expose the createLoader function as part of the module's public interface
  return { createLoader }
})();

export default loader;