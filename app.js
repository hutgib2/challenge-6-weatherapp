// const url = "https://api.openweathermap.org/data/2.5/forecast?q=sydney&appid=6cc25325826301d0c05a11f987e8648a"
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
