const url = 'https://dcarsin.github.io/WDD230/FinalProject/business.json'

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
        console.log(jsonData);
        const biz = jsonData['business'];
        const sortList = biz.filter((biz => biz.name == 'Soda Springs' || biz.name == 'Fish Haven' || biz.name == 'Preston'  ));
        // console.log(sortList);
        sortList.forEach(oneBiz => {
            let div = document.createElement('div');
            let image = document.createElement('img');
            let section = document.createElement('section');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            
            image.setAttribute('src',`images/${oneBiz.pic}`);
            image.setAttribute('alt',`image for ${oneBiz.name}`);
            div.setAttribute('class', 'flyer');
            h3.textContent = `${oneBiz.name}`; 
            h4.textContent = `${oneBiz.motto}`;                
            p1.textContent = `Year Founded: ${oneBiz.yearFounded}`;
            p2.textContent = `Population: ${oneBiz.currentPopulation}`;
            p3.textContent = `Annual Rain Fall: ${oneBiz.averageRainfall}`;
            
            div.appendChild(image);
            section.appendChild(h3);
            section.appendChild(h4);        
            section.appendChild(p1);
            section.appendChild(p2);
            section.appendChild(p3);
            div.appendChild(section);
            document.querySelector('#localBusiness').appendChild(div);
        }) 
    });
    