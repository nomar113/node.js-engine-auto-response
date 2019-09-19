const axios = require('axios')


let getContentTest = function () {
    return axios.get('https://www.passeidireto.com/arquivo/48181923/av2-metodologia-cientifica/2').then(content => { return content })
}

let content = getContentTest()
console.log(content) // Promise { <pending> }

content.then(function (result) {
    regExp = RegExp('A resposta correta é:', 'g')

    let arrayResult

    while ((arrayResult = regExp.exec(result.data)) !== null) {
        console.log(`Found: ${arrayResult[0]}. Next starts at ${regExp.lastIndex}.`)
    }

    // console.log(result.data) // "Some content"
})