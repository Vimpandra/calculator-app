const screen = document.querySelector(`.screen`);

const n1 = document.getElementById(`n1`);
const n2 = document.getElementById(`n2`);
const n3 = document.getElementById(`n3`);
const n4 = document.getElementById(`n4`);
const n5 = document.getElementById(`n5`);
const n6 = document.getElementById(`n6`);
const n7 = document.getElementById(`n7`);
const n8 = document.getElementById(`n8`);
const n9 = document.getElementById(`n9`);
const n0 = document.getElementById(`n0`);
let numbers = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n0];

const ac = document.getElementById(`ac`);
const backspace = document.getElementById(`backspace`);

let displayScreen = ``

numbers.forEach(number => {
    number.addEventListener(`click`, () => {
        displayScreen += number.value;
        screen.textContent = displayScreen;
    });
});

ac.addEventListener(`click`, () => {
    displayScreen = ``
    screen.textContent = displayScreen;
});

backspace.addEventListener(`click`, () => {
    displayScreen = displayScreen.substr(0, displayScreen.length - 1);
    screen.textContent = displayScreen;
})

