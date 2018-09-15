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