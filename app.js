function addCityButton(cityName) {
  const citiesDiv = document.querySelector('.cities');
  const button = document.createElement('button');
  button.innerText = cityName;
  button.addEventListener('click', function() {
    getcityweather(cityName);
  });
  citiesDiv.appendChild(button);
}

const date1 = document.getElementById("date1")
const date2 = document.getElementById("date2")
const date3 = document.getElementById("date3")
const date4 = document.getElementById("date4")
const date5 = document.getElementById("date5")
const humidity1 = document.getElementById("humidity1")
const humidity2 = document.getElementById("humidity2")
const humidity3 = document.getElementById("humidity3")
const humidity4 = document.getElementById("humidity4")
const humidity5 = document.getElementById("humidity5")
const wind1 = document.getElementById("wind1")
const wind2 = document.getElementById("wind2")
const wind3 = document.getElementById("wind3")
const wind4 = document.getElementById("wind4")
const wind5 = document.getElementById("wind5")
const temp1 = document.getElementById("temp1")
const temp2 = document.getElementById("temp2")
const temp3 = document.getElementById("temp3")
const temp4 = document.getElementById("temp4")
const temp5 = document.getElementById("temp5")
const cityname2 = document.getElementById("cityname")
const temp = document.getElementById("temp")
const wind = document.getElementById("wind")
const humidity = document.getElementById("humidity")

function getcityweather(cityname){
  console.log(cityname)
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=00539ec9f39f3729fd3d81f919a56263&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      console.log(data.list[0].dt_txt)
      temp1.innerText = `Temp: ${data.list[8].main.temp} C`
      temp2.innerText = `Temp: ${data.list[16].main.temp} C`
      temp3.innerText = `Temp: ${data.list[24].main.temp} C`
      temp4.innerText = `Temp: ${data.list[32].main.temp} C`
      temp5.innerText = `Temp: ${data.list[39].main.temp} C`
      wind1.innerText = `Wind: ${data.list[8].wind.speed} KM/H`
      wind2.innerText = `Wind: ${data.list[16].wind.speed} KM/H`
      wind3.innerText = `Wind: ${data.list[24].wind.speed} KM/H`
      wind4.innerText = `Wind: ${data.list[32].wind.speed} KM/H`
      wind5.innerText = `Wind: ${data.list[39].wind.speed} KM/H`
      humidity1.innerText = `Humidity: ${data.list[8].main.humidity} %`
      humidity2.innerText = `Humidity: ${data.list[16].main.humidity} %`
      humidity3.innerText = `Humidity: ${data.list[24].main.humidity} %`
      humidity4.innerText = `Humidity: ${data.list[32].main.humidity} %`
      humidity5.innerText = `Humidity: ${data.list[39].main.humidity} %`
      date1.innerText = ` ${data.list[8].dt_txt.slice(0, 10)} `
      date2.innerText = ` ${data.list[16].dt_txt.slice(0, 10)} `
      date3.innerText = ` ${data.list[24].dt_txt.slice(0, 10)} `
      date4.innerText = ` ${data.list[32].dt_txt.slice(0, 10)} `
      date5.innerText = ` ${data.list[39].dt_txt.slice(0, 10)}`

      cityname2.innerText = `${data.city.name} ${data.list[39].dt_txt.slice(0, 10)}`
      temp.innerText = `Temp: ${data.list[0].main.temp} C`
      wind.innerText = `Wind: ${data.list[0].wind.speed} KM/H`
      humidity.innerText = `Humidity: ${data.list[0].main.humidity} %`
      addCityButton(data.city.name)
      console.log(data.list[7].dt_txt)
      console.log(data.list[15].dt_txt)
      console.log(data.list[23].dt_txt)
      console.log(data.list[32].dt_txt)
});
}
document.getElementById(
  "search"
).addEventListener("click", () => {
  var input = document.getElementById(
    "city-input"
  ).value
  getcityweather(input)
})