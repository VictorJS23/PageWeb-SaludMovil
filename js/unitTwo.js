function Possesions () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Possesions'
  nav.className = 'text-success'

  // function example_titles(){
  //   const examplesTitle = document.createElement('p')
  //   const examplesTitle_text = document.createTextNode('Examples:')
  //   examplesTitle.appendChild(examplesTitle_text)
  //   examplesTitle.className = tituloEjemplos
  //   mainContent.appendChild(examplesTitle)
  //   return(examplesTitle_text)
  // }

  // Espacios

  function espacio(){
    const espacios = document.createElement('br')
    mainContent.appendChild(espacios)
    return(espacios)
  }

  // code here --------->  
}

// Classroom Objects

function ClassroomsObjects () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Classrooms Object'
  nav.className = 'text-success'

  // code here -------->
}

function PersonalItems () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Personal Items'
  nav.className = 'text-success'

  // code here -------->
}

const btnPossesions = document.getElementById('btnPossesions')
const btnClassroomsObjects = document.getElementById('btnClassroomsObjects')
const btnPersonalItems = document.getElementById('btnPersonalItems')

btnPossesions.addEventListener('click', e => {
  e.preventDefault()
  Possesions()
})

btnClassroomsObjects.addEventListener('click', e => {
  e.preventDefault()
  ClassroomsObjects()
})

btnPersonalItems.addEventListener('click', e => {
  e.preventDefault()
  PersonalItems()
})
