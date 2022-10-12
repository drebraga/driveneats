function selectPrato(i) {
    let prato = 'prato' + i;
    let cond = document.getElementById(prato).className;
    if (i == 1 && cond != 'menuesc-select') {
        document.getElementById("prato1").className  = "menuesc-select";
        document.getElementById("prato2").className  = "menuesc";
        document.getElementById("prato3").className  = "menuesc";
        document.getElementById("prato4").className  = "menuesc";
        document.getElementById("prato5").className  = "menuesc";
        document.getElementById("prato6").className  = "menuesc";
        document.getElementById("prato7").className  = "menuesc";
    }
    else if (i == 2 && cond != 'menuesc-select') {
        document.getElementById("prato1").className  = "menuesc";
        document.getElementById("prato2").className  = "menuesc-select";
        document.getElementById("prato3").className  = "menuesc";
        document.getElementById("prato4").className  = "menuesc";
        document.getElementById("prato5").className  = "menuesc";
        document.getElementById("prato6").className  = "menuesc";
        document.getElementById("prato7").className  = "menuesc";
    }
    else if (i == 3 && cond != 'menuesc-select') {
        document.getElementById("prato1").className  = "menuesc";
        document.getElementById("prato2").className  = "menuesc";
        document.getElementById("prato3").className  = "menuesc-select";
        document.getElementById("prato4").className  = "menuesc";
        document.getElementById("prato5").className  = "menuesc";
        document.getElementById("prato6").className  = "menuesc";
        document.getElementById("prato7").className  = "menuesc";
    }
    else if (i == 4 && cond != 'menuesc-select') {
        document.getElementById("prato1").className  = "menuesc";
        document.getElementById("prato2").className  = "menuesc";
        document.getElementById("prato3").className  = "menuesc";
        document.getElementById("prato4").className  = "menuesc-select";
        document.getElementById("prato5").className  = "menuesc";
        document.getElementById("prato6").className  = "menuesc";
        document.getElementById("prato7").className  = "menuesc";
    }
    else if (i == 5 && cond != 'menuesc-select') {
        document.getElementById("prato1").className  = "menuesc";
        document.getElementById("prato2").className  = "menuesc";
        document.getElementById("prato3").className  = "menuesc";
        document.getElementById("prato4").className  = "menuesc";
        document.getElementById("prato5").className  = "menuesc-select";
        document.getElementById("prato6").className  = "menuesc";
        document.getElementById("prato7").className  = "menuesc";
    }
    else if (i == 6 && cond != 'menuesc-select') {
        document.getElementById("prato1").className  = "menuesc";
        document.getElementById("prato2").className  = "menuesc";
        document.getElementById("prato3").className  = "menuesc";
        document.getElementById("prato4").className  = "menuesc";
        document.getElementById("prato5").className  = "menuesc";
        document.getElementById("prato6").className  = "menuesc-select";
        document.getElementById("prato7").className  = "menuesc";
    }
    else if (i == 7 && cond != 'menuesc-select') {
        document.getElementById("prato1").className  = "menuesc";
        document.getElementById("prato2").className  = "menuesc";
        document.getElementById("prato3").className  = "menuesc";
        document.getElementById("prato4").className  = "menuesc";
        document.getElementById("prato5").className  = "menuesc";
        document.getElementById("prato6").className  = "menuesc";
        document.getElementById("prato7").className  = "menuesc-select";
    }
    else {
        document.getElementById("prato1").className  = "menuesc";
        document.getElementById("prato2").className  = "menuesc";
        document.getElementById("prato3").className  = "menuesc";
        document.getElementById("prato4").className  = "menuesc";
        document.getElementById("prato5").className  = "menuesc";
        document.getElementById("prato6").className  = "menuesc";
        document.getElementById("prato7").className  = "menuesc";
    }

}