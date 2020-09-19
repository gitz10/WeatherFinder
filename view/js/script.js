function Weather() {
}

Weather.prototype.fetchResults = function() {

    let city = weatherApp.$city.value;
    let key = '711a0af6cea834b4455057aa00cdbccf';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city+ '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          console.log(data);
          console.log(data.name);
          console.log(data.weather[0].description);
          document.getElementById('selectedCity').innerHTML = data.name;
          document.getElementById('selctedWeather').innerHTML = data.weather[0].description;
          document.getElementById('selectedStatus').innerHTML = 'Wind speed: '+data.wind.speed;
        })
        .catch(function() {
          // catch any errors
        });


}

Weather.prototype.onKeyup = function(e) {
  
}

Weather.prototype.updatecitySelect = function(results) {
  
}

Weather.prototype.updateSuggestions = function() {
  
}

Weather.prototype.reset = function() {
  weatherApp.init();
  weatherApp.$city.value = '';
  document.getElementById('selectedCity').innerHTML = '';
  document.getElementById('selctedWeather').innerHTML = '';
  document.getElementById('selectedStatus').innerHTML = '';

}
/*const debounceEvent = (callback, time = 250, interval) =>
    (...args) => {
      clearTimeout(interval);
      interval = setTimeout(() => callback(...args), time);
    }*/
Weather.prototype.debounce = (callback, delay = 250) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      timeoutId = null
      callback(...args)
    }, delay)
  }
}

Weather.prototype.init = function() {
  this.timer = null;
  this.weatherResults = [];
  this.$city = document.getElementById('city');
  this.$suggestions = document.getElementById('suggestions');
  this.$selectedInfo = document.getElementById('selectedCityInfo');
  this.$selectedCity = document.getElementById('selectedCity');
  this.$selctedWeather = document.getElementById('selctedWeather');
  this.$selectedStatus = document.getElementById('selectedStatus');
  this.$resetBtn = document.getElementById('resetBtn');
  this.$fetchWeatherBtn = document.getElementById('fetchBtn');
  this.$city.addEventListener('keyup', this.onKeyup.bind(this));
  this.$resetBtn.addEventListener('click', this.reset.bind(this));
}

var weatherApp = new Weather();
weatherApp.init();

