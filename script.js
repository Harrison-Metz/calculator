let num1;
let operator;
let num2;
let equation = '';

const inputBox = document.getElementById('inputBox');
const equalsBtn = document.getElementById('equals');
const numberButtons = document.querySelectorAll('.num');

numberButtons.forEach(button => {
    button.addEventListener('click', function(){
        equation += button.innerHTML;
        inputBox.value = equation;
    })
});

equalsBtn.addEventListener('click', function(){
    console.log(equation);
})
function add(){

};

function subtract(){

};

function multiply(){

};

function divide(){

};

function mod(){

};

function clear(){
    num1 = '';
    operator = '';
    num2 = '';
};

function operate(a, b, op){

};