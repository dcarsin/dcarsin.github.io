const url = 'https://byui-cit230.github.io/weather/data/towndata.json'

let page = location.pathname;           console.log(page);
let actualPage = page.split('/');       console.log(actualPage);
let active = actualPage[3];         console.log(active);
cutTown = active.split('.html');       console.log(cutTown);
active = cutTown[0];
console.log(active);
let lookingFor;
if (active == "sodaSprings"){
    lookingFor = 'Soda Springs';
} else if (active == "fishHaven"){
    lookingFor = 'Fish Haven';
} else if (active == "preston"){
    lookingFor = 'Preston';
}    
console.log(lookingFor);

fetch(url)
    .then((response) => { 
    return response.json()
    })
    .then((jsonData) => {
        // console.log(jsonData);
        const towns = jsonData['towns'];
        const sortList = towns.filter((towns => towns.name == 'Soda Springs' || towns.name == 'Fish Haven' || towns.name == 'Preston'  ));
        sortList.forEach(oneTown => {
            if (oneTown.name == lookingFor) {
                document.getElementById('event1').textContent = `${oneTown.events[0]}`;
                document.getElementById('event2').textContent = `${oneTown.events[1]}`;
                document.getElementById('event3').textContent = `${oneTown.events[2]}`;
            }
        });
    });