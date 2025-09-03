const num1 = document.getElementById("txtNum1");
const num2 = document.getElementById("txtNum2");

function Calculate(event)
{

    if (event.target.value == "CLEAR") {
        num1.value = '';
        num2.value = '';
        return;
    }

    let n1 = +num1.value;
    let n2 = +num2.value;

    switch (event.target.value) {
        case '+':
            Add(n1, n2);
            break;
        case '-':
            Subtract(n1, n2);
            break;
        case '*':
            Multiply(n1, n2);
            break;
        case '/':
            Divide(n1, n2);
            break;
    }
}

function Add(num1, num2)
{
    alert("Sum: " + (num1 + num2));
}

function Subtract(num1, num2)
{ 
    alert("Difference: " + (num1 - num2));
}

function Multiply(num1, num2)
{
    alert("Product: " + (num1 * num2));
}

function Divide(num1, num2)
{
    alert("Quotient: " + (num1 / num2));
}