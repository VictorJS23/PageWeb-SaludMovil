/* Boton de Personal Information */

function personalInformation () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Personal Information'
  nav.className = 'text-success'

  // Code here ------>>

  //Creando titulo
  const h1PI = document.createElement('h1')
  h1PI.className = 'text-center text-success'
  h1PI.innerHTML = 'Lets learn <b>Personal Information</b>'

  mainContent.appendChild(h1PI)

  //Creando informacion
  const infoPI = document.createElement('p')
  infoPI.className = 'lead fs-4 lh-sm'
  const infoPItext = document.createTextNode('In this space, we will provide you with the necessary tools and resources to improve your skills in the field of personal information in English. We will focus on giving you the necessary foundations to express and understand key aspects of your identity, such as your name, age, nationality, occupation, address, and more. Our goal is for you to feel confident when communicating in different contexts and situations, using precise and appropriate language. Explore the available resources in this section and dive into practical and effective learning. Whether you are starting from scratch or looking to perfect your existing skills, let’s begin this exciting learning journey together!')

  infoPI.appendChild(infoPItext)
  mainContent.appendChild(infoPI)

}

//////////////////////////////////////////////////////////////////
/* Boton de Greetings */

function greetings () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Greetings'
  nav.className = 'text-success'

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