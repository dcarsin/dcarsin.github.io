const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const url = 'https://dcarsin.github.io/WDD230/FinalProject/business.json'

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
        // console.log(jsonData);
        const business = jsonData['business'];
         business.forEach(oneBiz => {
            let div = document.createElement('div');
            div.setAttribute('class', 'flyer');
            let section = document.createElement('section');
            let h3 = document.createElement('h3'); //name
            let h4 = document.createElement('h4'); //motto
            let h5 = document.createElement('h5'); //address
            let image = document.createElement('img'); //image
            let a = document.createElement('a'); //website
            let p1 = document.createElement('p');

            image.setAttribute('src', `images/${oneBiz.pic}.png`);
            image.setAttribute('alt', `image for ${oneBiz.name}`);
            h3.textContent = `${oneBiz.name}`;
            h4.textContent = `${oneBiz.motto}`;
            a.setAttribute('href', `${oneBiz.website}`)
            a.textContent = `${oneBiz.website}`;
            h5.textContent = `Address: ${oneBiz.address}, ZIP: ${oneBiz.zip}`;
            p1.textContent = `Purpose: ${oneBiz.descriptionSort}`;
            div.appendChild(image);
            section.appendChild(h3);
            section.appendChild(h4);
            section.appendChild(a);
            section.appendChild(h5);
            section.appendChild(p1);
            if (oneBiz.event.month){
                let h5event = document.createElement('h5'); //address
                h5event.setAttribute('class', 'h5event');
                let month = monthNames[oneBiz.event.month - 1];
                h5event.textContent = `Next Event: ${month} ${oneBiz.event.date}`;
                section.appendChild(h5event);
            }
            div.appendChild(section);
            // console.log(div);
            document.querySelector('.localBusiness').appendChild(div);
        })
    });