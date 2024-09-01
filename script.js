const inputfield = document.querySelector(".inputfield")
const weatherImg = document.querySelector(".weather-img")
const apikey = "fc3a0c1fb469ed6b4a3596857d21243b"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function weather(city) {
    const apifetch = await fetch(apiURL + city + `&appid=${apikey}`)
    const apidata = await apifetch.json()
    console.log(apidata);

    if (apidata.cod == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".data").style.display = "none"
    }
    else {
        document.querySelector(".error").style.display = "none"
        document.querySelector(".temp").innerHTML = Math.round(apidata.main.temp) + "°C"
        document.querySelector(".city").innerHTML = apidata.name
        document.querySelector(".wind-speed").innerHTML = apidata.wind.speed + " km/h"
        document.querySelector(".humidity").innerHTML = apidata.main.humidity + "%"

        if (apidata.weather[0].main == "Clear") {
            weatherImg.src = "/images/clear.png"
        }

        else if (apidata.weather[0].main == "Clouds") {
            weatherImg.src = "/images/clouds.png"
        }

        else if (apidata.weather[0].main == "Drizzle") {
            weatherImg.src = "/images/drizzle.png"
        }

        else if (apidata.weather[0].main == "Mist") {
            weatherImg.src = "/images/mist.png"
        }

        else if (apidata.weather[0].main == "Rain") {
            weatherImg.src = "/images/rain.png"
        }

        else if (apidata.weather[0].main == "Snow") {
            weatherImg.src = "/images/snow.png"
        }

        document.querySelector(".data").style.display = "block"
    }

}

document.querySelector(".search-btn").addEventListener("click", () => {
    weather(inputfield.value)
    inputfield.value = ''
})
