let cityInput = document.getElementById("location")

document.querySelector("#location")?.addEventListener("keyup", function(){
    getWeatherFor3Days(cityInput.value)
})

async function getWeatherFor3Days(city){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e89e30175c1348d0927184930232812&q=${city}&days=2`)
    let finalResponse = await response.json()
    showCurrent(finalResponse)
}

function showCurrent(allInfo){
    let showHTML = ""
    showHTML += `
    <h4 class="w-100 text-center">${allInfo.location.name}</h4>
    `
    document.getElementById("current").innerHTML = showHTML
}



// function showDays(allInfo){
//     for (let i = 0 ; i < getWeatherFor3Days(city).forecast.forecastday.length ; i++){
//         showHTML += `
    
//         `
//     }
// }




// getWeatherFor3Days(city)


// location.name

// current.temp_c
// current.condition.icon
// current.condition.text

// current.wind_kph
// -------------
// forecast.forecastday[i].date
// forecast.forecastday[i].day.condition.mintemp_c
// forecast.forecastday[i].day.condition.maxtemp_c
// forecast.forecastday[i].day.condition.icon
// forecast.forecastday[i].day.condition.text

// forecast.forecastday[i].day.condition.maxwind_kph
