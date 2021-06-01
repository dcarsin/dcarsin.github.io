
function windChill(temp, speed){
    let windChill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * (speed)^0.16;
    return windChill;
}

let heroDataLista = document.getElementsByClassName('heroData');
let speed = 5;
let temp = 76;
let chill = windChill(temp, speed);
heroDataLista[1].textContent = temp;
heroDataLista[2].textContent = chill;
heroDataLista[4].textContent = speed;