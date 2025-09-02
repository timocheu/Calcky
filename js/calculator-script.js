const num1 = document.getElementById("txtNum1");
const num2 = document.getElementById("txtNum2");

function Calculate(event)
{
    let n1 = +num1.value;
    let n2 = +num2.value;
    
    switch (event.target.value) {
        case '+':
            alert(n1+n2);
            break;
        case '-':
            alert(n1-n2);
            break;
        case '*':
            alert(n1*n2);
            break;
        case '/':
            alert(n1/n2);
            break;
        default:
            num1.value = '';
            num2.value = '';
            break;
    }
}