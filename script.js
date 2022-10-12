function selectPrato(i) {
    document.querySelector('check').style.display = 'block'
    for (let a=1; a<8; a++) {    
        let prato = '.prato' + a;
        let elementoInativo = document.querySelector(prato);
        elementoInativo.classList.remove('select');
    }
    let prato = '.prato' + i;
    let elementoAtivo = document.querySelector(prato);
    elementoAtivo.classList.toggle('select');
}



 