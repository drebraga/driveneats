
function selectPrato(i) {
    const elementoAtivo = document.querySelector('.prato' + i);
    const res = elementoAtivo.classList.contains('selectprato');
    if (res == false) {
        for (let a = 1; a < 8; a++) {
            const elementoInativo = document.querySelector('.prato' + a);
            elementoInativo.classList.remove('selectprato');
        }
        elementoAtivo.classList.add('selectprato');
    }
    else {
        elementoAtivo.classList.remove('selectprato');
    }
}

function selectBebida(i) {
    const elementoAtivo = document.querySelector('.bebida' + i);
    const res = elementoAtivo.classList.contains('selectbebida');
    if (res == false) {
        for (let a = 1; a < 8; a++) {
            const elementoInativo = document.querySelector('.bebida' + a);
            elementoInativo.classList.remove('selectbebida');
        }
        elementoAtivo.classList.add('selectbebida');
    }
    else {
        elementoAtivo.classList.remove('selectbebida');
    }
}

function selectSobremesa(i) {
    const elementoAtivo = document.querySelector('.sobremesa' + i);
    const res = elementoAtivo.classList.contains('selectsobremesa');
    if (res == false) {
        for (let a = 1; a < 8; a++) {
            const elementoInativo = document.querySelector('.sobremesa' + a);
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
    document.querySelector('.botaoDisable').value = ` Selecione os 3 itens 
para fechar o pedido`;
    botaoDisable.classList.remove('botaoEnable');

    // Confere se algum prato foi selecionado
    const precoP = document.querySelector('.selectprato')

    // Confere se alguma bebida foi selecionada
    const precoB = document.querySelector('.selectbebida');

    // Confere se alguma sobremesa foi selecionada
    const precoS = document.querySelector('.selectsobremesa');

    // Condicional para Habilitar o botão de fechar pedido.
    if (precoP !== null && precoB !== null && precoS !== null) {
        document.querySelector('.botaoDisable').disabled = false;
        document.querySelector('.botaoDisable').value = 'Fechar pedido';
        const botaoEnable = document.querySelector('.botaoDisable');
        botaoEnable.classList.add('botaoEnable');
    }
}

function confirmarPedido() {
    //Aparece o bonus
    const bonus = document.querySelector('.total');
    bonus.classList.remove('escondidoBonus');
    // Elementos selecionados
    const precoP = document.querySelector('.selectprato');
    const precoB = document.querySelector('.selectbebida');
    const precoS = document.querySelector('.selectsobremesa');
    // Pega os nomes
    const nomePrato = String(precoP.children[1].innerText);
    const nomeBebida = String(precoB.children[1].innerText);
    const nomeSobre = String(precoS.children[1].innerText);
    // Pega os preços em texto
    const precoTextoP = String(precoP.children[3].innerText);
    const precoTextoB = String(precoB.children[3].innerText);
    const precoTextoS = String(precoS.children[3].innerText);
    // Calcula os preços
    const precoP_string = precoTextoP.replace(/[^0-9]/g, '');
    const precoPrato = Number(precoP_string) / 100;
    const precoB_string = precoTextoB.replace(/[^0-9]/g, '');
    const precoBebida = Number(precoB_string) / 100;
    const precoS_string = precoTextoS.replace(/[^0-9]/g, '');
    const precoSobre = Number(precoS_string) / 100;
    let total = precoPrato + precoBebida + precoSobre;
    total = String(total.toFixed(2));
    // Muda texto para os nomes dos itens
    document.querySelector('.pratoConfirm').innerText = nomePrato;
    document.querySelector('.bebidaConfirm').innerText = nomeBebida;
    document.querySelector('.sobreConfirm').innerText = nomeSobre;
    // Muda texto para o valor dos itens
    document.querySelector('.precoPratoConfirm').innerText = precoTextoP;
    document.querySelector('.precoBebidaConfirm').innerText = precoTextoB;
    document.querySelector('.precoSobreConfirm').innerText = precoTextoS;
    document.querySelector('.valorTotalConfirm').innerText = 'R$ '+total;
}

function cancelarPedido() {
    const bonus = document.querySelector('.total');
    bonus.classList.add('escondidoBonus');
}

function fecharPedido() {
    const precoP = document.querySelector('.selectprato');
    const precoB = document.querySelector('.selectbebida');
    const precoS = document.querySelector('.selectsobremesa');
    // Pega os nomes
    const nomePrato = String(precoP.children[1].innerText);
    const nomeBebida = String(precoB.children[1].innerText);
    const nomeSobre = String(precoS.children[1].innerText);
    // Pega os preços
    const precoP_string = String(precoP.children[3].innerText).replace(/[^0-9]/g, '');
    const precoPrato = Number(precoP_string) / 100;
    const precoB_string = String(precoB.children[3].innerText).replace(/[^0-9]/g, '');
    const precoBebida = Number(precoB_string) / 100;
    const precoS_string = String(precoS.children[3].innerText).replace(/[^0-9]/g, '');
    const precoSobre = Number(precoS_string) / 100;
    let total = precoPrato + precoBebida + precoSobre;
    total = total.toFixed(2);

    const uri = "Olá, gostaria de fazer o pedido: \n - Prato: " + nomePrato + "\n - Bebida: " + nomeBebida + "\n - Sobremesa: " + nomeSobre + "\n Total: R$ " + total;
    const encoded1 = encodeURIComponent(uri);
    window.open("https://wa.me/5561981954985?text=" + encoded1, '_blank');

}

