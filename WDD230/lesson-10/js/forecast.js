
function windChill(temp, speed){
    let windChill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * (speed)^0.16;
    return windChill;
}

let heroDataLista = document.getElementsByClassName('heroData'); // to get all into array
let speed = 5;
let temp = 76;
let chill = "no available";
if (speed > 4.8 && temp < 50) {
    let chill = windChill(temp, speed);
}
heroDataLista[1].textContent = temp;  // save data into array from line 7 of 'heroData'
heroDataLista[2].textContent = chill;
heroDataLista[4].textContent = speed;