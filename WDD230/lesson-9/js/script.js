
//add day data into footer
const datefield = document.querySelector("data");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

document.querySelector('#year').innerHTML = `&copy;`+ new Date().getFullYear() + `- David Carsin - Uruguay - <a href="https://www.byui.edu/online" target="_blank">BYU-Idaho Online
Learning</a>`;
document.querySelector('#date').innerHTML = fulldate;

// const lastVisit = localStorage.getItem('lastvisit') || now;
// let numDates = (lastVisit - now) / 864000;
// if (numDates == 0) {
//     document.querySelector('#visited').textContent = `Welcome`;
// } else {
//     document.querySelector('#visited').textContent =  `Dates since you last visit: ${numDates}`;
// }    

// if (now.getDay() == 5){
//     document.querySelector('aside').style.display = 'block';
// }

//5days Forecast and replace with the corresponding 5 days 3 letters that follows

// toggleMenu
function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle('responsive');
}

const startDate = now.getDay();
// convert date number into 3 letters day
function DaysWeek(dayNum){
    let returnDate;
    if      (dayNum == 1){   returnDate = "Mon"  }
    else if (dayNum == 2){   returnDate = "Tue"  }
    else if (dayNum == 3){   returnDate = "Wed"  }
    else if (dayNum == 4){   returnDate = "Thu"  }
    else if (dayNum == 5){   returnDate = "Fri"  }
    else if (dayNum == 6){   returnDate = "Sat"  }
    else if (dayNum == 7){   returnDate = "Sun"  }
    return returnDate;
}

let test = [{pic:"cloudy.png",weather:"cloudy",temp:"90"},
{pic:"rain.png",weather:"rain",temp:"80"},
{pic:"snow.png",weather:"snow",temp:"40"},
{pic:"sunny.png",weather:"sunny",temp:"75"},
{pic:"sunnyRaining.png",weather:"sunnyRaining",temp:"79"}];

for (let i = 0; i < test.length; i++) {
    let divGridCol = document.createElement('div');
    let span = document.createElement('span');
    let img = document.createElement('img');
    let spanData = document.createElement('span');

    divGridCol.setAttribute('class', 'grid-col');
    span.textContent = DaysWeek(i + 1);
    img.setAttribute('src',`images/${test[i].pic}`);
    img.setAttribute('alt',`image for ${test[i].weather}`);
    spanData.setAttribute('class', 'data');
    spanData.textContent = `${test[i].temp} F`; 


    divGridCol.appendChild(span);
    divGridCol.appendChild(img);
    divGridCol.appendChild(spanData);
    document.querySelector('div.grid').appendChild(divGridCol);
}
