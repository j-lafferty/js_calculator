var op;
var num1;
var num2;

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
//clear input
function clear(button) {
    x = button.value;
    document.getElementById("display-scroll").innerHTML = x;
};
//change input number to negative or positive
function plusmn(button) {

};
//convert input number to percentage
function percent(button) {

};

function operation(button) {
    x = button.value;
    document.getElementById("display-scroll").innerHTML += x;
};

function digit(button) {
    x = button.value;
    document.getElementById("display-scroll").innerHTML += x;
};

function period(button) {
    x = button.value;
    document.getElementById("display-scroll").innerHTML += x;
};