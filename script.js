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

const point = document.getElementById(`point`);

const ac = document.getElementById(`ac`);
const backspace = document.getElementById(`backspace`);

const addBtn = document.getElementById(`add`);
const subtractBtn = document.getElementById(`subtract`);
const multiplyBtn = document.getElementById(`multiply`);
const divideBtn = document.getElementById(`divide`);
const percentBtn = document.getElementById(`percent`);
const equalsBtn = document.getElementById(`equals`);

let screenContent = ``;
let firstValue = ``;
let operation = ``;

numbers.forEach(number => {
    number.addEventListener(`click`, () => {
        printNumber(number.value);        
    });
});

point.addEventListener(`click`, () => {
    printPoint();
});

ac.addEventListener(`click`, () => {
    clearAll();    
});

backspace.addEventListener(`click`, () => {
    screenContent = screenContent.substr(0, screenContent.length - 1);
    updateScreen(screenContent);
})

addBtn.addEventListener(`click`, () => {
    executeOperation();
    operation = `add`
});

subtractBtn.addEventListener(`click`, () => {
    executeOperation();
    operation = `subtract`;
});

multiplyBtn.addEventListener(`click`, () => {
    executeOperation();
    operation = `multiply`;
});

divideBtn.addEventListener(`click`, () => {
    executeOperation();
    operation = `divide`;
});

percentBtn.addEventListener(`click`, () => {
    executeOperation();
    operation = `percent`;
});

equalsBtn.addEventListener(`click`, () => {
    if (firstValue !== ``) {
        operate();
    }
});

// Keyboard Shortcuts

window.addEventListener(`keydown`, (e) => {
    if (e.key >= 0 && e.key <= 9) {
        printNumber(e.key);
    }
    if (e.key === `+`) {
        executeOperation();
        operation = `add`;
    }
    if (e.key === `-`) {
        executeOperation();
        operation = `subtract`;
    }
    if (e.key === `*`) {
        executeOperation();
        operation = `multiply`;
    }
    if (e.key === `/`) {
        executeOperation();
        operation = `divide`;
    }
    if (e.key === `%`) {
        executeOperation();
        operation = `percent`;
    }
    if (e.key === `Enter` || e.key === `=`) {
        if (firstValue !== ``) {
            operate();
        }
    }
    if (e.key === `.`) {
        printPoint();
    }
    if (e.key === `Backspace`) {
        screenContent = screenContent.substr(0, screenContent.length - 1);
        updateScreen(screenContent);
    }
    if (e.key === `Escape` || e.key === `Delete`) {
        clearAll();
    }
});

// Basic Functions

function printNumber(n) {
    if (screenContent.length >= 30) return;
        else {
            screenContent += n;
            updateScreen(screenContent);
        }
}

function printPoint() {
    if (screenContent.includes(`.`)) return;
    else if (screenContent === ``) {
        screenContent = `0.`;
        screen.textContent = screenContent;
    } else {
        screenContent += point.value;
        screen.textContent = screenContent;
    }
}

function clearAll() {
    screenContent = ``;
    firstValue = ``;
    operation = ``;
    screen.textContent = screenContent;
}

function operate() {
    let result;
    if (operation === `add`) {
        result = add(Number(firstValue), Number(screenContent));
    } else if (operation === `subtract`) {
        result = subtract(Number(firstValue), Number(screenContent));
    } else if (operation === `multiply`) {
        result = multiply(Number(firstValue), Number(screenContent));
    } else if (operation === `divide`) {
        result = divide(Number(firstValue), Number(screenContent));
    } else if (operation === `percent`) {
        result = percent(Number(firstValue), Number(screenContent));
    }
    firstValue = ``;
    screenContent = `${result}`;
    updateScreen(screenContent);
};

function executeOperation() {
    if (firstValue !== ``) {
        operate();
    }
    firstValue = screenContent;
    screenContent = ``;
}

function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};
function percent(a, b) {
    return (b / 100) * a;
};

function updateScreen(str) {
    if (str.length > 10) {
        screen.innerHTML = `${str.slice(0, 10)}<br>${str.slice(10, 20)}<br>${str.slice(20, 30)}`;
   }
  else {
        screen.textContent = `${str}`;
 }
};