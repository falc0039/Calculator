const add = (num1, num) => {
    return parseInt(num1) + parseInt(num);
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
const multiple = document.querySelector('.multiply');
const division = document.querySelector('.divide');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear')
let num = '';
let numArray = [];
let operatorArray = [];
let sum = '';

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
const calculate = (numArray, operatorArray) => {
    
    for (let i=0; i < operatorArray.length; i++) {
        sum += parseInt(numArray[i]);
        sum += operatorArray[i];
    }
    sum += numArray[(numArray.length - 1)];
    return sum;
}
// multiple.addEventListener('click', (e) => {
    
//     operator += multiple.t
// num1.addEventListener('click', (e) => {
//     if (operator !== '' || display.textContent === '0') {
//         while (display.firstChild) {
//             display.removeChild(display.lastChild);
//         }
//     }
//     display.textContent += num1.textContent;
// })
num2.addEventListener('click', (e) => {
    if (operator !== '' || display.textContent === '0') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
    }
    display.textContent += num2.textContent;
    
})
num3.addEventListener('click', (e) => {
    if (operator !== '' || display.textContent === '0') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
    }
    display.textContent += num3.textContent;
    
})
num4.addEventListener('click', (e) => {
    if (operator !== '' || display.textContent === '0') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
    }
    display.textContent += num4.textContent;
    
})
num5.addEventListener('click', (e) => {
    if (operator !== '' || display.textContent === '0') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
    }
    display.textContent += num5.textContent;
    
})
num6.addEventListener('click', (e) => {
    num += num6.textContent;
    display.textContent += num6.textContent;
    
})

num7.addEventListener('click', (e) => {
    if (operator !== '' || display.textContent === '0') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
    }
    if (operator !== '') {
        sum2 += num7.textContent;
    } else {
        sum1 += num7.textContent;
    }
    display.textContent += num7.textContent;
})
num8.addEventListener('click', (e) => {
    if (operator !== '' && sum1 !== ''|| display.textContent === '0') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
    }
    display.textContent += num8.textContent;
})
num9.addEventListener('click', (e) => {
    if (operator !== '' && display.textContent === ''|| display.textContent === '0') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
    }
    display.textContent += num9.textContent;
})
num0.addEventListener('click', (e) => {
    if (operator !== '' && display.textContent === ''|| display.textContent === '0') {
        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }
    }
    display.textContent += num0.textContent;
})
minus.addEventListener('click', (e) => {
    if (operator === '') {

    }
    // operator += minus.textContent;
    // sum1 = display.textContent; 
})
plus.addEventListener('click', (e) => {
    
    operator += plus.textContent;
    sum1 = display.textContent; 
})
division.addEventListener('click', (e) => {
    
    operator += division.textContent;
    sum1 = display.textContent; 
})
multiple.addEventListener('click', (e) => {
    display.textContent += multiple.textContent;
    numArray.push(num);
    operatorArray.push(multiple.textContent);
    num = '';
    // operator += multiple.textContent;
    // sum1 = display.textContent; 
})
equals.addEventListener('click', (e) => {
    // sum2 = display.textContent;
    // display.textContent = operate(sum1, operator, sum2);
    // sum1 = '';
    // sum2 = '';
    // operator = '';
    numArray.push(num);
    num = '';
    while (display.firstChild) {
        display.removeChild(display.lastChild);
    }
    calculate(numArray, operatorArray);
    display.textContent = eval(sum);
    numArray = [];
    operatorArray = [];
    
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



// numbers:
// display.textContent += number.textContent;
// num += number.textContent;

// operator :


// equals :
// numArray.push(num);
// num = '';
// while (display.firstChild) {
//     display.removeChild(display.lastChild);
// }
// calculate(numArray, operatorArray);
// display.textContent = sum;
// numArray = [];
// operatorArray = [];



