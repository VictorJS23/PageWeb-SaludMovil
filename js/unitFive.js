function PresentContinuous () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Present Continous'
  nav.className = 'text-success'

 // Code here ------>

  const form = document.createElement('form')
  form.innerHTML = `
    <label for="num1">Number 1:</label><br>
    <input type="number" id="num1" name="num1"><br>
    <label for="num2">Number 2:</label><br>
    <input type="number" id="num2" name="num2"><br><br>
    <button type="submit">Add</button><br>
  `
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const sum = num1 + num2
    mainContent.innerHTML = `The sum of the two numbers is: ${sum}`
  })

  mainContent.appendChild(form)
}
  

function EverydayExpressions () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Everyday Expressions'
  nav.className = 'text-success'

  space = () => {
    const espacio = document.createElement('br')
    mainContent.appendChild(espacio)
    return(espacio)
  }

  // Code here ------>

  const form = document.createElement('form')
  form.innerHTML = `
    <label for="firstname">Firstname:</label><br>
      <input type="text" id="firstname" name="firstname"><br>
    <label for="lastname">Lastname:</label><br>
      <input type="text" id="lastname" name="lastname"><br>
    <label for="age">Age:</label><br>
      <input type="number" id="age" name="age"><br><br>
    <input type="submit" value="Submit">
  `

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.getElementById('firstname').value
    const lastName = document.getElementById('lastname').value
    const age = document.getElementById('age').value

    const persona = {
      name, 
      lastName, 
      age
    }

    localStorage.setItem('persona', JSON.stringify(persona))

    const printPersona = ((obj) => {
      for (let clave in obj){
        mainContent.innerHTML += `<br> ${clave}: ${obj[clave]} <br>`
        console.log(mainContent)
      }
    })

    printPersona(persona)

    space()

    const btnGreet = document.createElement('button')
    btnGreet.textContent = 'Greet'
    btnGreet.addEventListener('click', () => {
      mainContent.innerHTML += `<br><br> Hola <i>${name + " " + lastName}</i>, tu edad es de ${age} años. <br>`
      console.log(mainContent)
    })

    mainContent.appendChild(btnGreet)

  })

  mainContent.appendChild(form)
}

function ShortQuestions () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Short questions'
  nav.className = 'text-success'

  // Code here ------>
}


const btnPresentContinuous = document.getElementById('btnPresentContinuous')
const btnEverydayExpressions = document.getElementById('btnEverydayExpressions')
const btnShortQuestions = document.getElementById('btnShortQuestions')

btnPresentContinuous.addEventListener('click', e => {
  e.preventDefault()
  PresentContinuous()
})
btnEverydayExpressions.addEventListener('click', e => {
  e.preventDefault()
  EverydayExpressions()
})
btnShortQuestions.addEventListener('click', e => {
  e.preventDefault()
  ShortQuestions()
})
