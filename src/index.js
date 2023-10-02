import displayWeather from "./displayWeather";

const apiKey = '441a55bf31ca493eadd235239231704';

// Call api {returns Promise}
function callAPI(query='london') {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;
  const result = fetch(url)
                .then(response => response.json())
                .then(data => {
                  return data;
                })
                .catch(err => console.log('eRRor', err))

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

// Grab loader
//const loader = document.querySelector('.loader');

// Extract query from search form
function getQueryTerm(e) {
  e.preventDefault();
  //loader.style.visibility = 'visible'; // show loader on search
  displayWeather.displayLoadingIcon();
  const searchData = new FormData(e.target);
  const query = searchData.get('query');
  queryBox.value = '';
  getWeather(query);
}

/*
  Calls API then displays results
  @param {string} query - Search term eg 'London', 'Orlando', 'Copenhagen Denmark' etc
*/
function getWeather(query) {
  callAPI(query)
    .then(data => {
      //loader.style.visibility = 'hidden'; // hide loader once weather is ready to be shown
      displayWeather.updateWeatherElements(processData(data));
    })
    .catch(e => console.log('Something done went wrong', e));
}

//getWeather('la').then(data => console.log(data)).catch(err => console.log('cant process data'))
//getWeather(getQueryTerm()).then(data => console.log(data))
