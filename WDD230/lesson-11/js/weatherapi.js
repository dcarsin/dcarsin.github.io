
const apiURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=Montevideo&cnt=7&appid=e62b2530fdb5f4ba3559c07c8634e5c7&lang=es&units=metric`;



fetch(apiURL)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
        console.log(jsonData.message);
        if (jsonData.message != 'city not found'){
            let daysWeeks = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
            console.log("temp actual: "+jsonData.list[0].temp.day);
            console.log("max hoy: "+jsonData.list[0].temp.max);
            console.log("min hoy: "+jsonData.list[0].temp.min);
            console.log("img hoy: "+jsonData.list[0].weather[0].icon+".png");
            for (let i = 0; i < jsonData.list.length; i++) {
                const element = array[i];
                
            }
        }
        // if jsonData.message: "city not found"
        const sortList = jsonData.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
        console.log(sortList);
        sortList.forEach(data => {
            console.log(data);
            let divGridCol = document.createElement('div');
            let span = document.createElement('span');
            let image = document.createElement('img');
            let spanData = document.createElement('span');

            divGridCol.setAttribute('class', 'grid-col');
            let day = new Date(data.dt_txt).getDay();
            span.textContent = daysWeeks[day];

            const imagesrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;  // note the concatenation
            const desc = data.weather[0].description;  // note how we reference the weather array
            image.textContent = imagesrc;  // informational specification only
            image.setAttribute('src', imagesrc);  // focus on the setAttribute() method
            image.setAttribute('alt', desc);
            spanData.setAttribute('class', 'data');
            spanData.innerHTML = `${data.main.temp.toFixed(1)}&deg; F`;

            divGridCol.appendChild(span);
            divGridCol.appendChild(image);
            divGridCol.appendChild(spanData);
            document.querySelector('div.grid').appendChild(divGridCol);
        })
    });

    fetch(apiURL)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {  
        console.log(jsonData);
        // <section class="stats">
        //     <h3>Summary</h3>
        //     <p>Currently: <span class="heroData"></span></p>
        //     <p>High: <span class="heroData"></span>&deg;</p>
        //     <p>Wind Chill: <span class="heroData"></span>mph</p>
        //     <p>Humidity: <span class="heroData"></span>%</p>
        //     <p>Wind Speed: <span class="heroData"></span>mph</p>
        // </section>      
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let curr = document.createElement('span');
        let high = document.createElement('span');
        let windChill = document.createElement('span');
        let hum = document.createElement('span');
        let windSpeed = document.createElement('span');
        
        curr.setAttribute('class', 'heroData');
        high.setAttribute('class', 'heroData');
        windChill.setAttribute('class', 'heroData');
        hum.setAttribute('class', 'heroData');
        windSpeed.setAttribute('class', 'heroData');

        h3.textContent = `Summary`;
        curr.textContent = `Currently: ${jsonData.list[0].weather[0].main}`;
        high.innerHTML = `High: ${jsonData.list[0].main.temp_max.toFixed(1)}&deg; F`;
        if (jsonData.list[0].wind.speed > 4.8 && jsonData.list[0].weather[0].main < 50) {
            let chill = windChill(jsonData.list[0].weather[0].main, jsonData.list[0].wind.speed);
            windChill.innerHTML = `Wind Chill: ${chill}mph`;
        } else {
            windChill.textContent = `Wind Chill: N/A`;
        }
        hum.innerHTML = `Humidity: ${jsonData.list[0].main.humidity}%`;
        windSpeed.innerHTML = `Wind Speed: ${jsonData.list[0].wind.speed}mph`;
        p1.appendChild(curr);
        p2.appendChild(high);
        p3.appendChild(windChill);
        p4.appendChild(hum);
        p5.appendChild(windSpeed);
        document.querySelector('section.stats').appendChild(h3);
        document.querySelector('section.stats').appendChild(p1);
        document.querySelector('section.stats').appendChild(p2);
        document.querySelector('section.stats').appendChild(p3);
        document.querySelector('section.stats').appendChild(p4);
        document.querySelector('section.stats').appendChild(p5);
    })

function windChill(temp, speed){
    let windChill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * (speed)^0.16;
    return windChill;
}



// let actualTown = location.pathname;
// let cutTown = actualTown.slice(1).split('.html');
// actualTown = cutTown[0];
// // console.log(actualTown);
// let cityId = "5604473";
// if (actualTown == "sodaSprings"){
//   cityId = "5607916";
// } else if (actualTown == "fishHaven"){
//   cityId = "5585000";
// } 
// // console.log(cityId);

// const appid = "5b50051966e4b3d19e4a0dbfa46385d8";
// const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${appid}&units=imperial`;



