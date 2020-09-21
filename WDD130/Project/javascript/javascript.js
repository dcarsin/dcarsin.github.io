var imageSources = ["images/gym.jpg", "images/pool.jpg"]
var index = 0;
setInterval(function () {
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("imageToChange").src = imageSources[index];
    index++;
}, 3000);