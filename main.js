const apiKey = '441a55bf31ca493eadd235239231704';

function getWeather(query='london') {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

getWeather('california')