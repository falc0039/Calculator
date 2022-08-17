const add = (num1, num) => {
    return parseFloat(num1) + parseFloat(num);
}
const subtract = (num1, num) => {
    return num1 - num;
}
const multiply = (num1, num) => {
    return num1 * num;
}
const divide = (num1, num) => {
    if (num === '0') {
        return 'Dividing by 0 is currently impossible!';
    } else {
        return num1 / num;
    }
}

let sum1 = '';
let sum2 = '';
let operator = '';
// const num1 = document.querySelector('.num1');
// const num2 = document.querySelector('.num2');
// const num3 = document.querySelector('.num3');
// const num4 = document.querySelector('.num4');
// const num5 = document.querySelector('.num5');
// const num6 = document.querySelector('.num6');
// const num7 = document.querySelector('.num7');
// const num8 = document.querySelector('.num8');
// const num9 = document.querySelector('.num9');
// const num0 = document.querySelector('.num0');
const num = [];
// const num0 = document.querySelector('.num0');
const display = document.querySelector('.display');
const minus = document.querySelector('.minus');
const multiple = document.querySelector('.multiply');
const division = document.querySelector('.divide');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const decimalBtn = document.querySelector('.decimal');
const backspaceBtn = document.querySelector('.backspace');
let equalBtnClicked = 0;


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

// Conditional added when user tries to divide by 0, to return string from divide 
// function conditional.
const toDecimal = (num) => {
    if (typeof num === 'string') {
        return num;
    }
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 5
    }).format(num);
}

// Added conditional so that after user clicks the equal button, they can't add numbers
// to the calculated number, instead a new calculation starts by checking the 
// equalBtnClicked counter.
for (let i = 0; i < 10; i++) {
    num[i] = document.querySelector(`.num${i}`);
    num[i].addEventListener('click', (e) => {
        if (operator !== '') {
            while (display.firstChild) {
                display.removeChild(display.lastChild);
            }
            sum2 += num[i].textContent;
            display.textContent = sum2;
        } else if (operator === '' && sum2 === '' && equalBtnClicked === 1) {
            while (display.firstChild) {
                display.removeChild(display.lastChild);
            }
            sum1 = '';
            sum1 += num[i].textContent;
            display.textContent = sum1;
            equalBtnClicked = 0;
        } else {
            sum1 += num[i].textContent;
            display.textContent = sum1;
        }
    })

}

// Added a check for a decimal in the sum2 value, so the function doesn't execute and
// there won't be two or more decimals in one number.
decimalBtn.addEventListener('click', (e) => {
    if (sum2.includes('.')) {
        return;
    }
    if (operator !== '') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
        sum2 += decimalBtn.textContent;
        display.textContent = sum2;
    } else if (sum1.includes('.')) {
        return;
    } else {
        sum1 += decimalBtn.textContent;
        display.textContent = sum1;
    }
})
// display.textContent += `${decimalBtn.textContent}`;


minus.addEventListener('click', (e) => {
    if (operator !== '') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
        display.textContent = toDecimal(operate(sum1, operator, sum2));
        sum1 = display.textContent;
        operator = minus.textContent;
        display.textContent += ` ${minus.textContent}`;
        sum2 = '';
    } else {
        display.textContent += ` ${minus.textContent}`;
        operator = minus.textContent;
    }
    // operator += minus.textContent;
    // sum1 = display.textContent; 
})
plus.addEventListener('click', (e) => {
    if (operator !== '') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
        display.textContent = toDecimal(operate(sum1, operator, sum2));
        sum1 = display.textContent;
        operator = plus.textContent;
        display.textContent += ` ${plus.textContent}`;
        sum2 = '';
    } else {
        display.textContent += ` ${plus.textContent}`;
        operator = plus.textContent;
    }
})
division.addEventListener('click', (e) => {
    if (operator !== '') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
        display.textContent = toDecimal(operate(sum1, operator, sum2));
        sum1 = display.textContent;
        operator = division.textContent;
        display.textContent += ` ${division.textContent}`;
        sum2 = '';
    } else {
        display.textContent += ` ${division.textContent}`;
        operator = division.textContent;
    }
})
multiple.addEventListener('click', (e) => {
    if (operator !== '') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
        display.textContent = toDecimal(operate(sum1, operator, sum2));
        sum1 = display.textContent;
        operator = multiple.textContent;
        display.textContent += ` ${multiple.textContent}`;
        sum2 = '';
    } else {
        display.textContent += ` ${multiple.textContent}`;
        operator = multiple.textContent;
    }
})

backspaceBtn.addEventListener('click', (e) => {
    if (operator === '' && sum2 === '' && display.textContent !== '0'){
        return;
    } else {
    display.textContent = display.textContent.substring(0, display.textContent.length-1);
    }
    if (operator === '') {
    sum1 = sum1.substring(0, sum1.length-1);
    } else if (operator !== '') {
    sum2 = sum2.substring(0, sum2.length-1);
    } else if (operator !== '' && sum2 === '') {
    operator = operator.substring(0, 0);
    }
})
equals.addEventListener('click', (e) => {
    equalBtnClicked = 0;
    if (sum1 === '' || sum2 === '' || operator === '') {
        return;
    }
    display.textContent = toDecimal(operate(sum1, operator, sum2));
    sum1 = display.textContent;
    sum2 = '';
    operator = '';
    equalBtnClicked = 1;
})

clearBtn.addEventListener('click', (e) => {
    sum1 = '';
    sum2 = '';
    operator = '';
    while (display.firstChild) {
        display.removeChild(display.lastChild);
    }
    display.textContent = 0;
})


// Problems:
// 1. Be able to click and display multiple numbers after another.
//    Without it clearing the display every time. It works when no operator's been 
// called yet, but after an operator has been clicked or the equal button, then 
// the number buttons as i've written them, delete all that's on the display before 
// adding the number clicked to the display again.
// 2. Make it so multiple numbers in a row with more than one operator in between 
// are calculated.
// 3. After the equal button is clicked, when you click a number button, now it adds
// that number to the displayed calculated number. It should clear the display and 
// start again with the number clicked on display.
// 4. You shouldn't be able to click an operator when there is an operator on the display.
// 5. If the number on the display is from clicking the equal button, then when you click
// a number button the display should reset and show only the clicked number.

if (operator === '') {

}

