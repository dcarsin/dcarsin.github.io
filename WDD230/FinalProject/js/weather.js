let apiKey = '5b50051966e4b3d19e4a0dbfa46385d8';
let lat = '34.891252';
let lon = '-56.187222';
const daysWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=imperial`;
// console.log(apiURL);
fetch(apiURL)
    .then((response) => {
        return response.json(); // 100*60*60
    })
    .then((jsonData) => {
        // console.log(jsonData);
        let date = new Date(jsonData.current.dt).getDay();        
        date++;
        processData(jsonData.current, date, 'today', jsonData.current.temp.toFixed(1));
        date++
        processData(jsonData.daily[0], date, 'grid-col', jsonData.daily[0].temp.day.toFixed(1));
        date++
        processData(jsonData.daily[1], date, 'grid-col', jsonData.daily[1].temp.day.toFixed(1));
        date++
        processData(jsonData.daily[2], date, 'grid-col', jsonData.daily[2].temp.day.toFixed(1));
     
        if (jsonData.current.alerts) {
            let div = document.createElement('div');
            div.setAttribute('class', 'alert');
            let button = document.createElement('button');
            button.setAttribute('aria-label', 'delete item');
            button.setAttribute('type', 'button');
            button.setAttribute('onClick','closeMessage()')
            button.textContent = 'X';
            div.appendChild(button);
            let h3 = document.createElement('h3');
            h3.append(`Weather ALERT !!!`);
            div.appendChild(h3);
            let message = jsonData.current.alerts[0].description;
            //let message = '...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.';
            const parsed = message.split('\n');
            parsed.forEach(data => {
                let p = document.createElement('p');
                p.textContent = data;
                div.appendChild(p);
            }); 
            console.log(div);
            document.querySelector('#showAlert').appendChild(div);     
        }
    });
function closeMessage(){
    console.log("entro a borrar");
    document.querySelector('#showAlert').innerHTML = "";
    // document.querySelector('showAlert');    
}

function processData(oneDay, date, action, temp) {
    // console.log(oneDay);
    let div = document.createElement('div');
    let span = document.createElement('span');
    let image = document.createElement('img');
    let spanData = document.createElement('span');
    spanData.setAttribute('class', 'data');
    if (action != 'today') {
        span.textContent = `${daysWeeks[date].toUpperCase()} - `;
        div.appendChild(span);
        div.setAttribute('class', action);
        spanData.innerHTML = `Temp: ${temp}&deg; F`;
    } else {
        let p1 = document.createElement('p');
        spanData.innerHTML = `Temperature: ${temp}&deg; F <br> Humidity: ${oneDay.humidity}%`;
        p1.textContent = `Condition: ${oneDay.weather[0].description}`;
        const desc = oneDay.weather[0].description;
        const imagesrc = `https://openweathermap.org/img/w/${oneDay.weather[0].icon}.png`; // note the concatenation    
        image.textContent = imagesrc; // informational specification only
        image.setAttribute('src', imagesrc); // focus on the setAttribute() method
        image.setAttribute('alt', desc);
        div.appendChild(image);
        div.appendChild(p1);
    }

    div.appendChild(spanData);
    // console.log(div);
    if (action == 'today') {
        document.querySelector('.actualTemp').appendChild(div);
    } else {
        document.querySelector('.grid').appendChild(div);
    }
}
