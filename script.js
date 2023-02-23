const buttonsPanel = document.querySelector('#buttons_panel');
const operationOutput = document.querySelector('.operation');
const resultOutput = document.querySelector('.result');

let operation = '';
let result = 0;

buttonsPanel.addEventListener('click', e => {


    let key = e.target.innerHTML;

    switch (key) {
        case '=':
            result = eval(operation);
            console.log('result = ' + result);
            resultOutput.textContent = result;
            operation = result;
            operationOutput.textContent = '';
            break;
        case 'AC':
            result = 0;
            resultOutput.textContent = result;
            operation = ''
            operationOutput.textContent = operation;
            console.log('operation = ' + operation);
            console.log('result = ' + result);
            break;

        case 'backspace':
            console.log('yes')

        default:
            operation += e.target.innerHTML;
            operationOutput.textContent = operation;
            console.log('operation = ' + operation);
    }

})