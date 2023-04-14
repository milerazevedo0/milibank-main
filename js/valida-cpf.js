export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        campo.setCustomValidity('Esse cpf não é válido');
    }

};

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        '0000000000000',
        '1111111111111',
        '2222222222222',
        '3333333333333',
        '4444444444444',
        '5555555555555',
        '6666666666666',
        '7777777777777',
        '8888888888888',
        '9999999999999'
    ];

    return numerosRepetidos.includes(cpf);
};

function validaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho <9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma ==10 || soma==11){
        soma = 0
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf){
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho <10; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma ==10 || soma==11){
        soma = 0
    }

    return soma != cpf[10];
}