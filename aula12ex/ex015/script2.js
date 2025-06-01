function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano_nasc')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value.length > ano){
        window.alert(`[ERRO] Tente novamente.`)
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var genero = ''

        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe_m.png')                
            }
            else if (idade < 19){
                img.setAttribute('src', 'jovem_m.jpeg')
            }
            else if (idade < 65){
                img.setAttribute('src', 'adulto_m.png')
            }
            else{
                img.setAttribute('src', 'idoso_m.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe_f.png')
            }
            else if (idade < 19){
                img.setAttribute('src', 'jovem_f.jpeg')
            }
            else if (idade < 65){
               img.setAttribute('src', 'adulto_f.png') 
            }
            else{
                img.setAttribute('src', 'idoso_f.png')
            }
        }
        

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}