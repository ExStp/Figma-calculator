// const buttonsPanel = document.querySelector('#buttons_panel');
// const operationOutput = document.querySelector('.operation');
// const resultOutput = document.querySelector('.result');

// let operation = '';
// let result = 0;

// buttonsPanel.addEventListener('click', e => {


//     let key = e.target.innerHTML;

//     switch (key) {
//         case '=':
//             result = eval(operation);
//             console.log('result = ' + result);
//             resultOutput.textContent = result;
//             operation = result;
//             operationOutput.textContent = '';
//             break;
//         case 'AC':
//             result = 0;
//             resultOutput.textContent = result;
//             operation = ''
//             operationOutput.textContent = operation;
//             console.log('operation = ' + operation);
//             console.log('result = ' + result);
//             break;

//         case 'backspace':
//             console.log('yes')

//         default:
//             operation += e.target.innerHTML;
//             operationOutput.textContent = operation;
//             console.log('operation = ' + operation);
//     }

// })

let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','x','/'];

const out = document.querySelector('.result');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
    console.log(a, b, sign)
}

document.querySelector('.ac').addEventListener('click', e => clearAll());

document.querySelector('.buttons').addEventListener('click', e => {
    if (!e.target.classList.contains('button')) return;
    if (e.target.textContent === '+/-') return;
    if (e.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = e.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            console.log(a, b ,sign)
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    if (key === '=') {
        if ( b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'x':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            default:
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
})
