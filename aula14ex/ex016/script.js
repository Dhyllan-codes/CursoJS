function contar()   {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar`
        // window.alert('[ERRO] Tente novamente.')
    }
    else{
        res.innerHTML = 'Contando: '
        
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo inválido! Considerando passo igual a 1')
            p = 1
        }

        // contagem crescente
        if (i < f)  {
            for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} &#128073;`
            }
        }

        // contagem regrassivo
        else if (i > f){
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} &#128073;`
            }
        }

        res.innerHTML += ` 🏁 `
    }
}