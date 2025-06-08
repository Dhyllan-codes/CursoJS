function clique(){
    var v1 = window.document.querySelector('input#v1')

    var res = window.document.querySelector('div#div2')

    if (v1.value === ''){
        alert('Por favor, digite um número!')
        return
    }

    v1 = Number(v1.value)


    var c = 1

    var list = '<ul>'
    for (i = 1; i <= 10 ; i++){
        list += `<li>${v1} x ${i} = ${v1 * i}</li>`
    }
    list += '</ul>'

    res.innerHTML = list
}