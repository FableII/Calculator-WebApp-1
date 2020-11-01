var numbers = document.getElementsByClassName('number'),
    operators = document.getElementsByClassName('operator'),
    decimalBtns = document.getElementById('decimal'),
    clearBtns =document.getElementsByClassName('clear-btn'),
    resultBtns = document.getElementById('result');
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';

    
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
        number.addEventListener('click', function(e){
            numberPress(e.target.textContent);
        });
    };

    
    for(var i = 0; i < operators.length; i++){
        var operator = operators[i];
        operator.addEventListener('click', function(e){
            operation(e.target.textContent);
        });
    };

    for(var i = 0; i < clearBtns.length; i++){
        var clearBtn = clearBtns[i];
        clearBtn.addEventListener('click', function(e){
            clear(e.target.id);
        });
    };


    
    decimalBtns.addEventListener('click', decimal);
    resultBtns.addEventListener('click', result)
    
function numberPress(num){
    if(MemoryNewNumber){
        display.value = num;
        MemoryNewNumber = false;
    } else {
        if(display.value === '0'){
            display.value = num;
        } else {
            display.value += num;
        };
    };
};

function operation(op){
    var localOperationMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOperation !== '='){
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+'){
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if(MemoryPendingOperation === '-'){
            MemoryCurrentNumber -=  parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*'){
            MemoryCurrentNumber *=  parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /=  parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber =  parseFloat(localOperationMemory);
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };
};

function decimal(argument){
    var localDecimalMemory = display.value;
    if(MemoryNewNumber){
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if(localDecimalMemory.indexOf('.')=== -1){
        localDecimalMemory += '.';
        };
    };
    display.value = localDecimalMemory;
};

function clear(id){
    if (id === 'ce'){
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c'){
        display.value = '0';
        MemoryNewNumber = true;
        MemoryPendingOperation = '';
        MemoryCurrentNumber = 0;
    };
};
