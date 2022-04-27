function verMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("texto-oculto");
    var btnmostrar = document.getElementById("btnmostrar");
    var btnmostrar = document.querySelector(".discussoes").style.top = "1150px";
    var btnmostrar = document.querySelector(".img-footer").style.top = "2100px";
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


function toggleDiv() {
  

    if(document.getElementById("div1").style.display == 'none') {
      document.getElementById("div1").style.display = 'block';
      document.getElementById("div2").style.display = 'none';
      document.querySelector(".perg-marg").style.top = "35px 0 0 15px";
      document.querySelector(".img-footer").style.top = "1750px";

      
      
      
    } else {
      document.getElementById("div1").style.display = 'none';
      document.getElementById("div2").style.display = 'block';
      document.querySelector(".perg-marg").style.margin = "75px 0 0 15px";
      document.querySelector(".img-footer").style.top = "1750px";
    }
  }  
    
  function toggleDiv1() {
  

    if(document.getElementById("div2").style.display == 'none') {
      document.getElementById("div2").style.display = 'block';
      document.getElementById("div3").style.display = 'none';
      document.querySelector(".perg-marg").style.top = "35px 0 0 15px";
      document.querySelector(".img-footer").style.top = "1750px";

      
      
      
    } else {
      document.getElementById("div2").style.display = 'none';
      document.getElementById("div3").style.display = 'block';
      document.querySelector(".perg-marg").style.margin = "75px 0 0 15px";
      document.querySelector(".img-footer").style.top = "1750px";
    }
  }