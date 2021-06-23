// our relations 
const display = document.querySelector('.diplay');
const operator = document.querySelectorAll('.operator');
const num = document.querySelectorAll(".num");
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const math = document.querySelector('.math');
const dot = document.querySelector('.dot');

//our contanier strings & controlers

let displayOne = '';
let displayTwo = '';
let calcu = false;
let prosses = '';
let last = '';
let prossesT = '';
let reset = false;

// our btn reactors 

num.forEach(button => {
    button.addEventListener('click', e => {
        if (reset === true) {
            math.innerText = '0';
            reset = false;
        }
        displayOne += e.target.innerText;
        display.innerText = displayOne;
    });
});

dot.addEventListener('click', e => {
    if (displayOne.includes('.')){
        return;
    } else {
        displayOne += e.target.innerText;
        display.innerText = displayOne;
    };
});

operator.forEach(button => {
    button.addEventListener('click', e => {
        if (reset === true) {
            prosses = e.target.innerText;
            math.innerText = displayTwo + prosses;
            display.innerText = "0";
            last = displayTwo;
            displayTwo = '';
            reset = false;
        } else if (calcu === false) {
            prosses = e.target.innerText;
            last = displayOne;
            displayOne = '';
            math.innerText = last + ' '+ prosses;
            display.innerText = '0';
            calcu = true;
        } else if (calcu === true){
            prossesT = e.target.innerText;
            operation();
            last = displayTwo;
            displayOne = '';
            display.innerText = '0';
            reset = false;
        }
    });
});

equal.addEventListener('click', e =>{
    gives()
    displayOne = '';
})

clear.addEventListener('click', e => {
    displayOne = '';
    displayTwo = '';
    calcu = false;
    prosses = '';
    last = '';
    prossesT = '';
    math.innerText = '0';
    display.innerText = '0';
    reset = false;
})

del.addEventListener('click', e => {
    deleting();
})
// our functions
function operation (){
    if (prosses === '-'){
        displayTwo = parseFloat(last) - parseFloat(displayOne);
        display.innerText = displayTwo;
        math.innerText = displayTwo + prossesT;
        prosses = prossesT;
    } else if (prosses === '+'){
        displayTwo = parseFloat(last) + parseFloat(displayOne);
        display.innerText = displayTwo;
        math.innerText = displayTwo + prossesT;
        prosses = prossesT;
    } else if (prosses === 'x'){
        displayTwo = parseFloat(last) * parseFloat(displayOne);
        display.innerText = displayTwo;
        math.innerText = displayTwo + prossesT;
        prosses = prossesT;
    } else if (prosses === '/'){
        displayTwo = parseFloat(last) / parseFloat(displayOne);
        display.innerText = displayTwo;
        math.innerText = displayTwo + prossesT;
        prosses = prossesT;
    }; 
};


function gives () {
    if (prosses === '-'){
        displayTwo = parseFloat(last) - parseFloat(displayOne);
        display.innerText = displayTwo;
        reset = true;
    } else if (prosses === '+'){
        displayTwo = parseFloat(last) + parseFloat(displayOne);
        display.innerText = displayTwo;
        reset = true;
    } else if (prosses === 'x'){
        displayTwo = parseFloat(last) * parseFloat(displayOne);
        display.innerText = displayTwo;
        reset = true;
    } else if (prosses === '/'){
        displayTwo = parseFloat(last) / parseFloat(displayOne);
        display.innerText = displayTwo;
        reset = true;
    }; 
};

function deleting (){
    if (reset === true) {
        display.innerText = '0'
        displayOne = '';
        displayTwo = '';
    } else {
        if (displayOne === ''&& displayTwo === '') {
            display.innerText = '0';
        } else {
            display.innerText = displayOne.slice(0, -1);
            displayOne = display.innerText
        }
    }
};
