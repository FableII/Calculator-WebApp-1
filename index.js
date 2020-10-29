var numbers = document.getElementsByClassName('number'),
    operators = document.getElementsByClassName('operator'),
    decimalBtn = document.getElementById('decimal'),
    ce = document.getElementById('ce'),
    c = document.getElementById('c'),
    result = document.getElementById('result');

    
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
        number.addEventListener('click', (e) =>{console.log("Клик по цифре")}  );
    };

    
    for(var i = 0; i < operators.length; i++){
        var operator = operators[i];
        operator.addEventListener('click', (e) =>{console.log("Клик по оператору")}  );
    };

    c.addEventListener('click', (e) =>{console.log("Клик по С")});
    ce.addEventListener('click', (e) =>{console.log("Клик по СE")});
    decimalBtn.addEventListener('click', (e) =>{console.log("Клик по .")});
    
    
    


function numberPress(){

}

function operation(argument){

}

function decimal(argument){

}

function clear(argument){

}

function howWork(argument){

}