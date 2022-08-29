const add = (num1, num) => {
    return parseFloat(num1) + parseFloat(num);
}
const subtract = (num1, num) => {
    return num1 - num;
}
const multiply = (num1, num) => {
    console.log(num1, num)
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
const num = [];
for (let i = 0; i < 10; i++) {
    num[i] = document.querySelector(`#num${i}`);
}
const display = document.querySelector('.display');
const minus = document.querySelector('#minus');
const multiple = document.querySelector('#multiply');
const division = document.querySelector('#divide');
const plus = document.querySelector('#plus');
const equals = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const decimalBtn = document.querySelector('.decimal');
const backspaceBtn = document.querySelector('.backspace');
let equalBtnClicked = 0;

const operate = (num1, operator, num) => {
    console.log(num1, operator, num);
    if (operator === '/') {
        return divide(num1, num);
    } else if (operator === '*') {
        console.log(multiply(num1, num));
        return multiply(num1, num);
    } else if (operator === '+') {
        return add(num1, num);
    } else if (operator === '-') {
        return subtract(num1, num);
    }
}

// Conditional added when user tries to divide by 0, to return string from divide 
// function conditional.
const roundToDecimal = (num) => {
    if (typeof num === 'string') {
        return num;
    } else {
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(num);
    }
}

// Added conditional so that after user clicks the equal button, they can't add numbers
// to the calculated number, instead a new calculation starts by checking the 
// equalBtnClicked counter.
function inputNumBtn(num) {
    if (operator !== '') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
        sum2 += num.textContent;
        display.textContent = sum2;
    } else if (operator === '' && sum2 === '' && equalBtnClicked === 1) {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
        sum1 = '';
        sum1 += num.textContent;
        display.textContent = sum1;
        equalBtnClicked = 0;
    } else {
        sum1 += num.textContent;
        display.textContent = sum1;
    }
}

// Added a check for a decimal in the sum2 value, so the function doesn't execute and
// there won't be two or more decimals in one number.
function inputDecimalBtn() {
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
}

function inputBackspaceBtn() {
    if (operator === '' && sum2 === '' && display.textContent !== '0') {
        return;
    } else if (operator === '') {
        sum1 = sum1.substring(0, sum1.length - 1);
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    } else if (operator !== '' && sum2 === '') {
        operator = operator.substring(0, 0);
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    } else if (operator !== '') {
        sum2 = sum2.substring(0, sum2.length - 1);
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    } else {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    }
    
}

// Made sum1 equal to operate function with current parameters. Then made
// display.textContent value be the roundToDecimal function called on the 
// calculated sum1. It previously gave an error when the result of the previous
// calculation was larger than 1000, and had a comma in it. In the operate function
// the comma wasn't recognized as a number, so the result became NaN or a wrong
// number. This way there's no commas in the calculated number stored in sum1 and
// the result is still displayed with commas in the calculator.
function inputEqualBtn() {
    equalBtnClicked = 0;
    if (sum1 === '' || sum2 === '' || operator === '') {
        return;
    }
    sum1 = operate(sum1, operator, sum2);
    display.textContent = roundToDecimal(sum1);
    console.log(sum1);
    sum2 = '';
    operator = '';
    equalBtnClicked = 1;
}

function inputClearBtn() {
    sum1 = '';
    sum2 = '';
    operator = '';
    while (display.firstChild) {
        display.removeChild(display.lastChild);
    }
    display.textContent = 0;
}

function inputOperatorBtn(opera) {
    if (operator !== '') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
        sum1 = operate(sum1, operator, sum2);
        display.textContent = roundToDecimal(sum1);
        operator = opera.textContent;
        display.textContent += ` ${opera.textContent}`;
        sum2 = '';
    } else {
        display.textContent += ` ${opera.textContent}`;
        operator = opera.textContent;
    }

}

document.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key == '+') { inputOperatorBtn(plus) }
    if (e.key == '-') { inputOperatorBtn(minus) }
    if (e.key == '*') { inputOperatorBtn(multiple) }
    if (e.key == '/') { inputOperatorBtn(division) }
    if (e.key == '.') { inputDecimalBtn() }
    if (e.key == 'Backspace') { inputBackspaceBtn() }
    if (e.key == 'Escape') { inputClearBtn() }
    if (e.key == 'Enter' || e.key == '=') { inputEqualBtn() }
    for (i = 0; i < 10; i++) {
        if (e.key === `${i}`) { inputNumBtn(num[i]) }
    }
})

document.addEventListener('click', (e) => {
    if (e.target.className === 'backspace') { inputBackspaceBtn() }
    if (e.target.id === 'minus') { inputOperatorBtn(minus) }
    if (e.target.id === 'plus') { inputOperatorBtn(plus) }
    if (e.target.id === 'multiply') { inputOperatorBtn(multiple) }
    if (e.target.id === 'divide') { inputOperatorBtn(division) }
    if (e.target.className === 'clear') { inputClearBtn() }
    if (e.target.className === 'equals') { inputEqualBtn() }
    if (e.target.className === 'decimal') { inputDecimalBtn() }
    for (i = 0; i < 10; i++) {
        if (e.target.id === `${num[i].id}`) { inputNumBtn(num[i]) }
    }
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
// 6. Look at the divide calculation, it throws up an error in many calcul
// 7. When operator is clicked, clicking operator btn again throws up an error.

