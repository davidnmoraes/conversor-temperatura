let lastFocusedInput = null;

function converter() {
    const de = document.getElementById('refe').value;
    const para = document.getElementById('result').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    let resultado;

    if (lastFocusedInput === 'num1') {
        switch(de) {
            case 'C':
                switch(para) {
                    case 'C2':
                        resultado = num1;
                        break;
                    case 'F2':
                        resultado = (9 / 5) * num1 + 32;
                        break;
                    case 'K2':
                        resultado = num1 + 273.15;
                        break;
                    case 'R2':
                        resultado = (num1 * 1.8) + 491.67;
                        break;
                }
                break;
            case 'F':
                switch(para) {
                    case 'C2':
                        resultado = ((num1 - 32) * 5) / 9;
                        break;
                    case 'F2':
                        resultado = num1;
                        break;
                    case 'K2':
                        resultado = (((num1 - 32) * 5) / 9) + 273.15;
                        break;
                    case 'R2':
                        resultado = num1 + 459.67;
                        break;
                }
                break;
            case 'K':
                switch(para) {
                    case 'C2':
                        resultado = num1 - 273.15;
                        break;
                    case 'F2':
                        resultado = (((num1 - 273.15) * 9) / 5) + 32;
                        break;
                    case 'K2':
                        resultado = num1;
                        break;
                    case 'R2':
                        resultado = num1 * 1.8;
                        break;
                }
                break;
            case 'R':
                switch(para) {
                    case 'C2':
                        resultado = (num1 - 491.67) / 1.8;
                        break;
                    case 'F2':
                        resultado = num1 - 459.67;
                        break;
                    case 'K2':
                        resultado = num1 / 1.8;
                        break;
                    case 'R2':
                        resultado = num1;
                        break;
                }
                break;
        }
        document.getElementById('num2').value = resultado.toFixed(2);
    } else if (lastFocusedInput === 'num2') {
        switch(para.replace("2", "")) {
            case 'C':
                switch(de) {
                    case 'C':
                        resultado = num2;
                        break;
                    case 'F':
                        resultado = (9 / 5) * num2 + 32;
                        break;
                    case 'K':
                        resultado = num2 + 273.15;
                        break;
                    case 'R':
                        resultado = (num2 * 1.8) + 491.67;
                        break;
                }
                break;
            case 'F':
                switch(de) {
                    case 'C':
                        resultado = ((num2 - 32) * 5) / 9;
                        break;
                    case 'F':
                        resultado = num2;
                        break;
                    case 'K':
                        resultado = (((num2 - 32) * 5) / 9) + 273.15;
                        break;
                    case 'R':
                        resultado = num2 + 459.67;
                        break;
                }
                break;
            case 'K':
                switch(de) {
                    case 'C':
                        resultado = num2 - 273.15;
                        break;
                    case 'F':
                        resultado = (((num2 - 273.15) * 9) / 5) + 32;
                        break;
                    case 'K':
                        resultado = num2;
                        break;
                    case 'R':
                        resultado = num2 * 1.8;
                        break;
                }
                break;
            case 'R':
                switch(de) {
                    case 'C':
                        resultado = (num2 - 491.67) / 1.8;
                        break;
                    case 'F':
                        resultado = num2 - 459.67;
                        break;
                    case 'K':
                        resultado = num2 / 1.8;
                        break;
                    case 'R':
                        resultado = num2;
                        break;
                }
                break;
        }
        document.getElementById('num1').value = resultado.toFixed(2);
    }
}

function limpar(inputId) {
    document.getElementById(inputId).value = '';
    lastFocusedInput = inputId;
}
