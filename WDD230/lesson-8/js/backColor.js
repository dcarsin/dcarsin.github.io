

let tbodyList = document.getElementsByClassName('forHover'); // to get all into array
let trParts = tbodyList[0].getElementsByTagName("tr");
for (let i = 0; i < trParts.length; i++) {
    if (i == 0 || i%2 == 0){
        trParts[i].style.backgroundColor =  "#e7f0ed";
    }
    else {
        trParts[i].style.backgroundColor = "#e7ffed";
    }
}




