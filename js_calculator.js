var init;

var userOp;
var userY;
var userX;
var result;

function add(num1, num2) {
    result = num1 + num2;
};

function subtract(num1, num2) {
    result = num1 - num2;
};

function multiply(num1, num2) {
    result = num1 * num2;
};

function divide(num1, num2) {
    result = num1 / num2;
};

function operate(op, num1, num2) {
    let operator = op;
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "&times":
            multiply(num1, num2);
            break;
        case "&divide":
            divide(num1, num2);
            break;
    };
};
//default display on page load
function defaultState() {
    init = 0;
    document.getElementById("display-scroll").innerHTML = init;
};
//clear all input
function clear1() {
    userX = null;
    userOp = null;
    userY = null;
    result = null;
    init = 0;
    document.getElementById("display-scroll").innerHTML = init;
};
//clear default display when digit is pressed
function clearInit() {
    if (init == 0) {
            init = null;
            document.getElementById("display-scroll").innerHTML = init;
    };
};
//use to remove oporator sign in display once new digit has been selected
function clearOperator() {
    document.getElementById("display-scroll").innerHTML = userX;
};
//change input number to negative or positive
function plusmn(button) {

};
//convert input number to percentage
function percent(button) {

};

function operation(button) {
    userY = userX * 1;
    userX = null;
    userOp = button.value;
    document.getElementById("display-scroll").innerHTML = userOp;
};

function digit(button) {
    if (userX === undefined || userX === null) {
        userX = button.value;
    } else {
        userX += button.value;
    }
    if (init === 0) {
        clearInit();
    };
    if (userOp === undefined || userOp === null) {
        document.getElementById("display-scroll").innerHTML = userX;
    } else {
        document.getElementsByClassName("digit").addEventListener("click", clearOperator());
    };
};

function period(button) {
    if (init === 0) {
        clearInit();
    }; 
    userX = button.value;
    document.getElementById("display-scroll").innerHTML += userX;
};

function equals() {
    userX *= 1;
    operate(userOp, userY, userX);
    userX = result;
    document.getElementById("display-scroll").innerHTML = userX;
};