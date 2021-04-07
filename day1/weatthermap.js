const zip = document.querySelector('.zipInput').value
const zipSubmit = document.querySelector('.zipSubmit')
const weather = document.querySelector('.weather')
const weatherCity = document.createElement('p')
weather.append(weatherCity)


const getCurrentWeather = async ()=> {
   if (zip.value.length !== 5) {
       alert('try again')
       zip.value =''
   } else {
       try {
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?&zip=${zip.value}&units=imperial&appid=524c2fed1267862738c0ace1dc9850e8`)
        
        const formattedJson = await data.json()
        console.log(formattedJson)

        weather.innerHTML = `<div class="card">
            <img src="world.png" alt="Avatar" style="width:50%">
        <div class="container">
            <h1><b>${formattedJson.name}</b></h1>
            <h2><b>${formattedJson.main.temp} Farenheight</b></h2>
            <h4><b>${formattedJson.weather[0].description}</b></h4>
            <p>Architect & Engineer</p>
        </div>
        </div>`

       }
       catch (err) {
           err = 'you didnt type a zip'
           alert(err)
           location.reload()

       }
   }


    
}


zipSubmit.addEventListener('click', getCurrentWeather)





    

    


