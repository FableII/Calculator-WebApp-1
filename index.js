var numbers = document.getElementsByClassName('number'),
    operators = document.getElementsByClassName('operator'),
    decimalBtns = document.getElementById('decimal'),
    clearBtns =document.getElementsByClassName('clear-btn'),
    resultBtns = document.getElementById('result');

    
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
        number.addEventListener('click', numberPress);
    };

    
    for(var i = 0; i < operators.length; i++){
        var operator = operators[i];
        operator.addEventListener('click', operation);
    };

    for(var i = 0; i < clearBtns.length; i++){
        var clearBtn = clearBtns[i];
        clearBtn.addEventListener('click', function(e){
            clear(e.target.id);
        });
    };


    
    decimalBtns.addEventListener('click', decimal);
    resultBtns.addEventListener('click', result)
    
    
    


function numberPress(){
    console.log("Клик по цифре")
}

function operation(argument){
    console.log("Клик по кнопке: операции")
}

function decimal(argument){
    console.log("Клик по кнопке: .")
}

function clear(id){
console.log("Клик по кнопке: " + id + " !")
}

function result(){
    console.log("Клик по кнопке:равно")
}
