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



//Instruction MOVE//
    ////First ROW/////
function mov_ax_bx() {
    var AX = document.getElementById("AX").value;
    document.getElementById("BX").value = AX;
    }
function mov_bx_ax() {
    var BX = document.getElementById("BX").value;
    document.getElementById("AX").value=BX;
    }
    function mov_cx_ax() {
        var CX = document.getElementById("CX").value;
        document.getElementById("AX").value = CX;
        }
        function mov_dx_ax() {
            var DX = document.getElementById("DX").value;
            document.getElementById("AX").value = DX;
            }
            ////Second ROW/////
            function mov_ax_cx() {
                var AX = document.getElementById("AX").value;
                document.getElementById("CX").value = AX;
                }
                function mov_bx_cx() {
                    var BX = document.getElementById("BX").value;
                    document.getElementById("CX").value = BX;
                    }
                    function mov_cx_bx() {
                        var CX = document.getElementById("CX").value;
                        document.getElementById("BX").value = CX;
                        }
                        function mov_dx_bx() {
                            var DX = document.getElementById("DX").value;
                            document.getElementById("BX").value = DX;
                            }
                             ////Third ROW/////
                            function mov_ax_dx() {
                                var AX = document.getElementById("AX").value;
                                document.getElementById("DX").value = AX;
                                }
                                function mov_bx_dx() {
                                    var BX = document.getElementById("BX").value;
                                    document.getElementById("DX").value = BX;
                                    }
                                    function mov_cx_dx() {
                                        var CX = document.getElementById("CX").value;
                                        document.getElementById("DX").value = CX;
                                        }
                                        function mov_dx_cx() {
                                            var DX = document.getElementById("DX").value;
                                            document.getElementById("CX").value = DX;
                                            }