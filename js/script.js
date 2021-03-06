window.addEventListener('load', loaded);

function loaded() {
    let searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', fetchQuality);
}
let lon;
let lat;
function fetchQuality() {
    const key = "a4d3731dd5e5d5c47104ea1db2a27ebb"
    const streetInput = document.getElementById('streetInput').value;
    const cityInput = document.getElementById('cityInput').value;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${streetInput}${cityInput}.json?access_token=pk.eyJ1IjoibG90ZXJpaiIsImEiOiJja3dhZ2x5azAweTZ4MndwMjYweWhtYjU2In0.yy6aG7jhekprocfAs2axSw`;
    fetch(url).then(response => response.json().then(data => {
        const userInput = streetInput + " " + cityInput;
        if (streetInput.length == 0){
          for(i of data.features){
            if(i.place_name.toUpperCase().includes(cityInput.toUpperCase()) & i.place_type == "place"){
              [i.center[0], i.center[1]] = [i.center[1], i.center[0]]
              lat = i.center[0];
              lon = i.center[1];
            }
          }
        }else {
          for (i of data.features){
            if (i.place_name.toUpperCase().includes(cityInput.toUpperCase()) == true & i.place_type == "address"){
                [i.center[0], i.center[1]] = [i.center[1], i.center[0]]
                lat = i.center[0];
                lon = i.center[1];
            }
        } 
        }
        fetch(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
        .then(response => response.json()).then(data => {
          let aqiValue = data.list[0].main.aqi;
          let reset = document.querySelectorAll('#collapseOne, #collapseTwo, #collapseThree, #collapseFour, #collapseFive, #collapseSix');
          for (i of reset){
            i.classList.remove('show')
          }
          if (aqiValue == 1){
            let accordionReturn = document.getElementById('collapseOne').classList.add('show') 
            let apiReturn = document.getElementById('apiTest').innerHTML = `<div class="alert alert-success" role="alert">
            <iframe width="1900" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${userInput}+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=31ad442e590a45bb42c3051d4d4e3370e63d5b73'></script>
          </div>`;
          return [accordionReturn, apiReturn];
          }else if (aqiValue == 2){
            let accordionReturn = document.getElementById('collapseTwo').classList.add('show')
            let apiReturn = document.getElementById('apiTest').innerHTML = `<div class="alert alert-info" role="alert">
            <iframe width="1900" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${userInput}+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=31ad442e590a45bb42c3051d4d4e3370e63d5b73'></script>
          </div>`;
          return [accordionReturn, apiReturn];
  
          }else if (aqiValue == 3){
            let accordionReturn = document.getElementById('collapseThree').classList.add('show')
            let apiReturn = document.getElementById('apiTest').innerHTML = `<div class="alert alert-warning" role="alert">
            <iframe width="1900" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${userInput}+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=31ad442e590a45bb42c3051d4d4e3370e63d5b73'></script>
          </div>`;
          return [accordionReturn, apiReturn];
  
          }else if (aqiValue == 4){
            let accordionReturn = document.getElementById('collapseFour').classList.add('show')
            let apiReturn = document.getElementById('apiTest').innerHTML = `<div class="alert alert-dark" role="alert">
            <iframe width="1900" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${userInput}+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=31ad442e590a45bb42c3051d4d4e3370e63d5b73'></script>
          </div>`;
          return [accordionReturn, apiReturn];
  
          }else if (aqiValue == 5){
            let accordionReturn = document.getElementById('collapseFive').classList.add('show')
            let apiReturn = document.getElementById('apiTest').innerHTML = `<div class="alert alert-secondary" role="alert">
            <iframe width="1900" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${userInput}+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=31ad442e590a45bb42c3051d4d4e3370e63d5b73'></script>
          </div>`;
          return [accordionReturn, apiReturn];
  
          }else if (aqiValue == 6){
            let accordionReturn = document.getElementById('collapseSix').classList.add('show')
            let apiReturn = document.getElementById('apiTest').innerHTML = `<div class="alert alert-danger" role="alert">
            <iframe width="1900" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${userInput}+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=31ad442e590a45bb42c3051d4d4e3370e63d5b73'></script>
          </div>`;
          return [accordionReturn, apiReturn];
          
          }
        })
        
        
    })).catch(error => document.getElementById('apiTest').innerHTML = `<div class="alert alert-danger" role="alert">
    ${error.message}
  </div>`)
}