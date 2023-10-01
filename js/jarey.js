function createMainContent () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1 = document.createElement('h1')
  const h1_text = document.createTextNode('What do we do?')

  h1.appendChild(h1_text)
  h1.className = 'text-center text-primary'
  mainContent.appendChild(h1)

  const div = document.createElement('div')

  const bienvenida = document.createElement('p')
  const bienvenida_text = document.createTextNode(
    "Welcome to EngageU! We are pleased that you have decided to join our platform to learn English in an effective and enjoyable way. At EngageU, we believe that learning should be interactive and entertaining. For this reason, we have designed a wide variety of courses, exercises and games so that you can learn English at your own pace and in a fun way. With EngageU, you will have access to high-quality resources that will help you improve your English language skills. Our highly trained instructors will be there to guide and support you at all times. You will also be able to interact with other students from all over the world and practice your English conversation skills. Whether you are learning English for personal or professional reasons, we are sure that EngageU is the perfect place for you. So let's start this exciting learning journey together!."
  )

  bienvenida.classList.add('fs-4')
  bienvenida.classList.add('text-justify')
  bienvenida.classList.add('lh-lg')
  bienvenida.appendChild(bienvenida_text)
  div.appendChild(bienvenida)
  mainContent.appendChild(bienvenida)

  const imagen = document.createElement("img");
  imagen.src = "./assets/img/Questions and conversations/1.png";
  imagen.alt = "unable to load the image";
  imagen.style.border = "3px solid black";
  imagen.height = 400
  imagen.width = 600
  imagen.style.display = 'block'
  imagen.style.margin = 'auto'
  imagen.style.marginBottom = "20px"
  mainContent.appendChild(imagen);

  const imagen2 = document.createElement("img");
  imagen2.src = "./assets/img/Questions and conversations/2.png";
  imagen2.alt = "unable to load the image";
  imagen2.style.border = "3px solid black";
  imagen2.height = 400
  imagen2.width = 600
  imagen2.style.display = 'block'
  imagen2.style.margin = 'auto'
  imagen2.style.marginbottom = "20px";
  mainContent.appendChild(imagen2);
  



}


const btnHome = document.getElementById('btnHome')

btnHome.addEventListener('click', e => {
  e.preventDefault()
  createMainContent()
})

createMainContent()

//////////////////////////////////////////////////////////////

let AnimalFound = []
let AnimalsNames = []
let draggableElements = ''
let droppapleElements = ''

function renderDragAndDropGame () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const gameContainer = document.createElement('div')
  gameContainer.classList.add('game-container')
  const h1 = document.createElement('h1')
  const textH1 = document.createTextNode("Let's Play")
  const h5 = document.createElement('h5')
  const textH5 = document.createTextNode('Drag and Drop the Objects')

  h1.appendChild(textH1)
  h1.classList.add('text-center')
  h5.appendChild(textH5)
  h5.classList.add('text-center')

  const draggable_elements = document.createElement('div')
  draggable_elements.classList.add('draggable-elements')

  const droppable_elements = document.createElement('div')
  droppable_elements.classList.add('droppaple-elements')

  const wrongAnswer = document.createElement('div')
  const textWrong = document.createTextNode('')
  wrongAnswer.classList.add('text-danger')
  wrongAnswer.classList.add('fs-1')
  wrongAnswer.classList.add('text-center')

  wrongAnswer.classList.add('wrong')
  wrongAnswer.appendChild(textWrong)
  const correctAnswer = document.createElement('div')
  const textCorrect = document.createTextNode('')
  correctAnswer.classList.add('text-success')
  correctAnswer.classList.add('fs-1')
  correctAnswer.classList.add('text-center')

  correctAnswer.classList.add('correct')
  correctAnswer.appendChild(textCorrect)
  
  gameContainer.appendChild(h1)
  gameContainer.appendChild(h5)
  gameContainer.appendChild(draggable_elements)
  gameContainer.appendChild(droppable_elements)
  gameContainer.appendChild(wrongAnswer)
  gameContainer.appendChild(correctAnswer)
  mainContent.appendChild(gameContainer)
}
const CARDS = 6
const getRandomId = max => {
  return Math.floor(Math.random() * max) + 1
}

