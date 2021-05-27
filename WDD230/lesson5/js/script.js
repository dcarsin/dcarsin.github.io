
//add day data into footer
const datefield = document.querySelector("data");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

document.querySelector('#year').innerHTML = `&copy;`+ new Date().getFullYear() + `- David Carsin - Uruguay - <a href="https://www.byui.edu/online" target="_blank">BYU-Idaho Online
Learning</a>`;
document.querySelector('#lastUpdate').innerHTML = "Today is: " + fulldate;
if (now.getDay() == 5){
    document.querySelector('aside').style.display = 'block';
}

//5days Forecast and replace with the corresponding 5 days 3 letters that follows
let lista = document.getElementsByClassName('col-head');
console.log(lista);
let startDate = now.getDay();
console.log("start date: "+startDate);
for (let i = 0; i < 5; i++) {
    lista[i].textContent = DaysWeek(startDate);   
    startDate++;
    if (startDate == 8) {
        startDate = 1;
    }
}

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

// toggleMenu
function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle('responsive');
}