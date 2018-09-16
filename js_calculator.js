var op;
var num1;
var num2;

var init;
var x;

function add() {
    return num1 + num2;
};

function subtract() {
    return num1 - num2;
};

function multiply() {
    return num1 * num2;
};

function divide() {
    return num1 / num2;
};

function operator(op, num1, num2) {
    var operator = op;
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    };
};

function defaultState() {
    init = 0;
    document.getElementById("display-scroll").innerHTML = init;
};
//clear input
function clear1() {
    x = "";
    op = "";
    init = 0;
    document.getElementById("display-scroll").innerHTML = init;
};
//clear initial value when digit is pressed
function clearInit() {
    if (init === 0) {
            init = "";
            document.getElementById("display-scroll").innerHTML = init;
    };
};
//change input number to negative or positive
function plusmn(button) {

};
//convert input number to percentage
function percent(button) {

};

function operation(button) {
    op = button.value;
};

function digit(button) {
    clearInit();
    x = button.value;
    document.getElementById("display-scroll").innerHTML += x;
};

function period(button) {
    clearInit();
    x = button.value;
    document.getElementById("display-scroll").innerHTML += x;
};