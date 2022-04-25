function verMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("texto-oculto");
    var btnmostrar = document.getElementById("btnmostrar");

    if(pontos.style.display === "none"){
        pontos.style.display= "inline";
        maisTexto.style.display ="none";
        btnmostrar.innerHTML = "ver Mais";


    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnmostrar.innerHTML = "ver menos";
    }
}