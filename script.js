function selectPrato(i) {
    let prato = '.prato' + i;
    let elementoAtivo = document.querySelector(prato);
    const cond = Array(elementoAtivo).indexOf('select');
    for (let a = 1; a < 8; a++) {
        const pratoi = '.prato' + a;
        const elementoInativo = document.querySelector(pratoi);
        elementoInativo.classList.remove('select');
    }
    elementoAtivo.classList.add('select');

}
