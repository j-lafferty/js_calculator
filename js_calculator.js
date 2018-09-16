var init;

var userOp = "";
var userY;
var userX;
var output;

function add(num1, num2) {
    userX = num1 + num2;
    return;
};

function subtract(num1, num2) {
    userX = num1 - num2;
    return;
};

function multiply(num1, num2) {
    userX = num1 * num2;
    return;
};

function divide(num1, num2) {
    userX = num1 / num2;
    return;
};

function operator(op, num1, num2) {
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
    return;
};
//default display on page load
function defaultState() {
    init = 0;
    document.getElementById("display-scroll").innerHTML = init;
};
//clear all input
function clear1() {
    userX = "";
    userOp = "";
    userY = "";
    init = 0;
    document.getElementById("display-scroll").innerHTML = init;
};
//clear default display when digit is pressed
function clearInit() {
    if (init === 0) {
            init = "";
            document.getElementById("display-scroll").innerHTML = init;
    };
};
//use to remove oporator sign once new digit has been selected
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
    userY = userX;
    userX = "";
    userOp = button.value;
    document.getElementById("display-scroll").innerHTML = userOp;
};

function digit(button) {
    clearInit();
    userX = button.value;
    if (userOp !== undefined) {
        document.getElementsByClassName("digit").addEventListener("click", clearOperator());
    };
    document.getElementById("display-scroll").innerHTML += userX;
};

function period(button) {
    clearInit();
    userX = button.value;
    document.getElementById("display-scroll").innerHTML += userX;
};

function equals() {
    let op = userOp;
    let num1 = userY;
    let num2 = userX;
    operator(op, num1, num2);
    document.getElementById("display-scroll").innerHTML = output;
};