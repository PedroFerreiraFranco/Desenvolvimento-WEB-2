function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fesc = document.getElementsByName('radp')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade da escola: ${idade}`
        var escola = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fesc[0].checked){
            tipo = 'Pública'
            if(idade >=0 && idade <30){
                //Mais nova
                var tipoIdade = 'nova'
                img.setAttribute('src', 'Img/gabrielOdorico.jpg')
            }else if(idade >=30 && idade <50){
                //Mediana
                var tipoIdade = 'mediana'
                img.setAttribute('src', 'Img/escolaDomPedro.jpg')
            }else{
                //Mais antiga
                var tipoIdade = 'antiga'
                img.setAttribute('src', 'Img/iracemaRodrigues.JPG')
            }
        }else if(fesc[1].checked){
            tipo = 'Particular'
            if(idade >=0 && idade <30){
                //Mais nova
                var tipoIdade = 'nova'
                img.setAttribute('src', 'Img/sesi.jpg')
            }else if(idade >=30 && idade <50){
                //Mediana
                var tipoIdade = 'mediana'
                img.setAttribute('src', 'Img/fumesc.jpg')
            }else{
                //Mais antiga
                var tipoIdade = 'antiga'
                img.setAttribute('src', 'Img/cic.JPG')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Escola ${tipo} possui ${idade} anos, e está qualificada como ${tipoIdade}.`
        res.appendChild(img)
        }
}

