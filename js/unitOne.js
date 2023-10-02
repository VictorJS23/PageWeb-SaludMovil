/* Boton de Personal Information */

function personalInformation () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Personal Information'
  nav.className = 'text-success'

  // Code here ------>
}

//////////////////////////////////////////////////////////////////
/* Boton de Greetings */

function greetings () {

  // Don`t touch this code

  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Greetings'
  nav.className = 'text-success'
  //----------------------------------------------

  // Code here ------>>

  const h1G = document.createElement('h1')
  h1G.className = 'text-center text-success'
  h1G.innerHTML = 'Lets Learn <b>"Greetings"</b>'
  mainContent.appendChild(h1G)

  const paragrahf = document.createElement('p')
  const contentParagrafh = document.createTextNode('This an example about how create a paragrafh in javascript')
  
  paragrahf.appendChild(contentParagrafh)
  mainContent.appendChild(paragrahf)

  // if you like make a paragrafh using more elements to html, look at this

  const letter = document.createElement('p')
  letter.innerHTML = ('This is an example using more elements of HMLT: <b><i>(This is a change using InnerHTML)</i></b>')

  mainContent.appendChild(letter)
  
  //Esta propiedad es mayormente usada cuando necesitas manipular demasiado el parrafo
  // Note: It is better not to abuse this property because it can generate
  // bugs or at least increase the probability of them being generated.

}

/////////////////////////////////////////////////////////////////////////
// ESTO NO SE TOCA PORQUE SON LAS CONEXIONES CON EL INDEX !!!
/////////////////////////////////////////////////////////////////////////

const btnPersonalInformation = document.getElementById('btnPersonalInformation')
const btnGreetings = document.getElementById('btnGreetings')

btnPersonalInformation.addEventListener('click', e => {
  e.preventDefault()
  personalInformation()
})

btnGreetings.addEventListener('click', e => {
  e.preventDefault()
  greetings()
})