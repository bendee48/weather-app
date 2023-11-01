import display from "./display";

const apiKey = '441a55bf31ca493eadd235239231704';

// Call api {returns Promise}
function callAPI(query='london') {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;
  const result = fetch(url)
                  .then(response => response.json())
                  .then(data => {
                    return data;
                  })
                  .catch(err => {
                    console.log('API error', err) 
                  })
                
  return result;
}

// Process json returned from API for usable info
function processData(data) {
  let tempC = data.current.temp_c;
  let tempF = data.current.temp_f;
  let condition = data.current.condition.text;
  let icon = data.current.condition.icon;
  let country = data.location.country;
  let area = data.location.name;

  return { tempC, tempF, condition, icon, country, area }
}

// Grab search form
const form = document.querySelector('.searchForm');
const queryBox = document.getElementById('queryBox');
form.addEventListener('submit', getQueryTerm);

// Extract query from search form
function getQueryTerm(e) {
  e.preventDefault();
  display.loadingIcon();
  const searchData = new FormData(e.target);
  const query = searchData.get('query');
  getWeather(query);
}

/**
 Calls API then displays results
 @param {string} query - Search term eg 'London', 'Orlando', 'Copenhagen Denmark' etc
 */
function getWeather(query) {
  callAPI(query)
  .then(data => {
      display.updatedElements(processData(data));
      // Clear search box if search successful, ready for new search
      queryBox.value = '';
    })
    .catch(e => {
      display.error('No results: Please check spelling. Or be more specific. eg \'Waterloo, London, UK\'. If problem persists the API may not be available, please try again later.');
      console.log('Something done went wrong. No data.', e);
    })
}

