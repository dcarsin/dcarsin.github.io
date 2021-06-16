

let tbodyList = document.getElementsByTagName('tbody'); // to get all into array
let trParts = tbodyList[0].getElementsByTagName("tr");
for (let i = 0; i < trParts.length; i++) {
    if (trParts[i].getElementsByTagName("td")[0].textContent == "November"){
        trParts[i].getElementsByTagName("td")[2].style.color = "white";
        trParts[i].getElementsByTagName("td")[2].style.backgroundColor = "#628ca6";
    }
}

// color: white;
// background-color: #628ca6;