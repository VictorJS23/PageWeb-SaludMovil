function Possesions () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Possesions'
  nav.className = 'text-success'

  // Variables globales
  
  const parrafos = 'fw-bold fs-4'
  const parrafosAlt = 'fw-bold fs-3'
  const tituloEjemplos = 'fw-bold fs-5'
  const ejemplos = 'fst-italic fs-5'

  // Empaquetamos los titulos de los ejemplos

  function example_titles(){
    const examplesTitle = document.createElement('p')
    const examplesTitle_text = document.createTextNode('Examples:')
    examplesTitle.appendChild(examplesTitle_text)
    examplesTitle.className = tituloEjemplos
    mainContent.appendChild(examplesTitle)
    return(examplesTitle_text)
  }

  // Espacios

  function espacio(){
    const espacios = document.createElement('br')
    mainContent.appendChild(espacios)
    return(espacios)
  }

  // Saxon Genitive Titulo

  const saxonGenitive_title = document.createElement('h1')
  const saxonGenitive_title_text = document.createTextNode('The Saxon Genitive')
  saxonGenitive_title.appendChild(saxonGenitive_title_text)
  saxonGenitive_title.className = 'fw-bold text-center text-primary'
  mainContent.appendChild(saxonGenitive_title)

  espacio()

  // Saxon Genitive Concepto

  const saxonGenitive = document.createElement('p')
  const saxonGenitive_text = document.createTextNode('The Saxon Genitive is used with the nouns for people, animals, countries, expressions of time, as well as the collective names for people and animals. It establishes a relationship of ownership or possession between two terms.')
  saxonGenitive.appendChild(saxonGenitive_text)
  saxonGenitive.className = parrafos
  mainContent.appendChild(saxonGenitive)

