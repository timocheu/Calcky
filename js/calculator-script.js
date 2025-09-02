
function Calculate(event)
{
    const num1 = document.getElementById("txtNum1");
    const num2 = document.getElementById("txtNum2");

    if (event.target.value === "CLEAR") {
        num1.value = '';
        num2.value = '';
        return;
    }

    let n1 = +num1.value;
    let n2 = +num2.value;

    let res = "Result: ";
    
    switch (event.target.value) {
        case '+':
            res += n1+n2;
            break;
        case '-':
            res += n1-n2;
            break;
        case '*':
            res += n1*n2;
            break;
        case '/':
            res += n1/n2;
            break;
    }

    alert(res);
}