async function searchAnimalsById (id) {
  const response = await fetch(`./assets/data/dragAndDrop.json`)
  const data = await response.json()

  AnimalFound.push(data.Animals[id])
  AnimalsNames.push(data.Animals[id].name)

  AnimalsNames = AnimalsNames.sort(() => Math.random() - 0.5)

  draggableElements.innerHTML = ''
  AnimalFound.forEach(animals => {
    draggableElements.innerHTML += `<div class="Animals">
            <img id="${animals.name}"draggable="true" class="image" src="${animals.img}" alt="animal">
        </div>`
  })
  droppapleElements.innerHTML = ''

  AnimalsNames.forEach(names => {
    droppapleElements.innerHTML += `<div class="names">
            <p><b>${names}</b></p>
        </div>`
  })

  let animals = document.querySelectorAll('.image')

  animals = [...animals]
  animals.forEach(animal => {
    animal.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text', event.target.id)
    })
  })
  let wrongMsg = document.querySelector('.wrong')
  let correctMsg = document.querySelector('.correct')
  let points = 0

  let names = document.querySelectorAll('.names')
  names = [...names]

  names.forEach(name => {
    name.addEventListener('dragover', event => {
      event.preventDefault()
    })

    name.addEventListener('drop', event => {
      const draggableElementData = event.dataTransfer.getData('text')
      let animalElement = document.querySelector(`#${draggableElementData}`)

      if (event.target.innerText == draggableElementData) {
        correctMsg.innerText = 'Well Done!'
        event.target.innerHTML = ''
        event.target.appendChild(animalElement)
        wrongMsg.innerText = ''
        points++
        if (points == CARDS) {
          // draggableElements.innerHTML = 'You won :D'
          correctMsg.innerText = 'You Won!'
        }
      } else {
        correctMsg.innerText = ''
        wrongMsg.innerText = 'You almost hit it!, Try again!'
      }
    })
  })
}
const btnDragAndDropGame = document.getElementById('btnDragAndDropGame')

btnDragAndDropGame.addEventListener('click', e => {
  e.preventDefault()
  renderDragAndDropGame()
  draggableElements = document.querySelector('.draggable-elements')
  droppapleElements = document.querySelector('.droppaple-elements')

  for (let c = 1; c <= CARDS; c++) {
    let id = getRandomId(12)
    searchAnimalsById(id)
  }
})
////////////////////////////////////////////////////////////////////
/* Boton de Personal Information */

function personalInformation () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Personal Information'
  nav.className = 'text-success'

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

  //Creando contenido de vocabulario

  const subtituloPI = document.createElement('h2')
  subtituloPI.className = ' fs-2 align-baseline h-75 d-inline-block'
  const subtituloPItext = document.createTextNode('We are going to start with the vocabulary!')

  subtituloPI.appendChild(subtituloPItext)
  mainContent.appendChild(subtituloPI)

  const info2PI = document.createElement('p')
  info2PI.className = 'lead fs-4'
  const info2PItext = document.createTextNode('We will show you a series of phrases and words commonly used in the daily English language. You will be able to complete some of these sentences using logic and what you have learned, as a method of feedback. Good luck!')

  info2PI.appendChild(info2PItext)
  mainContent.appendChild(info2PI)