example_titles()

  const examples = [
    `Robin’s car is green.`,
    `Julia’s dog is a beautiful westie.`,
    `My mum’s coat is brown.`
  ]

  for (let i = 0; i < examples.length; i++){
    const example = document.createElement('p') 
    const example_text = document.createTextNode(examples[i])
    example.appendChild(example_text)
    example.className = ejemplos
    mainContent.appendChild(example)
  }

  espacio()

  // End With S

  const endWithS = document.createElement('p')
  const endWithS_text = document.createTextNode('If the name of the owner is plural, only the apostrophe is added. The same happens in the case of words that end with “s“.')
  endWithS.appendChild(endWithS_text)
  endWithS.className = parrafos
  mainContent.appendChild(endWithS)

  example_titles()

  const endWithS_examples = [
    `The sailors’ boat.`,
    `My friends’ new home.`,
    `Texas’ weather is unpredictable in the winter.`
  ]

  for (let i = 0; i < endWithS_examples.length; i++){
    const endWithS_example = document.createElement('p')
    const endWithS_example_text = document.createTextNode(endWithS_examples[i])
    endWithS_example.appendChild(endWithS_example_text)
    endWithS_example.className = ejemplos
    mainContent.appendChild(endWithS_example)
  }

  espacio()

  // Proper Names

  const properNames = document.createElement('p')
  const properNames_text = document.createTextNode('In the case of proper names both constructions can be used.')
  properNames.appendChild(properNames_text)
  properNames.className = parrafos
  mainContent.appendChild(properNames)

  example_titles()

  const properNames_examples = [
    `Mr. Jones’ cat is very old.`,
    `Mr. Jones’s cat is very old.`
  ]

  for (let i = 0; i < properNames_examples.length; i++){
    const properNames_example = document.createElement('p')
    const properNames_example_text = document.createTextNode(properNames_examples[i])
    properNames_example.appendChild(properNames_example_text)
    properNames_example.className = ejemplos
    mainContent.appendChild(properNames_example)
  }

  espacio()

  // Compound Names

  const compoundNames = document.createElement('p')
  const compoundNames_text = document.createTextNode('In compound names, the apostrophe and the “s” are added at the end of the last word.')
  compoundNames.appendChild(compoundNames_text)
  compoundNames.className = parrafos
  mainContent.appendChild(compoundNames)

  example_titles()

  const compoundNames_examples = [
    `My brother-in-law’s cousin.`,
    `My mother-in-law’s house is on the hill.`
  ]

  for (let i = 0; i < compoundNames_examples.length; i++){
    const compoundNames_example = document.createElement('p')
    const compoundNames_example_text = document.createTextNode(compoundNames_examples[i])
    compoundNames_example.appendChild(compoundNames_example_text)
    compoundNames_example.className = ejemplos
    mainContent.appendChild(compoundNames_example)
  }

  espacio()

  // Several Owners

  const severalOwners = document.createElement('p')
  const severalOwners_text = document.createTextNode('When there are several owners, the Saxon genitive rule is applied to the last name of the set.')
  severalOwners.appendChild(severalOwners_text)
  severalOwners.className = parrafos
  mainContent.appendChild(severalOwners)

  example_titles()

  const severalOwners_examples = [
    `Mario and Susan’s children attend primary school.`,
    `This is John and Jean’s car.`
  ]

  for (let i = 0; i < severalOwners_examples.length; i++){
    const severalOwners_example = document.createElement('p')
    const severalOwners_example_text = document.createTextNode(severalOwners_examples[i])
    severalOwners_example.appendChild(severalOwners_example_text)
    severalOwners_example.className = ejemplos
    mainContent.appendChild(severalOwners_example)
  }

  espacio()

  // Collective Names

  const collectiveNames = document.createElement('p')
  const collectiveNames_text = document.createTextNode('With collective names, the Saxon genitive is formed with an apostrophe and “s“.')
  collectiveNames.appendChild(collectiveNames_text)
  collectiveNames.className = parrafos
  mainContent.appendChild(collectiveNames)

  example_titles()

  const collectiveNames_examples = [
    `People’s rights.`,
    `Women’s hair.`
  ]

  for (let i = 0; i < collectiveNames_examples.length; i++){
    const collectiveNames_example = document.createElement('p')
    const collectiveNames_example_text = document.createTextNode(collectiveNames_examples[i])
    collectiveNames_example.appendChild(collectiveNames_example_text)
    collectiveNames_example.className = ejemplos
    mainContent.appendChild(collectiveNames_example)
  }

  espacio()

  // Practice

  const practice_title = document.createElement('p')
  const practice_title_text = document.createTextNode('Practice!')
  practice_title.appendChild(practice_title_text)
  practice_title.className = parrafosAlt
  mainContent.appendChild(practice_title)

  // Formulario

  // Primer contenedor
  const firstQuestion = document.createElement('div')
  firstQuestion.className = 'primerDiv'
  const firstLabel = document.createElement('label')
  const firstLabel_text = document.createTextNode('-The dog of Julia is a beautiful westie.') // Julia’s dog is a beautiful westie.
  firstLabel.appendChild(firstLabel_text)
  firstLabel.for = 'primeraPregunta'
  const firstInput = document.createElement('input')
  firstInput.className = 'm-2'
  firstInput.type = 'text'
  firstInput.id = 'primeraPregunta'
  firstInput.name = 'primeraPregunta'
  firstQuestion.appendChild(firstLabel)
  firstQuestion.appendChild(firstInput)
  firstInput.style.display = "block"
  firstInput.style.margin = "auto"
  mainContent.appendChild(firstQuestion)

  const secondQuestion = document.createElement('div')
  secondQuestion.className = 'segundoDiv'
  const secondLabel = document.createElement('label')
  const secondLabel_text = document.createTextNode('-The boat of Sailor.') // The sailors’ boat
  secondLabel.appendChild(secondLabel_text)
  secondLabel.for = 'segundaPregunta'
  const secondInput = document.createElement('input')
  secondInput.className = 'm-2'
  secondInput.type = 'text'
  secondInput.id = 'segundaPregunta'
  secondInput.name = 'segundaPregunta'
  secondQuestion.appendChild(secondLabel)
  secondQuestion.appendChild(secondInput)
  secondInput.style.display = "block"
  secondInput.style.display = "block"
  mainContent.appendChild(secondQuestion)

  const thirdQuestion = document.createElement('div')
  thirdQuestion.className = 'tercerDiv'
  const thirdLabel = document.createElement('label')
  const thirdLabel_text = document.createTextNode('-The cousin of my brother-in-Law.') // My brother-in-law’s cousin.
  thirdLabel.appendChild(thirdLabel_text)
  thirdLabel.for = 'tercerPregunta'
  const thirdInput = document.createElement('input')
  thirdInput.className = 'm-2'
  thirdInput.type = 'text'
  thirdInput.id = 'tercerPregunta'
  thirdInput.name = 'tercerPregunta'
  thirdQuestion.appendChild(thirdLabel)
  thirdQuestion.appendChild(thirdInput)
  thirdInput.style.display = "block"
  thirdInput.style.margin = "auto"
  mainContent.appendChild(thirdQuestion)

  const fourthQuestion = document.createElement('div')
  fourthQuestion.className = 'cuartoDiv'
  const fourthLabel = document.createElement('label')
  const fourthLabel_text = document.createTextNode('-The children of Mario and Susan attend primary.') // Mario and Susan’s children attend primary school.
  fourthLabel.appendChild(fourthLabel_text)
  fourthLabel.for = 'cuartaPregunta'
  const fourthInput = document.createElement('input')
  fourthInput.className = 'm-2'
  fourthInput.type = 'text'
  fourthInput.id = 'cuartaPregunta'
  fourthInput.name = 'cuartaPregunta'
  fourthQuestion.appendChild(fourthLabel)
  fourthQuestion.appendChild(fourthInput)
  fourthInput.style.display = "block"
  fourthInput.style.margin = "auto"
  mainContent.appendChild(fourthQuestion)

  const fifthQuestion = document.createElement('div')
  fifthQuestion.className = 'quintoDiv'
  const fifthLabel = document.createElement('label')
  const fifthLabel_text = document.createTextNode('-Rights of the people.') // People’s rights.
  fifthLabel.appendChild(fifthLabel_text)
  fifthLabel.for = 'quintaPregunta'
  const fifthInput = document.createElement('input')
  fifthInput.className = 'm-2'
  fifthInput.type = 'text'
  fifthInput.id = 'quintaPregunta'
  fifthInput.name = 'quintaPregunta'
  fifthQuestion.appendChild(fifthLabel)
  fifthQuestion.appendChild(fifthInput)
  fifthInput.style.display = "block"
  fifthInput.style.margin = "auto"
  mainContent.appendChild(fifthQuestion)
}

