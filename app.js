const add = (num1, num) => {
    return num1 + num;
}
const subtract = (num1, num) => {
    return num1 - num;
}
const multiply = (num1, num) => {
    return num1 * num;
}
const divide = (num1, num) => {
    return num1 / num;
}

let sum1 = '';
let sum2 = '';
let operator = '';
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');
const num7 = document.querySelector('.num7');
const num8 = document.querySelector('.num8');
const num9 = document.querySelector('.num9');
const num0 = document.querySelector('.num0');
const display = document.querySelector('.display');
const minus = document.querySelector('.minus');
const equals = document.querySelector('.equals');


const operate = (num1, operator, num) => {
    let sum;
    if (operator === '/') {
        return divide(num1, num);
    } else if (operator === '*') {
        return multiply(num1, num);
    } else if (operator === '+') {
        return add(num1, num);
    } else if (operator === '-') {
        return subtract(num1, num);
    }
}

num2.addEventListener('click', (e) => {
    if (operator !== '') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
    }
    display.textContent += num2.textContent;
    
})
num1.addEventListener('click', (e) => {
    display.textContent += num1.textContent;
})
num7.addEventListener('click', (e) => {
    display.textContent += num7.textContent;
})
num0.addEventListener('click', (e) => {
    display.textContent += num0.textContent;
})
minus.addEventListener('click', (e) => {
    
    operator += minus.textContent;
    sum1 = display.textContent; 
})
equals.addEventListener('click', (e) => {
    sum2 = display.textContent;
    display.textContent = operate(sum1, operator, sum2);
})