// fetch(apiURL)
//     .then((response) => {
//         return response.json()
//     })
//     .then((jsonData) => {
//         console.log(jsonData);
//         let daysWeeks = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//         const sortList = jsonData.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
//         console.log(sortList);
//         sortList.forEach(data => {
//             console.log(data);
//             let divGridCol = document.createElement('div');
//             let span = document.createElement('span');
//             let image = document.createElement('img');
//             let spanData = document.createElement('span');

//             divGridCol.setAttribute('class', 'grid-col');
//             let day = new Date(data.dt_txt).getDay();
//             span.textContent = daysWeeks[day];

//             const imagesrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;  // note the concatenation
//             const desc = data.weather[0].description;  // note how we reference the weather array
//             image.textContent = imagesrc;  // informational specification only
//             image.setAttribute('src', imagesrc);  // focus on the setAttribute() method
//             image.setAttribute('alt', desc);
//             spanData.setAttribute('class', 'data');
//             spanData.innerHTML = `${data.main.temp.toFixed(1)}&deg; F`;

//             divGridCol.appendChild(span);
//             divGridCol.appendChild(image);
//             divGridCol.appendChild(spanData);
//             document.querySelector('div.grid').appendChild(divGridCol);
//         })
//     });

//     fetch(apiURL)
//     .then((response) => {
//         return response.json()
//     })
//     .then((jsonData) => {  
//         console.log(jsonData);
//         // <section class="stats">
//         //     <h3>Summary</h3>
//         //     <p>Currently: <span class="heroData"></span></p>
//         //     <p>High: <span class="heroData"></span>&deg;</p>
//         //     <p>Wind Chill: <span class="heroData"></span>mph</p>
//         //     <p>Humidity: <span class="heroData"></span>%</p>
//         //     <p>Wind Speed: <span class="heroData"></span>mph</p>
//         // </section>      
//         let h3 = document.createElement('h3');
//         let p1 = document.createElement('p');
//         let p2 = document.createElement('p');
//         let p3 = document.createElement('p');
//         let p4 = document.createElement('p');
//         let p5 = document.createElement('p');
//         let curr = document.createElement('span');
//         let high = document.createElement('span');
//         let windChill = document.createElement('span');
//         let hum = document.createElement('span');
//         let windSpeed = document.createElement('span');
        
//         curr.setAttribute('class', 'heroData');
//         high.setAttribute('class', 'heroData');
//         windChill.setAttribute('class', 'heroData');
//         hum.setAttribute('class', 'heroData');
//         windSpeed.setAttribute('class', 'heroData');

//         h3.textContent = `Summary`;
//         curr.textContent = `Currently: ${jsonData.list[0].weather[0].main}`;
//         high.innerHTML = `High: ${jsonData.list[0].main.temp_max.toFixed(1)}&deg; F`;
//         if (jsonData.list[0].wind.speed > 4.8 && jsonData.list[0].weather[0].main < 50) {
//             let chill = windChill(jsonData.list[0].weather[0].main, jsonData.list[0].wind.speed);
//             windChill.innerHTML = `Wind Chill: ${chill}mph`;
//         } else {
//             windChill.textContent = `Wind Chill: N/A`;
//         }
//         hum.innerHTML = `Humidity: ${jsonData.list[0].main.humidity}%`;
//         windSpeed.innerHTML = `Wind Speed: ${jsonData.list[0].wind.speed}mph`;
//         p1.appendChild(curr);
//         p2.appendChild(high);
//         p3.appendChild(windChill);
//         p4.appendChild(hum);
//         p5.appendChild(windSpeed);
//         document.querySelector('section.stats').appendChild(h3);
//         document.querySelector('section.stats').appendChild(p1);
//         document.querySelector('section.stats').appendChild(p2);
//         document.querySelector('section.stats').appendChild(p3);
//         document.querySelector('section.stats').appendChild(p4);
//         document.querySelector('section.stats').appendChild(p5);
//     })

// function windChill(temp, speed){
//     let windChill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * (speed)^0.16;
//     return windChill;
// }