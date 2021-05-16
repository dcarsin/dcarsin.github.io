

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle('responsive');
}


const datefield = document.querySelector("data");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

document.querySelector('#year').innerHTML = `&copy;`+ new Date().getFullYear() + `- David Carsin - Uruguay - <a href="https://www.byui.edu/online" target="_blank">BYU-Idaho Online
Learning</a>`;
document.querySelector('#lastUpdate').innerHTML = "Last Updated: " + fulldate;