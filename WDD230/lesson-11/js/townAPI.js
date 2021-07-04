const url = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
        // console.log(jsonData);
        const towns = jsonData['towns'];
        const sortList = towns.filter((towns => towns.name == 'Soda Springs' || towns.name == 'Fish Haven' || towns.name == 'Preston'  ));
        // console.log(sortList);
        sortList.forEach(oneTown => {
            let div = document.createElement('div');
            let image = document.createElement('img');
            let section = document.createElement('section');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            
            image.setAttribute('src',`images/${oneTown.photo}`);
            // console.log(oneTown.photo);
            image.setAttribute('alt',`image for ${oneTown.name}`);
            div.setAttribute('class', 'flyer');
            h3.textContent = `${oneTown.name}`; 
            h4.textContent = `${oneTown.motto}`;                
            p1.textContent = `Year Founded: ${oneTown.yearFounded}`;
            p2.textContent = `Population: ${oneTown.currentPopulation}`;
            p3.textContent = `Annual Rain Fall: ${oneTown.averageRainfall}`;
            
            div.appendChild(image);
            section.appendChild(h3);
            section.appendChild(h4);        
            section.appendChild(p1);
            section.appendChild(p2);
            section.appendChild(p3);
            div.appendChild(section);
            document.querySelector('#townsFromAPI').appendChild(div);
        }) 
    });
    