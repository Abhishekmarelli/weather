const key = "bdf68214f3e479e1bbb7ab23d04d9d90";
const baseurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const city = document.getElementById('city');
const btn = document.getElementById('src-btn');
let Temp = document.getElementById('temp');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
const img = document.getElementById('weather-icon')



btn.onclick = () => {
    const src = document.getElementById('src-box').value;
    city.innerText = src;
    weather();
}

async function weather() {
    fetch(baseurl + `&q=${city.innerText}` + `&appid=${key}`)
        .then(response => response.json())
        .then(data => {

            if (data.weather[0].main == 'Haze') {
                img.src = "/weather/assests/mist.png";
            }
            else if (data.weather[0].main == 'Clouds') {

                img.src = "/weather/assests/clouds.png"
            }
            else if (data.weather[0].main == 'Clear') {

                img.src = "/weather/assests/clear.png"
            }
            else if (data.weather[0].main == 'Rain') {

                img.src = "/weather/assests/rain.png"
            }
            else if (data.weather[0].main == 'Drizzle') {

                img.src = "/weather/assests/drizzle.png"
            }
            else if (data.weather[0].main == 'Snow') {

                img.src = "/weather/assests/snow.png"
            }
            Temp.innerText = data.main.temp + '°C';
            humidity.innerText = data.main.humidity + '%';
            wind.innerText = data.wind.speed + 'Km/hr';
        });






}