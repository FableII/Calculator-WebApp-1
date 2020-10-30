var numbers = document.getElementsByClassName('number'),
    operators = document.getElementsByClassName('operator'),
    decimalBtn = document.getElementById('decimal'),
    ce = document.getElementById('ce'),
    c = document.getElementById('c'),
    result = document.getElementById('result');

    
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
        number.addEventListener('click', numberPress);
    };

    
    for(var i = 0; i < operators.length; i++){
        var operator = operators[i];
        operator.addEventListener('click', operation);
    };

    c.addEventListener('click', clear);
    ce.addEventListener('click', clear);
    decimalBtn.addEventListener('click', decimal);
    
    
    


function numberPress(){

}

function operation(argument){

}

function decimal(argument){

}

function clear(argument){

}
