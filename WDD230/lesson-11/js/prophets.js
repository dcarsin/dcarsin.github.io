const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    
  const prophets = jsonObject['prophets'];

  prophets.forEach(prophet => {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('h3');
    let birthPlace = document.createElement('h3');
    let image = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `${prophet.birthdate}`;
    birthPlace.textContent = `${prophet.birthplace}`;
    //<img src="images/pngegg.png" alt="AcaWeather Site">
    image.setAttribute('src', `${prophet.imageurl}`);
    image.setAttribute('alt', `${prophet.name} picture`);

    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(image);
    
    document.querySelector('div.cards').appendChild(card);
  })
  });
