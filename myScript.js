//Validation 
window.addEventListener("DOMContentLoaded",()=>{
    //AX//
    const AX = document.getElementById("AX");
    const inputPattern = /^[A-Fa-f0-9]*$/;
    AX.addEventListener('input',()=>{
            let validateInput = inputPattern.test(AX.value);
        if(validateInput == false || AX.value.length == 5)
                {
                    AX.value = AX.value.substr(0,AX.value.length-1);
                }
    
    })
     //BX//
     const BX = document.getElementById("BX");
     
     BX.addEventListener('input',()=>{
              let validateInput = inputPattern.test(BX.value);
         if(validateInput == false || BX.value.length == 5)
                 {
                     BX.value = BX.value.substr(0,BX.value.length-1);
                 }
     
     })
      //CX//
      const CX = document.getElementById("CX");
    
    CX.addEventListener('input',()=>{
            let validateInput = inputPattern.test(CX.value);
        if(validateInput == false || CX.value.length == 5)
                {
                    CX.value = CX.value.substr(0,CX.value.length-1);
                }
    
    })

      //DX//
      const DX = document.getElementById("DX");
        DX.addEventListener('input',()=>{
    
        let validateInput = inputPattern.test(DX.value);
        if(validateInput == false || DX.value.length == 5)
                {
                    DX.value = DX.value.substr(0,DX.value.length-1);
                }
    
    })

})












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