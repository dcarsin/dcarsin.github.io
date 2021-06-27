const cityId = "5604473";
const appid = "5b50051966e4b3d19e4a0dbfa46385d8";

const apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${appid}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {      
    console.log(jsObject);
    const temperature = document.querySelector('#current-temp').textContent =  jsObject.list[0].main.temp.toFixed(1);
    
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc.toUpperCase());
  });

