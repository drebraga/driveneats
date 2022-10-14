
function selectPrato(i) {
    const prato = '.prato' + i;
    const elementoAtivo = document.querySelector(prato);
    const classeElAtv = String(document.querySelector(prato).classList);
    const res = classeElAtv.indexOf('selectprato');
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
    const bebida = '.bebida' + i;
    const elementoAtivo = document.querySelector(bebida);
    const classeElAtv = String(document.querySelector(bebida).classList);
    const res = classeElAtv.indexOf('selectbebida');
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
    const sobremesa = '.sobremesa' + i;
    const elementoAtivo = document.querySelector(sobremesa);
    const classeElAtv = String(document.querySelector(sobremesa).classList);
    const res = classeElAtv.indexOf('selectsobremesa');
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
    const botaoDisable = document.querySelector('.botaoDisable');
    document.querySelector('.botaoDisable').value = 'Selecione os 3 itens para fechar o pedido';
    botaoDisable.classList.remove('botaoEnable');

    // Preço do prato
    const precoP = document.querySelector('.selectprato')

    // Preço da Bebida
    const precoB = document.querySelector('.selectbebida');

    // Preço da Sobremesa
    const precoS = document.querySelector('.selectsobremesa');

    // Condicional para Habilitar o botão de fechar pedido.
    if (precoP !== null && precoB !== null && precoS !== null) {
        document.querySelector('.botaoDisable').disabled = false;
        document.querySelector('.botaoDisable').value = 'Fechar pedido';
        const botaoEnable = document.querySelector('.botaoDisable');
        botaoEnable.classList.add('botaoEnable');

        const precoP_string = String(precoP.children[3].innerText).replace(/[^0-9]/g, '');
        const precoPrato = Number(precoP_string) / 100;
        console.log(precoPrato);
        const precoB_string = String(precoB.children[3].innerText).replace(/[^0-9]/g, '');
        const precoBebida = Number(precoB_string) / 100;
        console.log(precoBebida);
        const precoS_string = String(precoS.children[3].innerText).replace(/[^0-9]/g, '');
        const precoSobre = Number(precoS_string) / 100;
        console.log(precoSobre);
    }
}
function fecharPedido() {
    console.log('FUNÇÃO PARA ENCAMINHAR CLIENTE PARA O WPP');
}