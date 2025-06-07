const inputData = document.getElementById('display');
const numButton = document.querySelectorAll('.buttons');
const clearButton = document.querySelector('.clear');
const Equals = document.querySelector('.equalTo');
const operator = document.querySelectorAll('.operator');
const backSpace = document.querySelector('.backspace'); 
const Decimal = document.querySelector('.decimal');

//assign op1, op2 and operator null
let currentInput ='';
let currentOperator ='';
let previousInput ='';


// clear input
function clearInput(){
    clearButton.addEventListener('click', () =>{
        inputData.value = null;
        currentInput ='';
        previousInput ='';
        currentOperator ='';
    })
}


// displaying op1, op2 and  adding logic to avoid any error
function displayNumber() {
    numButton.forEach(button => {
    button.addEventListener('click', () =>{
      if(previousInput==='' || (previousInput!=='' && currentOperator==='')){
        previousInput += button.textContent;
        inputData.value = previousInput;
      }else if(previousInput!=='' && currentOperator===''){
        return;
      }else{
        currentInput += button.textContent;
        inputData.value = previousInput +currentOperator +currentInput;
      }
    })        
    });
}

// displaying operator and  adding logic to avoid any error
function addOperator(){
    operator.forEach(opbutton =>{
        opbutton.addEventListener('click', ()=>{
            if (previousInput==='') return;
            if (currentInput!==''){
            currentOperator = opbutton.textContent;
            inputData.value = previousInput+ currentOperator;
            currentInput='';
            }
            currentOperator = opbutton.textContent;
            inputData.value = previousInput+ currentOperator;
        })
    })
}


// remove recent action like button or operator whatever you click
function backspace(){
    backSpace.addEventListener('click', () =>{
        if(currentInput!==''){
            currentInput = currentInput.slice(0,-1);
            inputData.value = previousInput + currentOperator + currentInput;
        }else if(currentOperator!=='' && currentInput===''){
            currentOperator='';
            inputData.value= previousInput;
        }else{
            previousInput=previousInput.slice(0,-1);
            inputData.value = previousInput;
        }
    })
}


// you can also add decimal value but only one decimal per value
function decimal(){
    Decimal.addEventListener('click', () =>{
      if(previousInput!=='' && currentOperator===''){
        if (!previousInput.includes('.')) {
        previousInput+=Decimal.textContent;
        inputData.value = previousInput;

      }}else if(previousInput!=='' &&  currentOperator!==''){
        if (!currentInput.includes('.')){
        currentInput += Decimal.textContent;
        inputData.value = previousInput + currentOperator +currentInput;

      }}else if(previousInput===''){
        if (!previousInput.includes('.')){
        previousInput +=Decimal.textContent;
        inputData.value = previousInput;
      }}

    })
}



//most important calculating resultt
function calulateResult(){
    Equals.addEventListener('click', () =>{
        if (previousInput === '' || currentInput === '' || currentOperator === '') return;
        if (currentOperator==='+'){
            inputData.value = Number(previousInput) + Number(currentInput);
            currentInput ='';
            previousInput =inputData.value;
            currentOperator ='';
        }else if (currentOperator==='-'){
            inputData.value = Number(previousInput) - Number(currentInput);
            currentInput ='';
            previousInput =inputData.value;
            currentOperator ='';
        }else if (currentOperator==='*'){
            inputData.value = Number(previousInput) * Number(currentInput);
            currentInput ='';
            previousInput =inputData.value;
            currentOperator ='';
        }else if (currentOperator==='/'){
            inputData.value = Number(previousInput) / Number(currentInput);
            currentInput ='';
            previousInput =inputData.value;
            currentOperator ='';
        }else if (currentOperator==='^'){
            inputData.value = Number(previousInput) ** Number(currentInput);
            currentInput ='';
            previousInput =inputData.value;
            currentOperator ='';
        }
    })
}

// calling all my pookie function
displayNumber();
clearInput();
addOperator();
calulateResult();
backspace();
decimal();

// done and dusted at 21:02