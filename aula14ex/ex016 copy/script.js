function contagem(){
    var i = window.document.querySelector('input#v1')
    var i = Number(i.value)

    var f = window.document.querySelector('input#v2')
    var f = Number(f.value)

    var pas = window.document.getElementsByName('pas')[0]
    var pas = Number(pas.value)

    var con = window.document.querySelector('div#con')

    con.innerHTML = ``

    for(var x = i; x <= f; x += pas){
        con.innerHTML += `${x} &#128073;`
    }

    con.innerHTML += `🏁`
}