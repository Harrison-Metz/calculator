let num1 = '';
let operator = '';
let num2 = '';
let input = '';
let opCounter = 0;
let answer = '';
let opClicked = false;

const inputBox = document.getElementById('inputBox');
const equalsBtn = document.getElementById('equals');
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.op');
const clearBtn = document.getElementById('clear');

function operate(a, b, op){
    let A = parseInt(a);
    let B = parseInt(b);
    // operator = '';
    if(op === '+'){
        return A + B;
    }else if(op === '-'){
        return A - B;
    }else if(op === 'x'){
        return A * B;
    }else if(op === '/'){
        return A / B;
    }else if(op === '%'){
        return A % B;
    }
};

numberButtons.forEach(button => {
    button.addEventListener('click', function(){
        if(opCounter > 0){
            input = '';
            num2 = '';
        }
        opClicked = false;
        input += button.innerHTML;
        inputBox.value = input;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', function(){
        if(!opClicked){
            if(opCounter === 0){
                opClicked = true;
                num1 = input;
                operator = button.innerHTML;
                opCounter++;
                input = '';
                inputBox.value = input;
            }else{
                opClicked = true;
                num2 = inputBox.value;
                let temp = operate(num1, num2, operator);
                num1 = temp;
                operator = button.innerHTML;
                inputBox.value = num1
            }
        }else{
            console.log('operator: ' + operator);
            console.log('button: ' + button.innerHTML);
            if(operator != button.innerHTML){
                operator = button.innerHTML;
            }
        }
    });
});

equalsBtn.addEventListener('click', function(){
    if(opCounter === 1){
        num2 = inputBox.value;
        answer = operate(num1, num2, operator);
        inputBox.value = answer;
        input = inputBox.value;
        opCounter = 0;
        console.log(answer);
    }
});

clearBtn.addEventListener('click', function(){
    num1 = '';
    num2 = '';
    operator = '';
    input = '';
    answer = '';
    opCounter = 0;
    inputBox.value = '';
});