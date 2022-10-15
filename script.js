// Variáveis
let precoP = null; let precoB = null; let precoS = null; let nomePrato = null; let nomeBebida = null;
let nomeSobre = null; let total = null; let nomeCliente = null; let endCliente = null;
//
const bonus = document.querySelector('.total');
// Seleciona e define qual o prato/bebida/sobremesa foi selecionado
function selectPrato(i) {
    precoP = document.querySelector('.prato' + i);
    const res = precoP.classList.contains('selectprato');
    if (res == false) {
        for (let a = 1; a < 8; a++) {
            const elInativo = document.querySelector('.prato' + a);
            elInativo.classList.remove('selectprato');
        }
        precoP.classList.add('selectprato');
        return (precoP);
    }
    else {
        precoP.classList.remove('selectprato');
        return (precoP = null);
    }
}
function selectBebida(i) {
    precoB = document.querySelector('.bebida' + i);
    const res = precoB.classList.contains('selectbebida');
    if (res == false) {
        for (let a = 1; a < 8; a++) {
            const elInativo = document.querySelector('.bebida' + a);
            elInativo.classList.remove('selectbebida');
        }
        precoB.classList.add('selectbebida');
        return (precoB);
    }
    else {
        precoB.classList.remove('selectbebida');
        return (precoB = null);
    }
}
function selectSobremesa(i) {
    precoS = document.querySelector('.sobremesa' + i);
    const res = precoS.classList.contains('selectsobremesa');
    if (res == false) {
        for (let a = 1; a < 8; a++) {
            const elInativo = document.querySelector('.sobremesa' + a);
            elInativo.classList.remove('selectsobremesa');
        }
        precoS.classList.add('selectsobremesa');
        return (precoS);
    }
    else {
        precoS.classList.remove('selectsobremesa');
        return (precoS = null);
    }
}
// Habilita ou desabilita o botão de fechar pedido
function buttonEnable() {
    // Condicional para Habilitar o botão de fechar pedido.
    if (precoP !== null && precoB !== null && precoS !== null) {
        document.querySelector('.botaoDisable').disabled = false;
        document.querySelector('.botaoDisable').value = 'Fechar pedido';
        document.querySelector('.botaoDisable').classList.add('botaoEnable');
    }
    // Desabilitar
    else {
        document.querySelector('.botaoDisable').disabled = true;
        document.querySelector('.botaoDisable').value = "Selecione os 3 itens \npara fechar o pedido";
        document.querySelector('.botaoDisable').classList.remove('botaoEnable');
    }
}
// BONUS 2 ---------------------------------------------------------
function confirmarPedido() {
    // BONUS 1 -----------------------------------------------------
    nomeCliente = prompt("Digite seu nome:");
    endCliente = prompt("Digite o endereço da entrega:");
    //Aparece o bonus
    bonus.classList.remove('escondidoBonus');
    // Pega os nomes
    nomePrato = String(precoP.children[1].innerText);
    nomeBebida = String(precoB.children[1].innerText);
    nomeSobre = String(precoS.children[1].innerText);
    // Pega os preços em texto
    let precoTextoP = String(precoP.children[3].innerText);
    let precoTextoB = String(precoB.children[3].innerText);
    let precoTextoS = String(precoS.children[3].innerText);
    // Calcula os preços
    let precoPrato = Number(precoTextoP.replace(/[^0-9]/g, '')) / 100;
    let precoBebida = Number(precoTextoB.replace(/[^0-9]/g, '')) / 100;
    let precoSobre = Number(precoTextoS.replace(/[^0-9]/g, '')) / 100;
    total = precoPrato + precoBebida + precoSobre;
    total = String(total.toFixed(2).replace('.', ','));
    // Muda texto para os nomes dos itens
    document.querySelector('.pratoConfirm').innerText = nomePrato;
    document.querySelector('.bebidaConfirm').innerText = nomeBebida;
    document.querySelector('.sobreConfirm').innerText = nomeSobre;
    // Muda texto para o valor dos itens
    document.querySelector('.precoPratoConfirm').innerText = precoTextoP;
    document.querySelector('.precoBebidaConfirm').innerText = precoTextoB;
    document.querySelector('.precoSobreConfirm').innerText = precoTextoS;
    document.querySelector('.valorTotalConfirm').innerText = 'R$ ' + total;
    return (nomeCliente,endCliente,nomePrato, nomeBebida, nomeSobre, total);
}
// Cancela e volta para a seleção
function cancelarPedido() {
    bonus.classList.add('escondidoBonus');
}
// Finaliza o pedido e vai para encaminha a mensagem no wpp
function fecharPedido() {
    const uri = "Olá, gostaria de fazer o pedido: \n - Prato: " + nomePrato + "\n - Bebida: " + nomeBebida + "\n - Sobremesa: " + nomeSobre + "\n Total: R$ " + total + "\n\n Nome: " + nomeCliente + "\n Endereço: " + endCliente;
    const encoded1 = encodeURIComponent(uri);
    window.open("https://wa.me/5561981954985?text=" + encoded1, '_blank');
}

