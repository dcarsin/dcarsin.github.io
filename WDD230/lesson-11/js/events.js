const url = 'https://byui-cit230.github.io/weather/data/towndata.json'

let page = location.pathname;           
let actualPage = page.split('/');       
let active = actualPage[3];         
let cutTown1 = active.split('.html');
active = cutTown1[0];
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
            }
        });
    });