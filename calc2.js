screen=document.getElementById('screen');

function press(value){
    if(screen.value == 0){
        screen.value='';
    }
    screen.value+=value;
}

function clearScreen(val){
    
}



function storeLastNumber(operatorElement) {
    if (!isNewEntry) {
        total = parseFloat(lastNumber);
        lastNumber = "";
    }

    screen.value = "";
    op = operatorElement.innerText.trim();
    expression.innerText += op;
    isNewExpression = false;

    // Remove the ripple effect from all operator buttons
    document.querySelectorAll('.operator button').forEach(button => {
        button.classList.remove("ripple");
    });

    // Produce a wave effect (add the ripple class) to the clicked operator button
    operatorElement.classList.add("ripple");
}
function performBasicOp() {
    if (op === "+") {
        total = add(total, parseFloat(lastNumber));
    } else if (op === "-") {
        total = sub(total, parseFloat(lastNumber));
    } else if (op === "*") {
        total = mult(total, parseFloat(lastNumber));
    } else if (op === "/") {
        total = divide(total, parseFloat(lastNumber));
    } else {
        total = parseFloat(lastNumber);
    }

    screen.value = total.toString(); // Update the screen value
    expression.innerText += lastNumber; // Update the expression
    isNewExpression = true; // Mark the start of a new expression
    return total;
}
function equals(equalElement) {
    equalElement = equalElement || this;
    screen.value = "";

    let value = performBasicOp();

    if (Number.isNaN(value)) {
        screen.value = "You broke it!";
    } else {
        screen.value = value;
        isNewEntry = true;
        isNewExpression = true;
    }
}
function add(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 - number2;
}
function mult(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number2 == 0 ? 0 : number1 / number2;
}

function calculate() {
    try {
        screen.value = new Function('return ' + screen.value)();
    } catch (error) {
        screen.value = 'Error';
    }
}

function sin()
    {
        screen.value=Math.sin(parseFloat(screen.value));
    }

    function cos()
    {
        screen.value=Math.cos(parseFloat(screen.value));
    }

    function tan()
    {
        screen.value=Math.tan(parseFloat(screen.value));
    }

    function pow()
    {
        screen.value=Math.pow(parseFloat(screen.value,2));
    }

    function sqrt()
    {
        screen.value=Math.sqrt(parseFloat(screen.value,2));
    }

    function log()
    {
        screen.value=Math.log(parseFloat(screen.value));
    }

    function pi()
    {
        screen.value= Math.PI;
    }

    function e()
    {
        screen.value=Math.E;
    }
    
    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        screen.value=f;
    }
/*
    function calculate() {
       var result=document.getElementById('screen').value;
       screen.value+=btntext;
    }
function sum(){
    var operand=parseInt(document.querySelectorAll('.btn'));
    for(iteams of btn)
    operand+=operand;
}
*/

var isNewEntry = true;
var lastNumber = '';
var total = 0;
var op = '';

function performBasicOp() {
    if (op === "+") {
        total = add(total, parseFloat(lastNumber));
    } else if (op === "-") {
        total = sub(total, parseFloat(lastNumber));
    } else if (op === "*") {
        total = mult(total, parseFloat(lastNumber));
    } else if (op === "/") {
        total = divide(total, parseFloat(lastNumber));
    } else {
        total = parseFloat(lastNumber);
    }

    return total;
}

function equals() {
    screen.value = performBasicOp();
    isNewEntry = true;
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error";
    }
}