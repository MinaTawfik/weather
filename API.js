let cityInput = document.getElementById("location")

document.querySelector("#location")?.addEventListener("keyup", function(){
    getWeatherFor3Days(cityInput.value)
})

document.querySelector("#location")?.addEventListener("keyup", function(){
    if (cityInput.value == ""){
        document.getElementById("days").innerHTML = ""
    }
})

async function getWeatherFor3Days(city){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e89e30175c1348d0927184930232812&q=${city}&days=3`)
    let finalResponse = await response.json()
    showDays(finalResponse)
}

function showDays(allInfo){
    let showHTML = `<h1 class="w-100 text-center m-5">${allInfo.location.name}</h1>`
    for (let i = 0 ; i < allInfo.forecast.forecastday.length ; i++){
        console.log(allInfo.forecast.forecastday.length)
        showHTML += `
        <div class="col d-flex justify-content-center">
            <div class="d-flex justify-content-center w-75 flex-wrap border border-2 border-black rounded-2 p-5" id="card1">
                    <P>${allInfo.forecast.forecastday[i].date}</P>
                    <h1 class="w-100 text-center">${allInfo.forecast.forecastday[i].day.mintemp_c}&degC</h1>
                    <h1 class="w-100 text-center">${allInfo.forecast.forecastday[i].day.maxtemp_c}&degC</h1>
                    <img src="${allInfo.forecast.forecastday[i].day.condition.icon}" alt="" class="weather-icon">
                    <h4 class="w-100 text-center">${allInfo.forecast.forecastday[i].day.condition.text}</h4>
            </div>
        </div>
        `
    }
    document.getElementById("days").innerHTML = showHTML
}

// function showCurrent(allInfo){
//     let showHTML = ""
//     showHTML += `
//     <div class="col">
//         <div class="d-flex justify-content-center flex-wrap w-25 border-1 bg-white" id="card1">
//                 <P>${currentDate()}</P>
//                 <h2 class="w-100 text-center">${allInfo.location.name}</h2>
//                 <h1 class="w-100 text-center">${allInfo.current.temp_c}&degC</h1>
//                 <img src="${allInfo.current.condition.icon}" alt="" class="weather-icon">
//                 <h4 class="w-100 text-center">${allInfo.current.condition.text}</h4>
//         </div>
//     </div>
//     `
//     document.getElementById("current").innerHTML = showHTML
// }

// function currentDate(){
//     let date = new Date()
//     let day = date.getDay()
//     let month = date.getMonth() + 1
//     let year = date.getFullYear()
//     if(day < 10){
//         day = `0${day}`
//     }
//     if(month < 10){
//         month = `0${month}`
//     }
//     let current_date = `${year}-${month}-${day}`
//     return current_date
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
