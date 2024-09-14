

let firstNum;
let secondNum;
let operator;


function add(a , b){

    return a + b;

}

function subtract(a , b){

    return a - b;
}

function multiply(a , b){

    return a * b;
}

function divide(a , b){

    if (b == 0 ){

        return "Error";
    }

    return  a / b;
}


function operation(firstNum , secondNum , operator){


    if(operator === "+"){

        add(firstNum,secondNum);

    }
    if(operator === "-"){

        subtract(firstNum,secondNum);
        
    }

    if(operator === "*"){

        multiply(firstNum,secondNum);
        
    }

    if(operator === "/"){
        
        divide(firstNum,secondNum);
    }


}