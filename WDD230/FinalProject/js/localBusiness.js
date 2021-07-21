const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const url = 'https://dcarsin.github.io/WDD230/FinalProject/business.json'

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
        // console.log(jsonData);
        const business = jsonData['business'];
        const biz  = business.filter(business => (business.event.month - 1) === now.getMonth());
        // console.log(biz);
        biz.forEach(oneBiz => {
            if (now.getMonth() === oneBiz.event.month - 1) {
                let div = document.createElement('div');
                let image = document.createElement('img');
                let section = document.createElement('section');
                let h3 = document.createElement('h3');
                let h4 = document.createElement('h4');
                let p1 = document.createElement('p');
                loadEvents(oneBiz.event.month, oneBiz.event.date, oneBiz.name);
                image.setAttribute('src', `images/${oneBiz.pic}.png`);
                image.setAttribute('alt', `image for ${oneBiz.name}`);
                div.setAttribute('class', 'flyer');
                h3.textContent = `${oneBiz.name}`;
                h4.textContent = `${oneBiz.motto}`;
                p1.textContent = `Purpose: ${oneBiz.descriptionSort}`;
                div.appendChild(image);
                section.appendChild(h3);
                section.appendChild(h4);
                section.appendChild(p1);
                div.appendChild(section);
                // console.log(div);
                document.querySelector('#localBusiness').appendChild(div);
            }
        })
    });

function loadEvents(month, day, name) {
    let use;
    if (!document.getElementById('event1').textContent) {
        use = 'event1';
    } else if (!document.getElementById('event2').textContent) {
        use = 'event2';
    } else if (!document.getElementById('event3').textContent) {
        use = 'event3';
    }
    document.getElementById(use).textContent = `${monthNames[month-1]} ${day} - ${name}`;
}