// Classroom Objects

function ClassroomsObjects () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Classrooms Object'
  nav.className = 'text-success'

  // Variables globales
  const parrafos = 'fw-bold fs-4'
  const parrafosAlt = 'fw-bold fs-3'
  const titulos = 'fw-bold fs-5'
  const ejemplos = 'fst-italic fs-5'

  const classroom = document.createElement('p')
  const classroom_text = document.createTextNode('Los "classroom objects" son objetos que se encuentran en un salón de clases o aula, y que se utilizan para el aprendizaje y la enseñanza. Estos objetos son herramientas y recursos que facilitan el proceso educativo y ayudan a los estudiantes y profesores a llevar a cabo actividades y lecciones. Algunos ejemplos de "classroom objects" son:')
  classroom.appendChild(classroom_text)
  classroom.className = parrafos
  mainContent.appendChild(classroom)

    // Espacios

    function espacio(){
      const espacios = document.createElement('br')
      mainContent.appendChild(espacios)
      return(espacios)
    }

    // Contenedor de cada imagen y su descripcion
    const primerObjeto = document.createElement('div')
    const calculator_img = document.createElement('img')
    calculator_img.src = './../assets/img/classroomObjects/calculator.jpg'
    calculator_img.alt = 'Calculator'
    calculator_img.width = '200'
    calculator_img.className = 'd-inline'
    const calculator = document.createElement('p') 
    const calculator_text = document.createTextNode('Calculator:')
    calculator.appendChild(calculator_text)
    calculator.className = titulos
    primerObjeto.appendChild(calculator)
    primerObjeto.appendChild(calculator_img)
    mainContent.appendChild(primerObjeto)
  
    espacio()
  
    const segundoObjeto = document.createElement('div')
    const scissor_img = document.createElement('img')
    scissor_img.src = './../assets/img/classroomObjects/scissors.jpg'
    scissor_img.alt = 'Scissors'
    scissor_img.width = '200'
    scissor_img.className = 'd-inline'
    const scissor = document.createElement('p') 
    const scissor_text = document.createTextNode('Scissors:')
    scissor.appendChild(scissor_text)
    scissor.className = titulos
    segundoObjeto.appendChild(scissor)
    segundoObjeto.appendChild(scissor_img)
    mainContent.appendChild(segundoObjeto)
  
    espacio()
  
    const tercerObjeto = document.createElement('div')
    const eraser_img = document.createElement('img')
    eraser_img.src = './../assets/img/classroomObjects/eraser.png'
    eraser_img.alt = 'Scissors'
    eraser_img.width = '200'
    const eraser = document.createElement('p') 
    const eraser_text = document.createTextNode('Eraser:')
    eraser.appendChild(eraser_text)
    eraser.className = titulos
    tercerObjeto.appendChild(eraser)
    tercerObjeto.appendChild(eraser_img)
    mainContent.appendChild(tercerObjeto)
  
    espacio()
  
    const cuartoObjeto = document.createElement('div')
    const pencils_img = document.createElement('img')
    pencils_img.src = './../assets/img/classroomObjects/pencils.jpg'
    pencils_img.alt = 'Pencils'
    pencils_img.width = '200'
    const pencil = document.createElement('p') 
    const pencil_text = document.createTextNode('Pencils:')
    pencil.appendChild(pencil_text)
    pencil.className = titulos
    cuartoObjeto.appendChild(pencil)
    cuartoObjeto.appendChild(pencils_img)
    mainContent.appendChild(cuartoObjeto)
  
    espacio()
  
    const quintoObjeto = document.createElement('div')
    const glue_img = document.createElement('img')
    glue_img.src = './../assets/img/classroomObjects/glue.png'
    glue_img.alt = 'Glue'
    glue_img.width = '200'
    const glue = document.createElement('p') 
    const glue_text = document.createTextNode('Glue:')
    glue.appendChild(glue_text)
    glue.className = titulos
    quintoObjeto.appendChild(glue)
    quintoObjeto.appendChild(glue_img)
    mainContent.appendChild(quintoObjeto)
}

function PersonalItems () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Personal Items'
  nav.className = 'text-success'

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
