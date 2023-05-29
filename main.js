const apiKey = '441a55bf31ca493eadd235239231704';

// Call api {returns Promise}
function getWeather(query='london') {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;
  const res = fetch(url)
                .then(response => response.json())
                .then(data => {
                  console.log(data)
                  return data;
                })
                .catch(err => console.log(err))

  return Promise.resolve(res);
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


getWeather('manchester').then(data => console.log(processData(data)))