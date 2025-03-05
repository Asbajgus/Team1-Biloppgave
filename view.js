// view.js

function updateView(coolCarItems, badCarItems, menneskeLista, svar, number, number2) {
    const appen = document.getElementById('app');

    appen.innerHTML = /*html*/`
        <div id="poenglistene">
            <div id="bilPoeng">${number2}</div>
            <div id="poeng">${number}</div>
        </div>

        <div id="turOgTekst">
            <div id="kjøreturen">Her står det om kjøreturen</div>
            <input type="text" style="margin-left: 60px;" placeholder="Her skrives svaret">
        </div>

        <div id="coolCars"></div>
        <div id="badCars"></div>

        <div id="menneskeLista">
            <h3>People List</h3>
            <ul>
                ${menneskeLista.map(person => `<li>${person}</li>`).join('')}
            </ul>
        </div>

        <div id="svarList">
            <h3>Responses</h3>
            <ul>
                ${svar.map(response => `<li>${response}</li>`).join('')}
            </ul>
        </div>
    `;

    renderCarParts(coolCarItems, "coolCars");
    renderCarParts(badCarItems, "badCars");
}

function renderCarParts(carItems, elementId) {
    let html = "";
    for (let i = 0; i < carItems.length; i++) {
        html += `<div>
                    <h3>${carItems[i].name}</h3>
                    <img src="${carItems[i].image}" alt="${carItems[i].name}" width="200">
                 </div>`;
    }
    document.getElementById(elementId).innerHTML = html;
}

export { updateView };
