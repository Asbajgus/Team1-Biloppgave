function coolCarParts() {  
    let html = "";
    for (let i = 0; i < coolCarItems.length; i++) {
        html += `<div>
                    <h3>${coolCarItems[i].name}</h3>
                    <img src="${coolCarItems[i].image}" alt="${coolCarItems[i].name}" width="200">
                 </div>`;
    }
    document.getElementById("coolCars").innerHTML = html;
}


function badCarParts() {  
    let html = "";
    for (let i = 0; i < badCarItems.length; i++) {
        html += `<div>
                    <h3>${badCarItems[i].name}</h3>
                    <img src="${badCarItems[i].image}" alt="${badCarItems[i].name}" width="200">
                 </div>`;
    }
    document.getElementById("badCars").innerHTML = html;

}

window.onload = function() {
    coolCarParts();
    badCarParts();
};

setInterval(function(){
    badCarItems}, 1000);

setInterval(function(){
    coolCarItems}, 2000);

