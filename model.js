// carModel.js

let coolCarItems = [
    { name: "redWing", image: "images/car-back.jpg" },
    { name: "coolRims", image: "images/cool-rims.jpg" },
    { name: "coolDoor", image: "images/cool-door.png" },
    { name: "coolFront", image: "images/coolCarFront.png" }
];

let badCarItems = [
    { name: "rustyCarBack", image: "images/ugly car back.jpg" },
    { name: "uglyRim", image: "images/ugly-rims.jpg" },
    { name: "uglyCarDoor", image: "images/uglyCarDoor.png" },
    { name: "uglyCarfront", image: "images/uglyCarFront.png" }
];

let number = 0;
let number2 = 0;

function getCoolCarItems() {
    return coolCarItems;
}

function getBadCarItems() {
    return badCarItems;
}

function getMenneskeList() {
    return ["kompis", "gamlis", 'snut'];
}

function getSvarList() {
    return ["halla", "olding", "fuck off!"];
}

// Getters and setters for number and number2
function getNumber() {
    return number;
}

function getNumber2() {
    return number2;
}

function setNumber(newNumber) {
    number = newNumber;
}

function setNumber2(newNumber2) {
    number2 = newNumber2;
}

export { 
    getCoolCarItems, 
    getBadCarItems, 
    getMenneskeList, 
    getSvarList, 
    getNumber, 
    getNumber2, 
    setNumber, 
    setNumber2 
};












