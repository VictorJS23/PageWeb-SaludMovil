function Clothing () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Clothings'
  nav.className = 'text-success'

  // code here --------->
}

function Colors () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Colors'
  nav.className = 'text-success'

  // code here --------->
}

function WeatherAndSeasons () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'WeatherAndSeasons'
  nav.className = 'text-success'

  // code here --------->
}

const btnClothing = document.getElementById('btnClothing')
const btnColors = document.getElementById('btnColors')
const btnWeatherAndSeasons = document.getElementById('btnWeatherAndSeasons')

btnClothing.addEventListener('click', e => {
  e.preventDefault()
  Clothing()
})
btnColors.addEventListener('click', e => {
  e.preventDefault()
  Colors()
})
btnWeatherAndSeasons.addEventListener('click', e => {
  e.preventDefault()
  WeatherAndSeasons()
})
