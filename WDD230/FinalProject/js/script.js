
//add day data into footer
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

document.querySelector('#footerData').innerHTML = `${fulldate} - &copy;`+ new Date().getFullYear() + ` David Carsin - Uruguay - <a href="https://www.byui.edu/online">BYU-Idaho Online
Learning</a>`;

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle('responsive');
}


