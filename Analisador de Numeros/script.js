let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res =  document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function gerarEmojiAleatorio() {
    const emojis = ["😀", "😂", "😍", "🤩", "😎", "🥳", "😜", "😊", "🤔", "💯", "🔥", "👍", "🎉"];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        let emoji = gerarEmojiAleatorio();
        item.text = `Número ${num.value} adicionado, aqui está seu emoji aleatório: ${emoji} .`;
        lista.appendChild(item);
        res.innerHTML = ''
    }else{
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert("Adcione algum valor antes de finalizar!")
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma+=valores[pos]
            if(valores[pos] > maior )
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} emojis cadastrados. <p>`
        res.innerHTML += `<p>Maior emoji informado foi: ${maior} <p>`
        res.innerHTML += `<p>Menor emoji informado foi: ${menor} <p>`
        res.innerHTML += `<p>Somando todos emojis, temos um total de: ${soma} <p>`
        res.innerHTML += `<p>Media dos emojis: ${media} <p>`
    }
}