function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12){
        // console.log('BOM DIA')
        img.src = 'imagem_de_manha1.png'
        document.body.style.background = '#f4e4c0'
    }
    else if (hora < 18){
        // console.log('BOA TARDE')
        img.src = 'imagem_de_tarde1.png'
        document.body.style.background = '#f4f4ed'
    }
    else {
        // console.log('BOA NOITE')
        img.src = 'imagem_de_noite1.png'
        document.body.style.background = '#5d3b5c'
    }
}