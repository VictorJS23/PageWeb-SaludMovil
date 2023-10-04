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

  const title = document.createElement('h1')
  const addTitle = document.createTextNode('Making Objects')
  title.appendChild(addTitle)
  title.className = 'text-center text-primary'
  mainContent.appendChild(title)

  const form = document.createElement('form')
  form.innerHTML = `
    <label for="firstname">Firstname:</label><br>
      <input type="text" id="firstname" name="firstname"><br>
    <label for="lastname">Lastname:</label><br>
      <input type="text" id="lastname" name="lastname"><br>
    <label for="age">Age:</label><br>
      <input type="number" id="age" name="age"><br><br>
    <input type="submit" value="Enviar">
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

    let here = true

    const validation = () => {
      const array = [name, lastName, age]

      for(i = 0; i < array.length; i++){
        if(array[i] === ''){
          alert(`${array[i]} no puede estar vacio`)
          here = false
          break
        }
      }

      if(here === true){

        const printPersona = ((obj) => {
          for (let clave in obj){
            mainContent.innerHTML += `<br> ${clave}: ${obj[clave]} <br>`
            console.log(mainContent)
          }
        })
        
        printPersona(persona)

        const btnGreet = document.createElement('button')
        btnGreet.textContent = 'Greet'
        btnGreet.addEventListener('click', () => {
          mainContent.innerHTML += `<br><br> Hola <i>${name + " " + lastName}</i>, tu edad es de ${age} años. <br>`
          console.log(mainContent)
        })

      }

    }

    validation()

    space()

    mainContent.appendChild(btnGreet)

  })

  mainContent.appendChild(form)
  
}

//----------------------------------------------------------------->>

function ShortQuestions () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Short questions'
  nav.className = 'text-success'

  const title = document.createElement('h1')
  const addTitle = document.createTextNode('Citas Medicas')
  title.appendChild(addTitle)
  title.className = 'text-center text-primary'
  mainContent.appendChild(title)

  space = () => {
    const espacio = document.createElement('br')
    mainContent.appendChild(espacio)
    return(espacio)
  }

  // Code here ------>

  space()

  
  
  const formulario = (() => {

    const cita = document.createElement('form')
    cita.id = 'formCita'
    cita.innerHTML = `
      <label for="cita">Ingrese la cita a guardar:</label><br><br>
      <input type="text" id="inputCita" name="cita"><br><br>
      <input type="submit" value="Enviar cita"><br><br>
      <input type="submit" id="btnNcita" value="Nueva cita"><br>
    `
    mainContent.appendChild(cita)

    const getIdForm = document.getElementById('formCita')

    getIdForm.addEventListener('submit', (event) => {
      event.preventDefault()

      const addCita = document.getElementById('inputCita').value

      const readCita = ((cita) => {
        space()
        mainContent.innerHTML += `La cita ingresada fue: ${cita}`
        return console.log(mainContent)
      })

      if (addCita === '') {
        return alert('El campo no puede estar vacio')
      } else {
        return readCita(addCita)
      }
    
    })

  })

  console.log('tryt')
  formulario()
  
  const btnNewCita = document.getElementById('btnNcita')
  btnNewCita.addEventListener('submit', (event) => {
    event.preventDefault()
    const newForm = formulario().value
    formulario()
    // EL valor de newForm se manipularia con el fetch
  })
  
  mainContent.appendChild(inpCita)

}

// *****************************************************************************************
//                                      CONEXIONES
// *****************************************************************************************

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
