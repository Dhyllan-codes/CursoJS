var idade = 77

if (idade < 16) {
    console.log('não pode votar.')
}

// else {
//     if (idade < 18) {
//     console.log('voto opcional.')
//     }
//     else {
//         if(18 <= idade < 65) {
//     console.log('voto obrigatório. ')
//         }
//         else {
//     console.log('voto opcional.')
//         }
//     }
// }
else if(idade < 18) {
    console.log('voto opcional')
}

else if(idade >= 18 && idade < 65) {
    console.log('voto obrigatório. ')
}

else {
    console.log('voto opcional.')
}