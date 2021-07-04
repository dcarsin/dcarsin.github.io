const url = 'https://byui-cit230.github.io/weather/data/towndata.json'
actualTown = location.pathname;
cutTown = actualTown.slice(1).split('.html');
actualTown = cutTown[0];
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
                let section = document.createElement('section');
                let h3 = document.createElement('h3');
                let hr = document.createElement('hr');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                if (oneTown.events[0]){   
                    h3.textContent = `Upcoming Events`;
                    (oneTown.events[0]) ? p1.textContent = `${oneTown.events[0]}`:  p1.textContent = ``;
                    (oneTown.events[1]) ? p2.textContent = `${oneTown.events[1]}` : p2.textContent = ``;
                    (oneTown.events[2]) ? p3.textContent = `${oneTown.events[2]}` : p3.textContent = ``;
                    section.appendChild(h3);
                    section.appendChild(hr);
                    section.appendChild(p1);
                    section.appendChild(p2);
                    section.appendChild(p3);
                    console.log(section);
                    document.querySelector('#localEvent').appendChild(section);
                }
            }
        });
    });    