//Console Panel
function Reset() {
    document.getElementById("console").reset();

}

function Reset_AX() {
    document.getElementById("AX").value = "";
}

function Reset_BX() {
    document.getElementById("BX").value = "";
}


function Reset_CX() {
    document.getElementById("CX").value = "";
}


function Reset_DX() {
    document.getElementById("DX").value = "";
}


var AX = document.getElementById("AX").value;
var BX = document.getElementById("BX").value;

//Instruction MOVE
function mov_ax_bx() {
    var AX = document.getElementById("AX").value;
    document.getElementById("BX").value = AX;
    document.getElementById("AX").value = "";
    //TO DO:
    //Dokończyć inskrukcje MOV
}