//nombre
  const subtitulo2PI = document.createElement('h3')
  subtitulo2PI.className = 'fs-3 align-baseline text-danger'
  const subtitulo2PItext = document.createTextNode('Vocabulary: name')
  const divName = document.createElement('div')

  subtitulo2PI.appendChild(subtitulo2PItext)
  divName.appendChild(subtitulo2PI)
  mainContent.appendChild(subtitulo2PI)

  const phrasesPI = document.createElement('p')
  phrasesPI.className = 'fs-4'
  const phrasesPItext = document.createTextNode('What’s your name? – ¿Cuál es tu nombre? ¿Cómo te llamas?')

  const phrases2PI = document.createElement('p')
  phrases2PI.className = 'fs-4'
  const phrasesPItext2 = document.createTextNode('What’s your last name / family name? – ¿Cuál es tu apellido? ¿Cómo te apellidas?')

  const wordsPI = document.createElement('p')
  wordsPI.className = 'fs-4'
  const wordsPItext = document.createTextNode('First name / Given name / Christian name – Nombre de Pila')

  const words2PI = document.createElement('p')
  words2PI.className = 'fs-4'
  const words2PItext = document.createTextNode('Middle Name – Segundo nombre')

  


  phrasesPI.appendChild(phrasesPItext)
  phrases2PI.appendChild(phrasesPItext2)
  wordsPI.appendChild(wordsPItext)
  words2PI.appendChild(words2PItext)
  divName.appendChild(phrasesPI)
  divName.appendChild(phrases2PI)
  divName.appendChild(wordsPI)
  divName.appendChild(words2PI)
  mainContent.appendChild(phrasesPI)
  mainContent.appendChild(phrases2PI)
  mainContent.appendChild(wordsPI)
  mainContent.appendChild(words2PI)

  //edad
  const subtitulo3PI = document.createElement('h3')
  subtitulo3PI.className = 'fs-3 align-baseline text-danger'
  const subtitulo3PItext = document.createTextNode('Vocabulary: Age')
  const divAge = document.createElement('div')

  subtitulo3PI.appendChild(subtitulo3PItext)
  divAge.appendChild(subtitulo3PI)
  mainContent.appendChild(subtitulo3PI)

  const agePI = document.createElement('p')
  agePI.className = 'fs-4'
  const agePItext = document.createTextNode('What’s your age? / How old are you? – ¿Cuá es tu/su edad? ¿Cuantos años tiene / tienes?')

  const age2PI = document.createElement('p')
  age2PI.className = 'fs-4'
  age2PI.innerHTML = 'I am <input type="number"> years old - Tengo <input type="number"> años'

  const age3PI = document.createElement('p')
  age3PI.className = 'fs-4'
  const agePItext3 = document.createTextNode('When is your birthday? – ¿Cuándo es tu/su cumpleaños?')

  const age4PI = document.createElement('p')
  age4PI.className = 'fs-4'
  const agePItext4 = document.createTextNode('Date of birth – Fecha de nacimiento')

  const age5PI = document.createElement('p')
  age5PI.className = 'fs-4'
  age5PI.innerHTML = 'My birthday is <input type="text"> / My date of birth is <input type="text"> – Mi cumpleaños / fecha de nacimiento es <input type="text">'

  const age6PI = document.createElement('p')
  age6PI.className = 'fs-4'
  const agePItext6 = document.createTextNode('Place of birth – Lugar de nacimiento')

  const age7PI = document.createElement('p')
  age7PI.className = 'fs-4'
  age7PI.innerHTML = 'I was born in <input type="text"> – Nací en <input type="text"> / Soy de <input type="text">'

  const age8PI = document.createElement('p')
  age8PI.className = 'fs-4'
  age8PI.innerHTML = 'My place of birth is <input type="text"> – Mi lugar de nacimiento es <input type="text"> '

  
  agePI.appendChild(agePItext)
  age3PI.appendChild(agePItext3)
  age4PI.appendChild(agePItext4)
  age6PI.appendChild(agePItext6)
  divAge.appendChild(agePI)
  divAge.appendChild(age2PI)
  divAge.appendChild(age3PI)
  divAge.appendChild(age4PI)
  divAge.appendChild(age5PI)
  divAge.appendChild(age6PI)
  divAge.appendChild(age7PI)
  divAge.appendChild(age8PI)
  mainContent.appendChild(agePI)
  mainContent.appendChild(age2PI)
  mainContent.appendChild(age3PI)
  mainContent.appendChild(age4PI)
  mainContent.appendChild(age5PI)
  mainContent.appendChild(age6PI)
  mainContent.appendChild(age7PI)
  mainContent.appendChild(age8PI)

  //Género – Gender

  const subtitulo4PI = document.createElement('h3')
  subtitulo4PI.className = 'fs-3 align-baseline text-danger'
  const subtitulo4PItext = document.createTextNode('Vocabulary: Gender')
  const divGender = document.createElement('div')

  subtitulo4PI.appendChild(subtitulo4PItext)
  divGender.appendChild(subtitulo4PI)
  mainContent.appendChild(subtitulo4PI)

  const GenderPI = document.createElement('p')
  GenderPI.className = 'fs-4'
  const GenderPItext = document.createTextNode('Sr. Mr. / Sir, Mister – Señor, Don')
  const Gender2PI = document.createElement('p')
  Gender2PI.className = 'fs-4'
  const GenderPItext2 = document.createTextNode('Ms. M – Señorita o Señora, Doña')

  const Gender3PI = document.createElement('p')
  Gender3PI.className = 'fs-4'
  const GenderPItext3 = document.createTextNode('Mrs. – Sra (Señora)')

  const Gender4PI = document.createElement('p')
  Gender4PI.className = 'fs-4'
  const GenderPItext4 = document.createTextNode('Miss – Señorita')

  const Gender5PI = document.createElement('p')
  Gender5PI.className = 'fs-4'
  const GenderPItext5 = document.createTextNode('Female – De sexo femenino ; Hembra ; Mujer')

  const Gender6PI = document.createElement('p')
  Gender6PI.className = 'fs-4'
  const GenderPItext6 = document.createTextNode('Male – De sexo masculino ; Varón')

  
  GenderPI.appendChild(GenderPItext)
  Gender2PI.appendChild(GenderPItext2)
  Gender3PI.appendChild(GenderPItext3)
  Gender4PI.appendChild(GenderPItext4)
  Gender5PI.appendChild(GenderPItext5)
  Gender6PI.appendChild(GenderPItext6)
  divGender.appendChild(GenderPI)
  divGender.appendChild(Gender2PI)
  divGender.appendChild(Gender3PI)
  divGender.appendChild(Gender4PI)
  divGender.appendChild(Gender5PI)
  divGender.appendChild(Gender6PI)
  mainContent.appendChild(GenderPI)
  mainContent.appendChild(Gender2PI)
  mainContent.appendChild(Gender3PI)
  mainContent.appendChild(Gender4PI)
  mainContent.appendChild(Gender5PI)
  mainContent.appendChild(Gender6PI)

  //Estado Civil – Marital Status
  const subtitulo5PI = document.createElement('h3')
  subtitulo5PI.className = 'fs-3 align-baseline text-danger'
  const subtitulo5PItext = document.createTextNode('Vocabulary: Marital Status')
  const divMarital = document.createElement('div')

  subtitulo5PI.appendChild(subtitulo5PItext)
  divMarital.appendChild(subtitulo5PI)
  mainContent.appendChild(subtitulo5PI)

  const MaritalPI = document.createElement('p')
  MaritalPI.className = 'fs-4'
  const MaritalPItext = document.createTextNode('Single/Unmarried – Soltero')
  const Marital2PI = document.createElement('p')
  Marital2PI.className = 'fs-4'
  const MaritalPItext2 = document.createTextNode('Married – Casado')

  const Marital3PI = document.createElement('p')
  Marital3PI.className = 'fs-4'
  const MaritalPItext3 = document.createTextNode('Divorced – Divorciado')

  const Marital4PI = document.createElement('p')
  Marital4PI.className = 'fs-4'
  const MaritalPItext4 = document.createTextNode('Separated – Separado')

  const Marital5PI = document.createElement('p')
  Marital5PI.className = 'fs-4'
  const MaritalPItext5 = document.createTextNode('Widow – Viuda ')

  const Marital6PI = document.createElement('p')
  Marital6PI.className = 'fs-4'
  const MaritalPItext6 = document.createTextNode('Widower – Viudo ')

  
  MaritalPI.appendChild(MaritalPItext)
  Marital2PI.appendChild(MaritalPItext2)
  Marital3PI.appendChild(MaritalPItext3)
  Marital4PI.appendChild(MaritalPItext4)
  Marital5PI.appendChild(MaritalPItext5)
  Marital6PI.appendChild(MaritalPItext6)
  divMarital.appendChild(MaritalPI)
  divMarital.appendChild(Marital2PI)
  divMarital.appendChild(Marital3PI)
  divMarital.appendChild(Marital4PI)
  divMarital.appendChild(Marital5PI)
  divMarital.appendChild(Marital6PI)
  mainContent.appendChild(MaritalPI)
  mainContent.appendChild(Marital2PI)
  mainContent.appendChild(Marital3PI)
  mainContent.appendChild(Marital4PI)
  mainContent.appendChild(Marital5PI)
  mainContent.appendChild(Marital6PI)

  const subtitulo6PI = document.createElement('h3')
  subtitulo6PI.className = 'fs-3 align-baseline text-danger'
  const subtitulo6PItext = document.createTextNode('Vocabulary: Marital Status')
  const divOther = document.createElement('div')

  subtitulo6PI.appendChild(subtitulo6PItext)
  divOther.appendChild(subtitulo6PI)
  mainContent.appendChild(subtitulo6PI)

  const OtherPI = document.createElement('p')
  OtherPI.className = 'fs-4'
  const OtherPItext = document.createTextNode('Where are you from? – ¿De dónde es/eres?')

  const Other2PI = document.createElement('p')
  Other2PI.className = 'fs-4'
  Other2PI.innerHTML = 'I’m/ I am from <input type="text"> – Soy de <input type="text">'  

  const Other3PI = document.createElement('p')
  Other3PI.className = 'fs-4'
  const OtherPItext3 = document.createTextNode('Address – Dirección')

  const Other4PI = document.createElement('p')
  Other4PI.className = 'fs-4'
  const OtherPItext4 = document.createTextNode('What’s your address? / Where do you live? – ¿Cuál es tu dirección? / ¿Dónde  vives?')

  const Other5PI = document.createElement('p')
  Other5PI.className = 'fs-4'
  Other5PI.innerHTML = 'My address is <input type="text"> / I live in <input type="text">– Mi dirección es <input type="text"> / Vivo en <input type="text">'

  const Other6PI = document.createElement('p')
  Other6PI.className = 'fs-4'
  const OtherPItext6 = document.createTextNode('Postcode / Zip code – Código postal')

  const Other7PI = document.createElement('p')
  Other7PI.className = 'fs-4'
  const OtherPItext7 = document.createTextNode('What’s your address? / Where do you live? – ¿Cuál es tu dirección? / ¿Dónde  vives?')

  const Other8PI = document.createElement('p')
  Other8PI.className = 'fs-4'
  Other8PI.innerHTML = 'My address is <input type="text"> / I live in <input type="text">– Mi dirección es <input type="text"> / Vivo en <input type="text">'
  
  const Other9PI = document.createElement('p')
  Other9PI.className = 'fs-4'
  const OtherPItext9 = document.createTextNode('Nationality – Nacionalidad')

  const Other10PI = document.createElement('p')
  Other10PI.className = 'fs-4'
  const OtherPItext10 = document.createTextNode('What’s your nationality? – ¿Cuál es tu nacionalidad?')

  const Other11PI = document.createElement('p')
  Other11PI.className = 'fs-4'
  Other11PI.innerHTML = 'My nationality is <input type="text"> – Mi nacionalidad es <input type="text">'

  const Other12PI = document.createElement('p')
  Other12PI.className = 'fs-4'
  const OtherPItext12 = document.createTextNode('Telephone number – Número de teléfono')

  const Other13PI = document.createElement('p')
  Other13PI.className = 'fs-4'
  const OtherPItext13 = document.createTextNode('What’s your Telephone number – ¿Cuál es tu número de teléfono?')

  const Other14PI = document.createElement('p')
  Other14PI.className = 'fs-4'
  Other14PI.innerHTML = 'My telephone number is <input type="text"> – Mi número de teléfono es  <input type="text">'

  const Other15PI = document.createElement('p')
  Other15PI.className = 'fs-4'
  const OtherPItext15 = document.createTextNode('What do you do? What is your profession/occupation? Where do you work? – What is your job? ¿Dónde trabajas? ¿Cuál es tu trabajo / profesión?')

  
  OtherPI.appendChild(OtherPItext)
  Other3PI.appendChild(OtherPItext3)
  Other4PI.appendChild(OtherPItext4)
  Other6PI.appendChild(OtherPItext6)
  Other7PI.appendChild(OtherPItext7)
  Other9PI.appendChild(OtherPItext9)
  Other10PI.appendChild(OtherPItext10)
  Other12PI.appendChild(OtherPItext12)
  Other13PI.appendChild(OtherPItext13)
  Other15PI.appendChild(OtherPItext15)
  divOther.appendChild(OtherPI)
  divOther.appendChild(Other2PI)
  divOther.appendChild(Other3PI)
  divOther.appendChild(Other4PI)
  divOther.appendChild(Other5PI)
  divOther.appendChild(Other6PI)
  divOther.appendChild(Other7PI)
  divOther.appendChild(Other8PI)
  divOther.appendChild(Other9PI)
  divOther.appendChild(Other10PI)
  divOther.appendChild(Other11PI)
  divOther.appendChild(Other12PI)
  divOther.appendChild(Other13PI)
  divOther.appendChild(Other14PI)
  divOther.appendChild(Other15PI)
  mainContent.appendChild(OtherPI)
  mainContent.appendChild(Other2PI)
  mainContent.appendChild(Other3PI)
  mainContent.appendChild(Other4PI)
  mainContent.appendChild(Other5PI)
  mainContent.appendChild(Other6PI)
  mainContent.appendChild(Other7PI)
  mainContent.appendChild(Other8PI)
  mainContent.appendChild(Other9PI)
  mainContent.appendChild(Other10PI)
  mainContent.appendChild(Other11PI)
  mainContent.appendChild(Other12PI)
  mainContent.appendChild(Other13PI)
  mainContent.appendChild(Other14PI)
  mainContent.appendChild(Other15PI)
}

