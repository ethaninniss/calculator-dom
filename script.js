const clickedButtonsArr = [];

function button0() {
    clickedButtonsArr.push('0');
}

function button1() {
    clickedButtonsArr.push('1');
}

function button2() {
    clickedButtonsArr.push('2');
}

function button3() {
    clickedButtonsArr.push('3');
}

function button4() {
    clickedButtonsArr.push('4');
}

function button5() {
    clickedButtonsArr.push('5');
}

function button6() {
    clickedButtonsArr.push('6');
}

function button7() {
    clickedButtonsArr.push('7');
}

function button8() {
    clickedButtonsArr.push('8');
}

function button9() {
    clickedButtonsArr.push('9');
}

function buttonDecimal() {
    clickedButtonsArr.push('.');
}

function buttonPlus() {
    clickedButtonsArr.push('+');
}

function buttonMinus() {
    clickedButtonsArr.push('-');
}

function buttonMultiply() {
    clickedButtonsArr.push('x');
}

function buttonDivide() {
    clickedButtonsArr.push('÷');
}

function buttonEqual() {
    document.getElementById("display").innerHTML = calculate();
}


const concatinate = function() {
    const string = clickedButtonsArr.join('');
    const concatedArr = [];
    let digitIndex;
    let operatorIndex;
    for (let i = 0; i < string.length; i++) {
        if (/\d/.test(string[i]) && !(/\d/.test(string[i - 1]))) digitIndex = i;
        if (!(/\d/.test(string[i]))) {
            operatorIndex = i;
            concatedArr.push(string.substring(digitIndex, operatorIndex));
            concatedArr.push(string[i]);
        }
    }
    return concatedArr;
};

const concatedArr = concatinate();

const turnToNumber = function() {
    concatedArr.map(num => {
        if (/\d/.test(num)) {
            return Number(num);
        }
        else {
            return num;
        }
    });
}

const numberArr = turnToNumber();

function calculate() {
    const arr = numberArr;
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === '+') result += arr[i + 1];
        if (arr[i] === '-') result -= arr[i + 1];
        if (arr[i] === 'x') result *= arr[i + 1];
        if (arr[i] === '÷') result /= arr[i + 1];
    }
    return result;
}
