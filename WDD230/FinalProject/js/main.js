let imageSources = [{src: 'images/palacio1.jpg', alt: 'Chamber of Commerce Main Building'},
{src: 'images/palacio2.jpg', alt: 'Chamber of Commerce Main Building'},
{src: 'images/palacio3.jpg', alt: 'Chamber of Commerce Main Building'},
{src: 'images/palacio4.jpg', alt: 'Chamber of Commerce Main Building'}];

let join = ['images/join.png','images/join2.png'];
            
var i = 0;
setInterval(function () {
    if (i === imageSources.length) {
        i = 0;
    }
    let active = document.querySelector('.herodiv');
    document.querySelector('.herodiv').innerHTML = "";
    let image = document.createElement('img');
    image.setAttribute('src', `${imageSources[i].src}`);
    // image.setAttribute('data-src', `${imageSources[i].src}`);
    image.setAttribute('alt', `${imageSources[i].alt}`);
    
    active.appendChild(image);
    // document.getElementById('herodiv').innerHTML = active;
    i++;
}, 3000);

var j = 0;
setInterval(function () {
    let active = document.querySelector('#joinLink');
    document.querySelector('#joinLink').innerHTML = "";
    let image2 = document.createElement('img');
    image2.setAttribute('src', `${join[j]}`);
    image2.setAttribute('alt', `Join`);
    active.appendChild(image2);
    // document.getElementById('herodiv').innerHTML = active;
    j == 0 ? j = 1 : j = 0;
}, 500);
