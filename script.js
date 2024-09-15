


let operatorSign = "";
let firstNum = 0;
let secondNum = "";
let negation = "";




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

    if(operator.innerText === "÷") operatorSign = "÷";

    if(operator.innerText === "×") operatorSign = "×";
    
    if(operator.innerText === "−") operatorSign = "−";

    if(operator.innerText === "+") operatorSign = "+";

    if(operator.innerText === "=") operation(firstNum,secondNum,operatorSign);



    updateScreenValue();

}

function editNumber(number){

    //if(number.innerText === "%" && variablesOnScreen[1] > 0);
    
    if(number.innerText === "C") 
        {
            firstNum = 0;
            secondNum = "";
            operatorSign = "";
        } ;
    
    if(number.innerText === "+/-") variablesOnScreen.shift = "-";

    updateScreenValue();
    

}


function updateScreenValue(){

    let variablesOnScreen = [negation,firstNum,operatorSign,secondNum]
    screen.value = variablesOnScreen.join("");

}

function assignNumber(number){
    
   
    if(operatorSign === ""){

        firstNum = number.innerText;
        

    } else {

        secondNum = number.innerText;
    }
    
    updateScreenValue();
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

    if (b == 0 ){

        return "Error";
    }

    let division = a / b;

    firstNum = division;

}


function operation(firstNum , secondNum , operator){


    if(operator === "+"){

        add(firstNum,secondNum);

    }
    if(operator === "-"){

        subtract(firstNum,secondNum);
        
    }

    if(operator === "×"){

        multiply(firstNum,secondNum);
        
    }

    if(operator === "÷"){
        
        divide(firstNum,secondNum);
    }


}
