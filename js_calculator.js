var init;

var displayOp;
var userOp;
var percentCheck;
var userY;
var userX;
var result;

function add(num1, num2) {
    result = parseFloat(num1) + parseFloat(num2);
};

function subtract(num1, num2) {
    result = parseFloat(num1) - parseFloat(num2);
};

function multiply(num1, num2) {
    result = parseFloat(num1) * parseFloat(num2);
};

function divide(num1, num2) {
    if (num2 == 0) {
        result = "ERROR";
    } else {
        result = parseFloat(num1) / parseFloat(num2);
    };    
};

function operate(op, num1, num2) {
    let operator = op;
    switch (operator) {
        case "plus":
            add(num1, num2);
            break;
        case "minus":
            subtract(num1, num2);
            break;
        case "times":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
    };
};

//default display on page load
function defaultState() {
    init = 0;
    displayInit();
};

//clear all input
function clear1() {
    userOp = null;
    displayOp = null;
    userX = null;
    userY = null;
    result = null;
    init = 0;
    percentCheck = null;
    displayInit();
};

//clear default display when digit is pressed
function clearInit() {
    if (init === 0) {
        init = null;
        displayInit();
    };
};

//clear result display when digit is pressed
function clearResult() {
    if (Number.isFinite(result)) {
        result = null;
        userX = null;
        percentCheck = null;
        displayResult();
    };    
};

//use to remove operator sign in display once new digit has been selected
function clearOperator() {
    //clear operator display once digit is pressed
    if (displayOp === undefined || displayOp === null) {
        displayUserX();
    } else {
        document.getElementsByClassName("digit").addEventListener("click", displayUserX());
    };
    displayOp = null;
};

//displays init to 'display-scroll'
function displayInit() {
    document.getElementById("display-scroll").innerHTML = init;
};

//displays userX to 'display-scroll'
function displayUserX() {
    document.getElementById("display-scroll").innerHTML = userX;
};

//displays result to 'display-scroll'
function displayResult() {
    document.getElementById("display-scroll").innerHTML = result;
};

//add decimal if userX does not already contain one
function containsDecimal(isDecimal) {
    //add a '0' in front of a leading decimal
    if (userX === undefined || userX === null) {
        userX = '0';
    };
    if (userX.indexOf(isDecimal) === -1) {
        userX += isDecimal;
    };
};

//change input number to negative or positive
function plusmn() {
    if (userX.charAt(0) === '-') {
        userX = userX.substr(1);
    } else {
        userX = '-' + userX;
    };
    displayUserX();
};

function percent() {
    if (percentCheck === undefined || percentCheck === null) {
        percentCheck = userX / 100;
    } else {
        percentCheck = percentCheck / 100;
    };
    userX = percentCheck;
    result = percentCheck;
    displayResult();
};

function operation(button) {
    if (percentCheck === undefined || percentCheck === null) {
        userY = userX;
    } else {
        userY = percentCheck;
    };
    userX = null;
    userOp = button.id;
    displayOp = button.value;
    document.getElementById("display-scroll").innerHTML = displayOp;
};

function digit(button) {
    clearInit();
    clearResult();
    if (userX === undefined || userX === null) {
        userX = button.value;
    } else {
        userX += button.value;
    };
    clearOperator();
};

function decimal(button) {
    clearInit();
    clearResult();
    containsDecimal(button.value);
    displayUserX();
};

function equals() {
    operate(userOp, userY, userX);
    userX = result;
    displayResult();
    percentCheck = null;
};