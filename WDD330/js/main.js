const links = [
    {
        label: "Week1 notes",
        url: "js/main.js"
    },
    // {
    //     label: "Week2 notes",
    //     url: "algo/index.html"
    // }
]
let i = 1;
links.forEach(one => {
    // let active = document.getElementsByTagName('ol');
    // document.querySelector('.herodiv').innerHTML = "";
    let list = document.createElement('li');
    list.textContent = "Week " + i;
    let att = document.createElement('a');
    att.setAttribute('href', `${one.url}`);
    att.textContent = ` ${one.label}`;
    list.appendChild(att);
    document.querySelector('.generateLines').appendChild(list);
    // document.getElementById('herodiv').innerHTML = active;
    i++;
}, 100);