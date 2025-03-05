import { getCoolCarItems, getBadCarItems, getMenneskeList, getSvarList, getNumber, getNumber2, setNumber, setNumber2 } from './model.js';
import { updateView } from './view.js';

document.addEventListener('DOMContentLoaded', (event) => {
    setNumber(0);
    setNumber2(0);
    updateView(getCoolCarItems(), getBadCarItems(), getMenneskeList(), getSvarList(), getNumber(), getNumber2());
});