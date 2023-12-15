
function comprar() {
    
    let tipoIngresso = document.getElementById("tipo-ingresso");
    let qtdIngresso = parseInt(document.getElementById("qtd").value);

    if(tipoIngresso.value == 'inferior') {
        comprarInferior(qtdIngresso);
    }
    
    if(tipoIngresso.value == 'superior') {
        comprarSuperior(qtdIngresso);
    }
    
    if(tipoIngresso.value == 'pista') {
        comprarPista(qtdIngresso);
    }

    let pistaQtd = parseInt(document.getElementById("qtd-pista").textContent);
    let superiorQtd = parseInt(document.getElementById("qtd-superior").textContent);
    
    
    function comprarInferior(){
        let inferiorQtd = parseInt(document.getElementById("qtd-inferior").textContent);
         if(qtdIngresso > inferiorQtd) {

          alert("Quantidade indisponivel para a Cadeira inferior");

        }else{
            inferiorQtd = inferiorQtd - qtdIngresso;
            document.getElementById("qtd-inferior").textContent = inferiorQtd;
        };  
    };

    function comprarSuperior(){
        let superiorQtd = parseInt(document.getElementById("qtd-superior").textContent);
         
        if(qtdIngresso > superiorQtd) {
          alert("Quantidade indisponivel para a Cadeira inferior");
        }else{
            superiorQtd = superiorQtd - qtdIngresso;
            document.getElementById("qtd-superior").textContent = superiorQtd;
        };  
    };
    
    function comprarPista(){
        let pistaQtd = parseInt(document.getElementById("qtd-pista").textContent);
         
        if(qtdIngresso > pistaQtd) {

          alert("Quantidade indisponivel para a Cadeira pista");

        }else{
            pistaQtd = pistaQtd - qtdIngresso;
            document.getElementById("qtd-pista").textContent = pistaQtd;
        };  
    };
   
};

