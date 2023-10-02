function PresentContinuous () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Present Continous'
  nav.className = 'text-success'

 // Code here ------>
}
  

function EverydayExpressions () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Everyday Expressions'
  nav.className = 'text-success'

  // Code here ------>
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
