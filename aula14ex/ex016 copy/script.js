function contagem(){
    var i = window.document.querySelector('input#v1')

    var f = window.document.querySelector('input#v2')

    var pas = window.document.getElementsByName('pas')[0]

    var con = window.document.querySelector('div#con')

    con.innerHTML = ``

    if (i.value === '' || f.value === '' || pas.value === ''){
        con.innerHTML = `Impossível contar...`
        return
    }

    var i = Number(i.value)

    var f = Number(f.value)

    var pas = Number(pas.value)

    if (pas <= 0){
        alert('Passo inválido! Considerando passo igual a 1')
        pas = 1
    }

    if (i <= f){
        for(var x = i; x <= f; x += pas){
            con.innerHTML += `${x} &#128073;`
        }
        con.innerHTML += `🏁`
    }

    else {
        for(var x = i; x >= f; x -= pas){
            con.innerHTML += `${x} &#128073;`
        }
        con.innerHTML += `🏁`
    }

}