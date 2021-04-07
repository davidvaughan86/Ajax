$(document).ready(() => {
    console.log('we are in jquery')
})

const divcontainer = document.createElement('div')
const jdivcontainer = $('<div></div>')


console.log(divcontainer)
console.log(jdivcontainer)

const $header3 = $('h3', {
    text: 'david this is an object with jquery',
})

console.log($header3)


jdivcontainer.append($header3)

console.log(jdivcontainer)
$(document.body).append(jdivcontainer)


$.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/ditto',
    header:{
        Accept: 'application/json'

    }
}).then((res) => {
    console.log(res)
})
.catch((valueReturned) => {
    console.error(valueReturned)
})