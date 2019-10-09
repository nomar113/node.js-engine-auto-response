const axios = require('axios')


let getContentTest = function () {
    return axios.get('https://www.passeidireto.com/arquivo/48181923/av2-metodologia-cientifica/2').then(content => { return content })
}

let content = getContentTest()
console.log(content) // Promise { <pending> }

content.then(function (result) {
    // TODO: encontrar 'marcar questão' e exibir enunciado
    regExpMarcarQuestao = RegExp(`Marcar
    questão`, 'g')
    regExpRespostaCorretaEh = RegExp('A resposta correta é:', 'g')

    let arrayResult

    while ((arrayResult = regExpRespostaCorretaEh.exec(result.data)) !== null) {
        let response
        console.log(`Found: ${arrayResult[0]}`)
        for (let i = regExpRespostaCorretaEh.lastIndex; i < regExpRespostaCorretaEh.lastIndex + 100; i++) {
            if (result.data[i] !== '.') {
                response += result.data[i]
            } else {
                break
            }
        }
        console.log(response)
    }

    // console.log(result.data) // "Some content" 
})