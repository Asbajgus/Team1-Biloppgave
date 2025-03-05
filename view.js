import { getNumber2, setNumber2 } from './model.js';

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

        <div id="carParts"></div>

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

    renderCarParts(coolCarItems, badCarItems);
}

function renderCarParts(coolCarItems, badCarItems) {
    let carPairs = [
        [coolCarItems.find(item => item.item === "1"), badCarItems.find(item => item.item === "1")],
        [coolCarItems.find(item => item.item === "2"), badCarItems.find(item => item.item === "2")],
        [coolCarItems.find(item => item.item === "3"), badCarItems.find(item => item.item === "3")],
        [coolCarItems.find(item => item.item === "4"), badCarItems.find(item => item.item === "4")]
    ];

    let selectedCarItems = carPairs.map(pair => pair[Math.floor(Math.random() * pair.length)]);
    shuffleArray(selectedCarItems); // Shuffle the array to randomize the order
    let index = 0;

    setInterval(() => {
        if (index < selectedCarItems.length) {
            let carItem = selectedCarItems[index];
            let html = `<div id="carPart-${index}">
                            <h3>${carItem.name}</h3>
                            <img src="${carItem.image}" alt="${carItem.name}" width="200">
                        </div>`;
            
            // Remove previous car part
            if (index > 0) {
                document.getElementById(`carPart-${index - 1}`).remove();
            }

            document.getElementById('carParts').innerHTML = html;

            // Update bilPoeng
            let currentBilPoeng = getNumber2();
            if (coolCarItems.includes(carItem)) {
                setNumber2(currentBilPoeng + 1);
            } else {
                setNumber2(currentBilPoeng - 1);
            }
            document.getElementById('bilPoeng').innerHTML = getNumber2();

            index++;
        }
    }, 5000); 
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export { updateView };