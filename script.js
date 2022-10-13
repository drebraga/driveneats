
function selectPrato(i) {
    let prato = '.prato' + i;
    let elementoAtivo = document.querySelector(prato);
    let classeElAtv = String(document.querySelector(prato).classList);
    let res = classeElAtv.indexOf('selectprato');
    if (res == -1) {
        for (let a = 1; a < 8; a++) {
            const pratoi = '.prato' + a;
            const elementoInativo = document.querySelector(pratoi);
            elementoInativo.classList.remove('selectprato');
        }
        elementoAtivo.classList.add('selectprato');
    }
    else {
        elementoAtivo.classList.remove('selectprato');
    }
}
function selectBebida(i) {
    let bebida = '.bebida' + i;
    let elementoAtivo = document.querySelector(bebida);
    let classeElAtv = String(document.querySelector(bebida).classList);
    let res = classeElAtv.indexOf('selectbebida');
    if (res == -1) {
        for (let a = 1; a < 8; a++) {
            const bebidai = '.bebida' + a;
            const elementoInativo = document.querySelector(bebidai);
            elementoInativo.classList.remove('selectbebida');
        }
        elementoAtivo.classList.add('selectbebida');
    }
    else {
        elementoAtivo.classList.remove('selectbebida');
    }
}
function selectSobremesa(i) {
    let sobremesa = '.sobremesa' + i;
    let elementoAtivo = document.querySelector(sobremesa);
    let classeElAtv = String(document.querySelector(sobremesa).classList);
    let res = classeElAtv.indexOf('selectsobremesa');
    if (res == -1) {
        for (let a = 1; a < 8; a++) {
            const sobremesai = '.sobremesa' + a;
            const elementoInativo = document.querySelector(sobremesai);
            elementoInativo.classList.remove('selectsobremesa');
        }
        elementoAtivo.classList.add('selectsobremesa');
    }
    else {
        elementoAtivo.classList.remove('selectsobremesa');
    }
}
function buttonEnable() {
    // Desabilita o botão
    document.querySelector('.botaoDisable').disabled = true;
    let botaoDisable = document.querySelector('.botaoDisable');
    document.querySelector('.botaoDisable').value = 'Selecione os 3 itens para fechar o pedido';
    botaoDisable.classList.remove('botaoEnable');

    // Preço do prato
    let precoP = document.querySelector('.selectprato');
    let precoP_string = String(precoP.children[3].innerText).replace(/[^0-9]/g, '');
    let precoPrato = Number(precoP_string) / 100;

    // Preço da Bebida
    let precoB = document.querySelector('.selectbebida');
    let precoB_string = String(precoB.children[3].innerText).replace(/[^0-9]/g, '');
    let precoBebida = Number(precoB_string) / 100;

    // Preço da Sobremesa
    let precoS = document.querySelector('.selectsobremesa');
    let precoS_string = String(precoS.children[3].innerText).replace(/[^0-9]/g, '');
    let precoSobre = Number(precoS_string) / 100;

    console.log(precoPrato);
    console.log(precoBebida);
    console.log(precoSobre);

    // Condicional para Habilitar o botão de fechar pedido.
    if (precoPrato !== null && precoBebida !== null && precoSobre !== null) {
        document.querySelector('.botaoDisable').disabled = false;
        document.querySelector('.botaoDisable').value = 'Fechar pedido';
        let botaoEnable = document.querySelector('.botaoDisable');
        botaoEnable.classList.add('botaoEnable');
    }
}
function fecharPedido() {
    console.log('FUNÇÃO PARA FECHAR PEDIDO');
}