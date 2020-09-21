window.onload = updateBox;

function updateBox(){
    let lastUpdate = "Last Updated: " + document.lastModified;
    document.getElementById('lastUpdate').innerHTML = lastUpdate;
}