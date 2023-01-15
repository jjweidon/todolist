const API_KEY = "47e50d80650ec92bc98de4786094c9ac";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:nth-child(1)");
            const city = document.querySelector("#weather span:nth-child(2)");
            const temperature = document.querySelector("#weather span:nth-child(3)");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
            temperature.innerText = data.main.temp;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
