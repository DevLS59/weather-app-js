const api = {
    key: "cb6ac53ae1558b8fb9410dd40452189a",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  
  searchbox.addEventListener('keypress', (evt)=> {
      if(evt.keyCode == 13) {
          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbox.value}&appid=cb6ac53ae1558b8fb9410dd40452189a&units=metric `)
          .then(data => data.json())
          .then(results)
      }
  })

  function results(data) {
      console.log(data)

      // ville
      let city = document.querySelector('.location .city')
    city.innerText= `${data.name}, ${data.sys.country}`

    //date
    let now = new Date();
    const options = {weekday : "long", year:'numeric', month:'long', day : 'numeric'}
    const datenow = now.toLocaleDateString('fr-FR', options)
    let date = document.querySelector('.location .date')
    date.innerText = datenow

    //température 
    let temp = document.querySelector('.current .temp')
    temp.innerHTML = `${Math.round(data.main.temp)} <span>°c</span> `

    let weather_el = document.querySelector('.current .weather')
    weather_el.innerText = data.weather[0].main

    let hilow = document.querySelector('.hi-low')
    hilow.innerText = ` ${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`
  }