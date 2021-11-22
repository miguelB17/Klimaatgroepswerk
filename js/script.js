window.addEventListener('load', loaded);

function loaded() {
    let searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', fetchQuality);
}
let lon;
let lat;
function fetchQuality() {
    const key = "a4d3731dd5e5d5c47104ea1db2a27ebb"
    const userInput = document.getElementById('userInput').value;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=64d4d5bbaf0f4bdfa76200049211011&q=${userInput}&days=1&aqi=yes&alerts=no`;
    fetch(url).then(response => response.json().then(data => {
        lat = data.location.lat;
        lon = data.location.lon;
        fetch(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
        .then(response => response.json()).then(data => {
          let aqiValue = data.list[0].main.aqi
          console.log(aqiValue)
          if (aqiValue == 1){ 
            return document.getElementById('apiTest').innerHTML = `<div class="alert alert-success" role="alert">
            test
          </div>`;
          }else if (aqiValue == 2){
            return document.getElementById('apiTest').innerHTML = `<div class="alert alert-info" role="alert">
            test
          </div>`;
  
          }else if (aqiValue == 3){
            return document.getElementById('apiTest').innerHTML = `<div class="alert alert-warning" role="alert">
            test
          </div>`;
  
          }else if (aqiValue == 4){
            return document.getElementById('apiTest').innerHTML = `<div class="alert alert-dark" role="alert">
            test
          </div>`;
  
          }else if (aqiValue == 5){
            return document.getElementById('apiTest').innerHTML = `<div class="alert alert-secondary" role="alert">
            test
          </div>`;
  
          }else if (aqiValue == 6){
            return document.getElementById('apiTest').innerHTML = `<div class="alert alert-danger" role="alert">
            test
          </div>`;
          }
        })
        
        
    })).catch(error => document.getElementById('apiTest').innerHTML = `<div class="alert alert-danger" role="alert">
    ${error.message}
  </div>`)
}