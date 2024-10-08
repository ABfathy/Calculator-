
let operatorSign = "";
let firstNum = "";
let secondNum = "";


let numbers = document.querySelectorAll(".numbers button:not(.top)");

let numbersTop = document.querySelectorAll(".numbers .top");

let operators = document.querySelectorAll(".operators button");

let screen = document.querySelector("input"); 



numbersTop.forEach(number =>{

    number.addEventListener("click",() => editNumber(number));
})

numbers.forEach(number =>{
    number.addEventListener("click", () => assignNumber(number));
})

operators.forEach(operator => {
    operator.addEventListener("click",() => selectOperator(operator));

})


function selectOperator(operator){

    if(!firstNum == ""){
        if(operator.innerText === "÷") operatorSign = "÷";

        if(operator.innerText === "×") operatorSign = "×";
        
        if(operator.innerText === "−") operatorSign = "−";

        if(operator.innerText === "+") operatorSign = "+";

        if(operator.innerText === "=") operation(Number(firstNum),Number(secondNum),operatorSign);
        
        updateScreenValue();
    
    }

    

}

function editNumber(number){

    if(number.innerText === "%"){

        if(operatorSign === ""){
           firstNum = firstNum / 100;
        } else 
        if (operatorSign !== ""){
            
            secondNum = secondNum / 100;
        }
    };
    
    if(number.innerText === "C") 
        {
            firstNum = "";
            secondNum = "";
            operatorSign = "";
           
        } ;
    
    if(number.innerText === "+/-") {

       toggleNegation();

    };

    updateScreenValue();
    

}


function updateScreenValue(){

    
    let variablesOnScreen = [`${firstNum}`,`${operatorSign}`,`${secondNum}`]

    if(screen.value.length > 15){

        screen.value = "Calm Down";
        firstNum = "";
        secondNum = "";
        operatorSign = "";
        
    } else {
    screen.value = variablesOnScreen.join("");}

  
}

function assignNumber(number){
    
    firstNum = String(firstNum);
    secondNum = String(secondNum);
    
    

    if(number.innerText === "."){

        if (!firstNum.includes(".") && operatorSign === "") {
            firstNum = firstNum.concat(".");
        } else
        if (!secondNum.includes(".") && operatorSign !== "") {
            secondNum = secondNum.concat(".");
        } 
    } 
        else {

            if(operatorSign === ""){

                
                firstNum = firstNum.concat(number.innerText);

            } else {

            secondNum = secondNum.concat(number.innerText);
            
            } 
        }
        
    
    updateScreenValue();
}



function toggleNegation(){

    
    if(operatorSign === ""){
        firstNum = toggleNegative(firstNum);

    } else {

        secondNum = toggleNegative(secondNum);
    }

}


function toggleNegative(num) {
    
    num = String(num);
    return num.startsWith("-") ? num.slice(1) : "-" + num;
}



function operation(firstNum , secondNum , operator){


    if(operator === "+"){

        add(firstNum,secondNum);

    }
    if(operator === "−"){

        subtract(firstNum,secondNum);
        
    }

    if(operator === "×"){

        multiply(firstNum,secondNum);
        
    }

    if(operator === "÷"){
        
        divide(firstNum,secondNum);
    }

    resetValues();

}

function resetValues(){

    operatorSign = "";
    secondNum = "";
   

}

function add(a , b){

    let sum = a + b;
    firstNum = sum;
   
}

function subtract(a , b){

    let subtraction = a - b;

    firstNum = subtraction;

   
}

function multiply(a , b){

    let product = a * b;

    firstNum = product;

    
}

function divide(a , b){

    if (b === 0 ){

       firstNum = "Error";

       setTimeout(() => {
        firstNum = "";
       }, 100) 

    } else {

        let division = a / b;

        firstNum = division;
    }

}
