window.addEventListener('load', loaded);

function loaded() {
    let searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', fetchQuality);
}

function fetchQuality() {
    const userInput = document.getElementById('userInput').value;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=64d4d5bbaf0f4bdfa76200049211011&q=${userInput}&days=1&aqi=yes&alerts=no`;
    fetch(url).then(response => response.json().then(data => {
        const air = data.current.air_quality;
        let arrayKeys = [];
        for (const key in air){
            arrayKeys.push(key, air[key].toFixed(2));
        }
        if (arrayKeys[13] == "1.00"){ 
          return document.getElementById('apiTest').innerHTML = `<div class="alert alert-success" role="alert">
          ${data.location.name}<br>${data.location.country}<br>${arrayKeys.join(' ')}<br>
        </div>`;
        }else if (arrayKeys[13] == "2.00"){
          return document.getElementById('apiTest').innerHTML = `<div class="alert alert-info" role="alert">
          ${data.location.name}<br>${data.location.country}<br>${arrayKeys.join(' ')}<br>
        </div>`;

        }else if (arrayKeys[13] == "3.00"){
          return document.getElementById('apiTest').innerHTML = `<div class="alert alert-warning" role="alert">
          ${data.location.name}<br>${data.location.country}<br>${arrayKeys.join(' ')}<br>
        </div>`;

        }else if (arrayKeys[13] == "4.00"){
          return document.getElementById('apiTest').innerHTML = `<div class="alert alert-dark" role="alert">
          ${data.location.name}<br>${data.location.country}<br>${arrayKeys.join(' ')}<br>
        </div>`;

        }else if (arrayKeys[13] == "5.00"){
          return document.getElementById('apiTest').innerHTML = `<div class="alert alert-secondary" role="alert">
          ${data.location.name}<br>${data.location.country}<br>${arrayKeys.join(' ')}<br>
        </div>`;

        }else if (arrayKeys[13] == "6.00"){
          return document.getElementById('apiTest').innerHTML = `<div class="alert alert-danger" role="alert">
          ${data.location.name}<br>${data.location.country}<br>${arrayKeys.join(' ')}<br>
        </div>`;
        }
        
        console.log("test" + arrayKeys)
    })).catch(error => document.getElementById('apiTest').innerHTML = `<div class="alert alert-danger" role="alert">
    ${error.message}
  </div>`)
}
