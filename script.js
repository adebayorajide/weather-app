
const btnEl = document.getElementById('btn');
const inputEl = document.getElementById('input');
const locationEl = document.getElementById('location');
const degreeEl = document.getElementById('degree');
const stateEl = document.getElementById('state');
const hourlyEl = document.querySelectorAll('.time-update')

const getWeatherData = (city) => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5480b84544e71353e6df877f882a917`)
    .then(data => {
        return data.json();
    }).then(showWeatherData);

 }

const searchData =  () => {
    const city = inputEl.value;
    console.log(city);
    getWeatherData(city);
}

const getResult = () => {
    let d = new Date();
    let time = d.getHours;
    if(d.getHours = 10) {
        hourlyEl[0].innerHTML = `<h3>${d.getHours}</h3> <br> <img src=" " /> <br> <h3>${data.main.temp}<span>&#8451;`;
        hourlyEl.style.backgroundColor = "purple";
    } else if (d.getHours = 11) {
        hourlyEl[1].innerHTML = `<h3>${d.getHours}</h3> <br> <img src=" " /> <br> <h3>${data.main.temp}<span>&#8451;`;
        hourlyEl.style.backgroundColor = "purple";
    } else if (d.getHours = 12) {
        hourlyEl[1].innerHTML = `<h3>${d.getHours}</h3> <br> <img src=" " /> <br> <h3>${data.main.temp}<span>&#8451;`;
        hourlyEl.style.backgroundColor = "purple";
    } else if (d.getHours = 14) {
        hourlyEl[1].innerHTML = `<h3>${d.getHours}</h3> <br> <img src=" " /> <br> <h3>${data.main.temp}<span>&#8451;`;
        hourlyEl.style.backgroundColor = "purple";
    } else if (d.getHours = 15) {
        hourlyEl[1].innerHTML = `<h3>${d.getHours}</h3> <br> <img src=" " /> <br> <h3>${data.main.temp}<span>&#8451;`;
        hourlyEl.style.backgroundColor = "purple";
    }
}

const showWeatherData = (data) => {
    console.log(data);
    locationEl.innerText = data.name;
    degreeEl.innerHTML = `${data.main.temp}<span>&#8451;</span>`;
    stateEl.innerHTML = `${data.weather[0].main}`;
    document.getElementById('max-temp').innerHTML = `H:${data.main.temp_max}<span>&#8451;</span>`;
    document.getElementById('min-temp').innerHTML = `L:${data.main.temp_min}<span>&#8451;</span>`;
    hourlyEl.forEach(() => {
       setTimeout(getResult, 600000);
    })
}


btnEl.addEventListener("click", searchData);
