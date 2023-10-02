function QuestionsAndConversations() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'Questions and conversations'
  nav.className = 'text-success'
  
  // code here ---------->
}

function ShortAnswers() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
  const nav = document.getElementById('Main-Index')
  nav.innerHTML = 'ShortAnswers'
  nav.className = 'text-success'

  // code here ---------->
}

const btnQuestionsAndConversations = document.getElementById('btnQuestionsAndConversations')
const btnShortAnswers = document.getElementById('btnShortAnswers')
const btnWHQuestions = document.getElementById('btnWHQuestions')

btnQuestionsAndConversations.addEventListener('click', e => {
  e.preventDefault()
  QuestionsAndConversations()
})
btnShortAnswers.addEventListener('click', e => {
  e.preventDefault()
  ShortAnswers()
})
btnWHQuestions.addEventListener('click', e => {
  e.preventDefault()
  WHQuestions()
})
