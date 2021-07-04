
//add day data into footer
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

document.querySelector('#year').innerHTML = `&copy;`+ new Date().getFullYear() + `- David Carsin - Uruguay - <a href="https://www.byui.edu/online">BYU-Idaho Online
Learning</a>`;
document.querySelector('#date').innerHTML = fulldate;
if (now.getDay() == 5){
    document.querySelector('aside').style.display = 'block';
}

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle('responsive');
}
