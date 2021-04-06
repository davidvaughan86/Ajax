# Ajax


XHR objects



'this' refers to the XMLhttprequest () objestion currently attached to it.


decalare a variable for 'this'

const response = this.response

// // open takes in two arguments, HTTP Method, is the URL or location of what you want to get
        request.open("GET","https://pokeapi.co/api/v2/pokemon/6")
        request.send()


// async await function GetPokemon (){}
const getPokemonDataWithAsyncAwait = async ()=> {
    // this is how you would do it if you use async await
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/6")
    // convert to json
    const formattedJson = await data.json()



const getPokemonDataWithPromises=()=> {
    // fetching, we need to have the URL
    // we fetch(url).then(convertTheRespone to JSON)
    // after we convert to json, .then(data) we can do whatever with our data
    // now that we have the data, we can access it and use it to create
    // elements on the page
    fetch("https://pokeapi.co/api/v2/pokemon/6")
    // this is how you'd do it if you use fetch with promises
    // you would use .then()
    .then(response => response.json())
    .then(data => {