const url = 'https://byui-cit230.github.io/weather/data/towndata.json'

    console.log(location.pathname);
actualTown = location.pathname;
    console.log(actualTown);
cutTown = actualTown.slice(1).split('.html');
    console.log(actualTown.slice(1).split('.html'));
actualTown = cutTown[0];
    console.log(actualTown);
let lookingFor = '';
if (actualTown == "sodaSprings"){
    lookingFor = 'Soda Springs';
} else if (actualTown == "fishHaven"){
    lookingFor = 'Fish Haven';
} else if (actualTown == "preston"){
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