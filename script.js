
function selectPrato(i) {
    let prato = '.prato' + i;
    let elementoAtivo = document.querySelector(prato);
    let classeElAtv = String(document.querySelector(prato).classList);
    let res = classeElAtv.indexOf('select');
    if (res == -1) {
        for (let a = 1; a < 8; a++) {
            const pratoi = '.prato' + a;
            const elementoInativo = document.querySelector(pratoi);
            elementoInativo.classList.remove('select');
        }
        elementoAtivo.classList.add('select');
    }
    else {
        elementoAtivo.classList.remove('select');
    }
}

function selectBebida(i) {
    let bebida = '.bebida' + i;
    let elementoAtivo = document.querySelector(bebida);
    let classeElAtv = String(document.querySelector(bebida).classList);
    let res = classeElAtv.indexOf('select');
    if (res == -1) {
        for (let a = 1; a < 8; a++) {
            const bebidai = '.bebida' + a;
            const elementoInativo = document.querySelector(bebidai);
            elementoInativo.classList.remove('select');
        }
        elementoAtivo.classList.add('select');
    }
    else {
        elementoAtivo.classList.remove('select');
    }
}


function selectSobremesa(i) {
    let sobremesa = '.sobremesa' + i;
    let elementoAtivo = document.querySelector(sobremesa);
    let classeElAtv = String(document.querySelector(sobremesa).classList);
    let res = classeElAtv.indexOf('select');
    if (res == -1) {
        for (let a = 1; a < 8; a++) {
            const sobremesai = '.sobremesa' + a;
            const elementoInativo = document.querySelector(sobremesai);
            elementoInativo.classList.remove('select');
        }
        elementoAtivo.classList.add('select');
    }
    else {
        elementoAtivo.classList.remove('select');
    }
}
