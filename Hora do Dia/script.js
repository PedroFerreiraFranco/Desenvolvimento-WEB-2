function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <= 12 ){
    //jogador 1
    img.src = "img/imagem1.png"
    document.body.style.backgroundColor = "blue";

    }else if(hora > 12 && hora <= 18 ){
    //jogador 2
    img.src = "img/imagem2.png"
    document.body.style.backgroundColor = "red";

    }else{
    //jogador 3
    img.src = "img/imagem3.png"
    document.body.style.backgroundColor = "black";
    }
}