//////////////////////////////////////////////////////////////////
/* Boton de Greetings */

function greetings () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Greetings'
  nav.className = 'text-success'

  const h1G = document.createElement('h1')
  h1G.className = 'text-center text-success'
  h1G.innerHTML = 'Lets Learn <b>"Greetings"</b>'
  mainContent.appendChild(h1G)

  const imgDay = document.createElement("img")
  imgDay.src = "./assets/img/Greetings/day.png"
  imgDay.alt = "unable to load the image"
  imgDay.widht = 200
  imgDay.height = 200
  imgDay.style.marginbottom = "10px"
  imgDay.style.display = 'block'
  imgDay.style.margin = 'auto'
  imgDay.className = 'd-inline'

  const textDay = document.createElement('h2')
  textDay.className = 'd-inline'
  textDay.innerHTML = 'Good Morning'

  const text = document.createElement('h2')
  text.innerHTML = ' '

  const imgAfternoon = document.createElement("img")
  imgAfternoon.src = "./assets/img/Greetings/tarde.png"
  imgAfternoon.alt = "unable to load the image"
  imgAfternoon.widht = 200
  imgAfternoon.height = 200
  imgAfternoon.style.marginbottom = "10px"
  imgAfternoon.style.display = 'block'
  imgAfternoon.style.margin = 'auto'
  imgAfternoon.className = 'd-inline'

  const textafternoon = document.createElement('h2')
  textafternoon.className = 'd-inline'
  textafternoon.innerHTML = 'Good afternoon'

  const text2 = document.createElement('h2')
  text2.innerHTML = ' '


  const imgNight = document.createElement("img")
  imgNight.src = "./assets/img/Greetings/noche.jpg"
  imgNight.alt = "unable to load the image"
  imgNight.widht = 200
  imgNight.height = 200
  imgNight.style.marginbottom = "10px"
  imgNight.style.display = 'block'
  imgNight.style.margin = 'auto'
  imgNight.className = 'd-inline'

  const textnight = document.createElement('h2')
  textnight.className = 'd-inline'
  textnight.innerHTML = 'Good night'

  mainContent.appendChild(imgDay)
  mainContent.appendChild(textDay)
  mainContent.appendChild(text)
  mainContent.appendChild(imgAfternoon)
  mainContent.appendChild(textafternoon)
  mainContent.appendChild(text2)
  mainContent.appendChild(imgNight)
  mainContent.appendChild(textnight)

  const titleG = document.createElement('p')
  titleG.className = 'fs-4'
  titleG.innerHTML = '<br>These greetings are used in situations or spaces that require a slightly more serious and formal attitude. It is also used when we owe a degree of respect to whom we greet or when we are dealing with a person who is not very close to us.<br>You can use it in an interview, for example, or in a work or business meeting, and even when you have to go to the bank. <br> Lets see a small list with some formal greetings:'

  mainContent.appendChild(titleG)

  const listaG = document.createElement('ul')
  listaG.className = 'fs-4'
  listaG.innerHTML = '<li>Hello: Hola</li><li>morning: Buenos días</li><li>Good afternoon: Buenas tardes (entre las 12:00 pm y las 5:00 pm)</li><li>Good evening: Buenas tardes (entre las 6:00 pm y las 8:00 pm)</li><li>How are you?: ¿Cómo estás?</li><li>Good to see you: Que bueno verte</li><li>Nice to see you: Que agradable verte</li>'

  mainContent.appendChild(listaG)

  const titleG2 = document.createElement('h2')
  titleG2.className = 'fs-4'
  titleG2.innerHTML = 'Informal Greetings'

  mainContent.appendChild(titleG2)

  const listaG2 = document.createElement('ul')
  listaG2.className = 'fs-4'
  listaG2.innerHTML = '<li>Hi: Hola</li><li>Hey!: Hola </li><li>How’s it going?: ¿Cómo te ha ido?, ¿Cómo te está yendo?</li><li>How are you all?: ¿Cómo están todos?</li><li>How are you doing?: ¿Cómo vas/van?.</li>'

  mainContent.appendChild(listaG2)
}

/////////////////////////////////////////////////////////////////////////

const btnPersonalInformation = document.getElementById('btnPersonalInformation')
const btnGreetings = document.getElementById('btnGreetings')
const btnIntroduceMySelf = document.getElementById('btnIntroduceMySelf')
const btnNamesAndTitles = document.getElementById('btnNamesAndTitles')
const btnAlphabet = document.getElementById('btnAlphabet')

btnPersonalInformation.addEventListener('click', e => {
  e.preventDefault()
  personalInformation()
})

btnGreetings.addEventListener('click', e => {
  e.preventDefault()
  greetings()
})

// btnIntroduceMySelf.addEventListener('click', e => {
//   e.preventDefault()
//   mySelf()
// })

// btnNamesAndTitles.addEventListener('click', e => {
//   e.preventDefault()
//   namesAndTitles()
// })

btnAlphabet.addEventListener('click', e => {
  e.preventDefault()
  alphabet()
})
