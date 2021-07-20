const url = 'https://dcarsin.github.io/WDD230/FinalProject/business.json'

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
        // console.log(jsonData);
        let count = 0;
        const biz = jsonData['business'];
        for (let i = 0; i < 3; i++){
            let oneBiz = biz[i];
            console.log(oneBiz);
            let div = document.createElement('div');
            let image = document.createElement('img');
            let section = document.createElement('section');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            // let p2 = document.createElement('p');
            // let p3 = document.createElement('p');
            
            image.setAttribute('src',`images/${oneBiz.pic}.png`);
            image.setAttribute('alt',`image for ${oneBiz.name}`);
            div.setAttribute('class', 'flyer');
            h3.textContent = `${oneBiz.name}`; 
            h4.textContent = `${oneBiz.motto}`;                
            p1.textContent = `Purpose: ${oneBiz.descriptionSort}`;
            // p2.textContent = `${oneBiz.description[0]}`;
            // p3.textContent = `${oneBiz.description[1]}`;
console.log(oneBiz.descriptionSort);
            div.appendChild(image);
            section.appendChild(h3);
            section.appendChild(h4);        
            section.appendChild(p1);
            // section.appendChild(p2);
            // section.appendChild(p3);
            div.appendChild(section);
            console.log(div);
            document.querySelector('#localBusiness').appendChild(div);
        }
    });
    