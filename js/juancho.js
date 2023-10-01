function Clothing () {
  //Code Here
}
function Colors () {
  //Code Here
}
function WeatherAndSeasons () {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
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
