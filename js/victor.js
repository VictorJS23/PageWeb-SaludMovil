function PresentContinuous () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Present Continous'
  nav.className = 'text-success'

  const paragrafh = document.createElement('p')
  const txtUno = document.createTextNode('The present continuous verb tense indicates that an action or condition is happening now, frequently,and may continue into the future. It generally refers to situations or actions that are being carried out at the moment and, as in Spanish, learning this tense is essential to have fluency and expression in any conversation in English.')
  paragrafh.appendChild(txtUno)
  mainContent.appendChild(paragrafh)

  const paragrafhDos = document.createElement('h3')
  paragrafhDos.innerHTML = '<br>The Present Continuous Formula:'
  mainContent.appendChild(paragrafhDos)

  const paragrafhTres = document.createElement('p')
  const txtTres = document.createTextNode(' to be [Am, Is, Are] + Verb [Present Participle]')
  paragrafhTres.appendChild(txtTres)
  mainContent.appendChild(paragrafhTres)

  const paragrafhCuatro = document.createElement('h3')
  paragrafh.className = 'align-baseline'
  const txtCuatro = document.createTextNode('Example ')
  paragrafhCuatro.appendChild(txtCuatro)
  mainContent.appendChild(paragrafhCuatro)

  const divContainer = document.createElement('div')
  divContainer.style.display = 'flex' //Esto establece el estilo para mostrar los elementos en línea
  divContainer.appendChild(paragrafhCuatro)  //Agrega el elemento original
  const paragrafhCinco = document.createElement('p')  //Agrega el nuevo elemento de bloque de texto
  paragrafhCinco.innerHTML = 'Aunt Christine is warming up the car while Scott is looking for his new leather coat, <br> they are eating at Scott’s favorite restaurant today, Polly’s Pancake Diner.'
  paragrafhCinco.style.marginLeft = '50px'
  paragrafhCinco.style.marginTop = '5px'
  divContainer.appendChild(paragrafhCinco)
  mainContent.appendChild(divContainer)

  const paragrafhSeis = document.createElement('p')
  paragrafhSeis.innerHTML = '<br>The present continuous (present progressive) tense is a way to convey any action or condition that is happening right now, frequently, and may be ongoing. It adds energy and action to writing, and its effect helps readers understand when the action is happening. Imagine Aunt Christine has surprised her nephew Scott for his birthday and is going to take him out to his favorite restaurant, Polly’s Pancake Diner. If I wanted to tell the story after it happened, I’d use the past tense.'
  mainContent.appendChild(paragrafhSeis)
  
  const paragrafhSiete = document.createElement('h3')
  paragrafhSiete.innerHTML = '<br>When to Use the Present Continuous Tense?'
  mainContent.appendChild(paragrafhSiete)
  
  const paragrafhOcho = document.createElement('p')
  const txtOcho = document.createTextNode('Use the present continuous tense with the appropriate “to be” verb and a dynamic verb. A dynamic verb shows action and/or process. For example:')
  paragrafhOcho.appendChild(txtOcho)
  mainContent.appendChild(paragrafhOcho)

  const paragrafhNueve = document.createElement('h3')
  paragrafhNueve.className = 'align-baseline'
  const txtNueve = document.createTextNode('Example')
  paragrafhNueve.appendChild(txtNueve)
  mainContent.appendChild(paragrafhNueve)

  const divContainerDos = document.createElement('div')
  divContainerDos.style.display = 'flex'
  divContainerDos.appendChild(paragrafhNueve)
  const paragrafhDiez = document.createElement('p')
  paragrafhDiez.innerHTML = 'Scott’s little sister is arriving at the diner two hours late because her <br> roller-derby team, Chicks Ahoy, won the national championships early today. <br> As she is walking into Polly’s Pancake Diner, she is yelling goodbye <br> to her friends outside, and Scott hopes she doesn’t cause a scene since she is <br> always embarrassing him in public.'
  paragrafhDiez.style.marginLeft = '50px'
  paragrafhDiez.style.marginTop = '5px'
  divContainerDos.appendChild(paragrafhDiez)
  mainContent.appendChild(divContainerDos)

  const paragrafhOnce = document.createElement('h3')
  paragrafhOnce.innerHTML = '<br>When Not to Use the Present Continuous Tense?'
  mainContent.appendChild(paragrafhOnce)

  const paragrafhDoce = document.createElement('p')
  const txtDoce = document.createTextNode('Do not use the present continuous tense with stative verbs. Stative verbs show a state of being that does not show qualities of change. These verbs can stay in the simple present. For example')
  paragrafhDoce.appendChild(txtDoce)
  mainContent.appendChild(paragrafhDoce)

  const paragrafhTrece = document.createElement('h3')
  paragrafhTrece.className = 'align-baseline'
  const txtTrece = document.createTextNode('Example')
  paragrafhTrece.appendChild(txtTrece)
  mainContent.appendChild(paragrafhTrece)
  
  const paragrafhCatorce = document.createElement('h5')
  paragrafhCatorce.className = 'align-baseline text-danger'
  paragrafhCatorce.innerHTML = 'Incorrect'
  paragrafhCatorce.style.marginLeft = '80px'
  paragrafhCatorce.style.marginBottom = '50px'
  mainContent.appendChild(paragrafhCatorce)

  const divContainerTres = document.createElement('div')
  divContainerTres.style.display = 'flex'
  divContainerTres.appendChild(paragrafhCatorce)
  const paragrafhQuince = document.createElement('p')
  paragrafhQuince.innerHTML = 'Sarah is being a tall teenager, who loves her food spicy and her sports dangerous.'
  paragrafhQuince.style.marginLeft = '50px'
  paragrafhQuince.style.marginBottom = '50px'
  divContainerTres.appendChild(paragrafhQuince)
  mainContent.appendChild(divContainerTres)
  
  const paragrafhDiezSeis = document.createElement('h5')
  paragrafhDiezSeis.className = 'align-baseline text-success'
  paragrafhDiezSeis.innerHTML = 'Correct'
  paragrafhDiezSeis.style.marginLeft = '80px'
  paragrafhDiezSeis.style.marginRight = '11px'
  paragrafhDiezSeis.style.marginBottom = '5px'

  const divContainerCuatro = document.createElement('div')
  divContainerCuatro.style.display = 'flex'
  divContainerCuatro.appendChild(paragrafhDiezSeis)
  const paragrafhDiezSiete = document.createElement('p')
  paragrafhDiezSiete.innerHTML = 'Aunt Christine prefers the maple walnut pancakes over the banana peanut butter ones that Scott loves.'
  paragrafhDiezSiete.style.marginLeft = '50px'
  paragrafhDiezSiete.style.marginBottom = '50px'
  divContainerCuatro.appendChild(paragrafhDiezSiete)
  mainContent.appendChild(divContainerCuatro)

  const paragrafhDiezOcho = document.createElement('p')
  const txtDiezOcho = document.createTextNode('Here, the stative verb to prefer shows opinion, and therefore should not be conjugated into the present continuous. Stative verb categories include emotion (to love), possession (to belong), and thoughts (to recognize), and none of these should use the present continuous form.')
  paragrafhDiezOcho.appendChild(txtDiezOcho)
  mainContent.appendChild(paragrafhDiezOcho)
 
  const mainyoContent = document.getElementById('main-content')
  let score = 0 // Variable para almacenar la puntuación

  const exerciseHeader = document.createElement('h3')
  exerciseHeader.textContent = 'Complete the sentences in Present Continuous (English)'
  mainyoContent.appendChild(exerciseHeader)

  const exercises = [
  {
    sentence: 'I ___________ (play) soccer right now.',
    answers: ['am playing'],
  },
  {
    sentence: 'She ___________ (study) French at the moment.',
    answers: ['is studying'],
  },
  {
    sentence: 'They ___________ (watch) a movie tonight.',
    answers: ['are watching'],
  },
  {
    sentence: 'We ___________ (eat) dinner at the restaurant.',
    answers: ['are eating'],
  },
  {
    sentence: 'He ___________ (go) to the gym this afternoon.',
    answers: ['is going'],
  },
  {
    sentence: 'You ___________ (read) a book right now.',
    answers: ['are reading'],
  },
  {
    sentence: 'The dog ___________ (bark) loudly at the mailman.',
    answers: ['is barking'],
  },
  {
    sentence: 'My sister ___________ (work) on a project.',
    answers: ['is working'],
  },
  {
    sentence: 'We ___________ (wait) for the bus.',
    answers: ['are waiting'],
  },
  {
    sentence: 'They ___________ (play) tennis this afternoon.',
    answers: ['are playing'],
  },
];

  exercises.forEach((exercise, index) => {
  const exerciseDiv = document.createElement('div')
  exerciseDiv.className = 'exercise'

  const sentenceText = document.createElement('p')
  sentenceText.innerHTML = `${index + 1}. ${exercise.sentence}`
  exerciseDiv.appendChild(sentenceText)

  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'Enter your answer'
  exerciseDiv.appendChild(input)

  const resultText = document.createElement('div')
  resultText.id = `result-${index}`
  resultText.className = 'result-text'
  exerciseDiv.appendChild(resultText)

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkAnswer(index, exercise.answers, input.value.trim())
      input.disabled = true; // Deshabilita el input para evitar múltiples respuestas
    }
  
  })

  mainyoContent.appendChild(exerciseDiv)
})

  const scoreDiv = document.createElement('div')
  scoreDiv.className = 'score';
  scoreDiv.textContent = `Score: ${score}`
  mainyoContent.appendChild(scoreDiv)

  function checkAnswer(index, answers, userInput) {
  const correctAnswers = answers.map(answer => answer.toLowerCase())
  const userAnswer = userInput.toLowerCase();
  const resultText = document.getElementById(`result-${index}`)
  
  if (correctAnswers.includes(userAnswer)) {
    resultText.textContent = 'Correct!'
    resultText.classList.remove('incorrect')
    resultText.classList.add('correct')
    score += 1; // Suma un punto si la respuesta es correcta
    scoreDiv.textContent = `Score: ${score} / 10 ` // Actualiza el marcador de puntos
  } else {
    resultText.textContent = 'Incorrect. Try again!'
    resultText.classList.remove('correct')
    resultText.classList.add('incorrect')
  }

  
 }
if (score < 4) {
    scoreDiv.style.color = 'red'
  } else if (score > 4 && score <= 7) {
    scoreDiv.style.color = 'orange'
  } else {
    scoreDiv.style.color = 'green'
  }
}

function resetExercise() {
  score = 0;
  scoreDiv.textContent = `Score: ${score}`;
  scoreDiv.style.color = ''; // Restablecer el color del marcador de puntuación

 // Code here for more code
}
  
/**
 * Segundo tema ----------------------------------------------------------------------------------
 * ++++++++++++ ----------------------------------------------------------------------------------
 */

function EverydayExpressions () {
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Everyday Expressions'
  nav.className = 'text-success'
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  //Code Here

  const parrafoUno = document.createElement('p')
  parrafoUno.innerHTML = 'In the case of "Everyday Expressions", there is no strict formula for their creation, since they are phrases and expressions that arise naturally in the context of informal oral communication. However, there are some common characteristics that can be taken into account when using these types of expressions: <br><br>'
  mainContent.appendChild(parrafoUno)
  
  const parrafoDos = document.createElement('h4')
  parrafoDos.className = 'align-baseline'
  parrafoDos.style.marginLeft = '30px'
  const textDos = document.createTextNode(' Informality ')
  parrafoDos.appendChild(textDos)
  mainContent.appendChild(parrafoDos)

  const divContainerCinco = document.createElement('div')
  divContainerCinco.style.display = 'flex'
  divContainerCinco.appendChild(parrafoDos)
  const parrafoTres = document.createElement('p')
  parrafoTres.innerHTML = "Everyday expressions are usually informal and colloquial, so they don't follow <br> strict grammar rules or have a formal tone. They are very simple phrases <br> to satisfy specific needs. <br>"
  parrafoTres.style.marginLeft = '40px'
  parrafoTres.style.marginTop = '3px'
  parrafoTres.style.marginBottom = '20px'
  divContainerCinco.appendChild(parrafoTres)
  mainContent.appendChild(divContainerCinco)
  
  const parrafoSeis = document.createElement('h4')
  parrafoSeis.className = 'align-baseline'
  parrafoSeis.style.marginLeft = '30px'
  parrafoSeis.style.marginTop = '30px'
  const textTres = document.createTextNode(' Contextuality ')
  parrafoSeis.appendChild(textTres)
  mainContent.appendChild(parrafoSeis)

  const divContainerSeis = document.createElement('div')
  divContainerSeis.style.display = 'flex'
  divContainerSeis.appendChild(parrafoSeis)
  const parrafoSiete = document.createElement('p')
  parrafoSiete.innerHTML = ' <br> These expressions are adapted to the context and situation in which they are used. <br> They can vary according to the culture, the social group and the relationship <br> between the people who interact. <br><br><br>'
  parrafoSiete.style.marginLeft = '40px'
  parrafoSiete.style.marginTop = '9px'
  parrafoSiete.style.marginBottom = '5px'
  divContainerSeis.appendChild(parrafoSiete)
  mainContent.appendChild(divContainerSeis)

  const parrafoOcho = document.createElement('h4')
  parrafoOcho.className = 'align-baseline'
  parrafoOcho.style.marginLeft = '30px'
  const textCuatro = document.createTextNode(' Naturalness ')
  parrafoOcho.appendChild(textCuatro)
  mainContent.appendChild(parrafoOcho)
 
  const divContainerSiete = document.createElement('div')
  divContainerSiete.style.display = 'flex'
  divContainerSiete.appendChild(parrafoOcho)
  const parrafoNueve = document.createElement('p')
  parrafoNueve.innerHTML = 'Daily expressions are generated spontaneously and flow naturally in conversations. <br> They are not usually elaborate or structured sentences, but rather short and simple sentences.<br>'
  parrafoNueve.style.marginLeft = '40px'
  parrafoNueve.style.marginTop = '5px'
  parrafoNueve.style.marginBottom = '12px'
  divContainerSiete.appendChild(parrafoNueve)
  mainContent.appendChild(divContainerSiete)

  const parrafoDiez = document.createElement('h4')
  parrafoDiez.className = 'align-baseline'
  parrafoDiez.style.marginLeft = '30px'
  parrafoDiez.style.marginTop = '50px'
  parrafoDiez.style.marginRight = '8px'
  const textCinco = document.createTextNode(' Common use ')
  parrafoDiez.appendChild(textCinco)
  mainContent.appendChild(parrafoDiez)

  const divContainerOcho = document.createElement('div')
  divContainerOcho.style.display = 'flex'
  divContainerOcho.appendChild(parrafoDiez)
  const parrafoOnce = document.createElement('p')
  parrafoOnce.innerHTML = '<br><br>These expressions are used by many people in similar situations, making them <br> part of everyday communication and recognizable to native speakers. <br><br>'
  parrafoOnce.style.marginLeft = '40px'
  parrafoOnce.style.marginTop = '8px'
  parrafoOnce.style.marginBottom = '50px'
  divContainerOcho.appendChild(parrafoOnce)
  mainContent.appendChild(divContainerOcho)
  
  const parrafoDoce = document.createElement('h3')
  const textDoce = document.createTextNode('Here are some examples of each type of expression: ')
  parrafoDoce.appendChild(textDoce)
  mainContent.appendChild(parrafoDoce)

  const parrafoTrece = document.createElement('h4')
  parrafoTrece.className = 'align-baseline'
  parrafoTrece.innerHTML = '<br> 1 ) Examples : Informality '
  parrafoTrece.style.marginRight = '10px'
  parrafoTrece.style.marginTop = '5px'
  mainContent.appendChild(parrafoTrece)

  const divContainerTrece = document.createElement('div')
  divContainerTrece.style.display = 'flex'
  divContainerTrece.appendChild(parrafoTrece)
  const parrafoCatorce = document.createElement('p')
  parrafoCatorce.innerHTML = '<br>1. "Wanna hang out later?" - ¿Quieres salir conmigo mas tarde? <br><br> 2. "I´m gonna crash at my friend´s place." - Voy a quedarme a dormir a casa de un amigo. <br><br>     3. "That movie was awesome" - ¡Esa pelicula estuvo genial! / estuvo increible <br><br> 4. "What´s the scoop?" - ¿Cual es el chisme? <br><br> 5. "I´m beat, let´s call it a day." - Estoy agotado, llamemos a esto el fin del dia / Estoy cansado, mejor mas tarde. <br><br> 6. "I´m gonna grab a bite to eat." - Voy a comer algo rapido. <br><br> 7. "No way!" - De ninguna manera! <br><br> 8. "I´m all ears." - Estoy todo oidos. <br><br> 9. "Let´s hit the road." - Vamos a salir. <br><br> 10. "What´s the big deal?" - ¿Cual es el problema?'
  parrafoCatorce.style.marginLeft = '-180px'
  parrafoCatorce.style.marginRight = '5px'
  parrafoCatorce.style.marginTop = '60px'
  parrafoCatorce.style.marginBottom = '30px'
  divContainerTrece.appendChild(parrafoCatorce)
  mainContent.appendChild(divContainerTrece)

  const nota = document.createElement('h6')
  const txtNota = document.createTextNode('Note : These informal expressions have a more relaxed and colloquial tone, and are common in informal situations or among close friends. Remember that it is important to adapt the level of informality to the context and to the people with whom you are communicating.')
  nota.style.marginBottom = '20px'
  nota.appendChild(txtNota)
  mainContent.appendChild(nota)

  const parrafoQuince = document.createElement('h4')
  parrafoQuince.className = 'align-baseline'
  parrafoQuince.innerHTML = '<br> 2 ) Examples : Contextuality '
  parrafoQuince.style.marginRight = '10px'
  parrafoQuince.style.marginTop = '5px'
  parrafoQuince.style.whiteSpace = 'nowrap'
  mainContent.appendChild(parrafoQuince)

  const divContainerNueve = document.createElement('div')
  divContainerNueve.style.display = 'flex'
  divContainerNueve.appendChild(parrafoQuince)
  const parrafoDiesei = document.createElement('p')
  parrafoDiesei.innerHTML = ' <br>1. "How´s the weather over there?" - ¿Como esta el clima por allá? - (Contexto: Conversación sobre el clima en una ubicación diferente.) <br><br> 2. "I´ll bring a bottle of wine." - Voy a traer una botella de vino. (Contexto: Invitación a una reunion social.) <br><br> 3. "Can you pass me the salt, please?" - ¿Me puedes pasar la sal,por favor? (Contexto: Durante ua comida) <br><br> 4. "I´ll be there in 5 minutes" -  Estaré allí en 5 minutos. (Contexto: acordar un encuentro) <br><br> 5. "I had a rough day at work." - Tuve un día duro en el trabajo. (Contexto: compartir experiencias del día) <br><br> 6. "Could you help me with this task?" - ¿Me podrías ayudar con esta tarea? (Contexto: solicitar asistencia) <br><br> 7. "Let´s meet at the coffee shop." - Encontremos en la cafetería. (Contexto: establecer un lugar de encuentro) <br><br> 8. "Do you have any recommendations for a good restaurant?" -  ¿Tienes alguna recomendación para un buen restaurante? (Contexto: buscar consejos sobre lugares para comer) <br><br> 9. "I´m sorry for the misunderstanding" -  Lo siento por el malentendido. (Contexto: disculparse por una confusión) <br><br> 10. "Are you available for a quick chat?" - ¿Estás disponible para una charla rápida? (Contexto: verificar la disponibilidad para una conversación)'
  parrafoDiesei.style.marginLeft = '-180px'
  parrafoDiesei.style.marginRight = '5px'
  parrafoDiesei.style.marginTop = '60px'
  parrafoDiesei.style.marginBottom = '30px'
  divContainerNueve.appendChild(parrafoDiesei)
  mainContent.appendChild(divContainerNueve)

  const notaUno = document.createElement('h6')
  const txtNotaDos = document.createTextNode('Note : These examples show how the meaning and use of expressions can vary depending on the context in which they are used. It is important to take context into account when communicating to ensure that the message is correctly understood.')
  notaUno.style.marginBottom = '20px'
  notaUno.style.marginRight = '5px'
  notaUno.appendChild(txtNotaDos)
  mainContent.appendChild(notaUno)

  const parrafoDieSiete = document.createElement('h4')
  parrafoDieSiete.className = 'align-baseline'
  parrafoDieSiete.innerHTML = '<br> 3 ) Examples : Naturalness '
  parrafoDieSiete.style.marginRight = '10px'
  parrafoDieSiete.style.marginTop = '5px'
  parrafoDieSiete.style.whiteSpace = 'nowrap'
  mainContent.appendChild(parrafoDieSiete)


  const divContainerDiez = document.createElement('div')
  divContainerDiez.style.display = 'flex'
  divContainerDiez.appendChild(parrafoDieSiete)
  const parrafoDieocho = document.createElement('p')
  parrafoDieocho.innerHTML = '<br>1. "I can´t believe it!" - ¡No puedo creerlo! <br><br> 2. "Oh well, that´s life." - Bueno, así es la vida. <br><br> 3. "You know what I mean?" - ¿Sabes a lo que me refiero? <br><br> 4. "I´m just going with the flow." - Solo me dejo llevar. <br><br> 5. "I guess we´ll figure it out." - Supongo que lo resolveremos <br><br> 6. "I´ll give it a shot." - Lo intentaré. <br><br> 7. "It´s no biggie." - No es gran cosa. <br><br> 8. "I´m not really a morning person." - Realmente no soy una persona de mañanas. <br><br> 9. "I´m not gonna lie, it was tough." - No voy a mentir, fue difícil. <br><br> 10. "I´m feeling under the weather." - Me siento un poco mal.'
  parrafoDieocho.style.marginLeft = '-180px'
  parrafoDieocho.style.marginRight = '5px'
  parrafoDieocho.style.marginTop = '60px'
  parrafoDieocho.style.marginBottom = '30px'
  divContainerDiez.appendChild(parrafoDieocho)
  mainContent.appendChild(divContainerDiez)

  const notaDos = document.createElement('h6')
  const txtNotaTres = document.createTextNode('Note : These expressions reflect spontaneity and naturalness in everyday communication. They are phrases that flow in a more informal and relaxed way, which helps convey a sense of authenticity in the interaction. Remember that naturalness also depends on the tone of voice and body language when using these expressions.')
  notaDos.style.marginBottom = '20px'
  notaDos.style.marginRight = '5px'
  notaDos.appendChild(txtNotaTres)
  mainContent.appendChild(notaDos)
 
  const parrafoDieNueve = document.createElement('h4')
  parrafoDieNueve.className = 'align-baseline'
  parrafoDieNueve.innerHTML = '<br> 4 ) Examples : Common use '
  parrafoDieNueve.style.marginRight = '10px'
  parrafoDieNueve.style.marginTop = '5px'
  parrafoDieNueve.style.whiteSpace = 'nowrap'
  mainContent.appendChild(parrafoDieNueve)

  const divContainerOnce = document.createElement('div')
  divContainerOnce.style.display = 'flex'
  divContainerOnce.appendChild(parrafoDieNueve)
  const parrafoDieUno = document.createElement('p')
  parrafoDieUno.innerHTML = '<br>1. "How are you?" - ¿Cómo estás? <br><br> 2. "Thank you" - Gracias <br><br> 3. "Sorry" - Perdón/Lo siento <br><br> 4. "Excuse me" - Disculpa <br><br> 5. "Can I help you?" - ¿Puedo ayudarte? <br><br> 6. "Nice to meet you" - Mucho gusto <br><br> 7. "I don´t know" - No sé <br><br> 8. "See you later" - Hasta luego <br><br> 9. "What´s your name?" - ¿Cómo te llamas? <br><br> 10. "Where is the restroom?" - ¿Dónde está el baño?'
  parrafoDieUno.style.marginLeft = '-180px'
  parrafoDieUno.style.marginRight = '5px'
  parrafoDieUno.style.marginTop = '60px'
  parrafoDieUno.style.marginBottom = '30px'
  divContainerOnce.appendChild(parrafoDieUno)
  mainContent.appendChild(divContainerOnce)

  const notaTres = document.createElement('h6')
  const txtNotaFor = document.createTextNode('Note : These are very common expressions that are used in various situations, both in formal and informal interactions. They are useful for striking up conversations, expressing courtesy, asking basic questions, and saying goodbye. Be sure to adapt these expressions according to the context and the corresponding cultural norms.')
  notaTres.style.marginBottom = '50px'
  notaTres.style.marginRight = '5px'
  notaTres.appendChild(txtNotaFor)
  mainContent.appendChild(notaTres)

  const parafo = document.createElement('p')
  const tet = document.createTextNode('It is important to remember that "everyday expressions" can vary depending on the language and culture in which they are used. They develop through the interaction between people and evolve over time, so there is no definitive list of daily expressions. The best way to learn and use them is through exposure to the language and interaction with native speakers in everyday situations.')
  parafo.appendChild(tet)
  mainContent.appendChild(parafo)


  // Investigar como meter un audio / video (Ver codigo de josias)
}

/**
 * Tercer tema ----------------------------------------------------------------------------------
 * ++++++++++++ ----------------------------------------------------------------------------------
 */

function ShortQuestions () {
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Short questions'
  nav.className = 'text-success'
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
  //Code here

  const questionConcept = document.createElement('p')
  const txtQuestion =  document.createTextNode('"Short questions" or "short interrogative sentences" are short, direct questions used to quickly and concisely request information or confirmation. Unlike full questions, "short questions" tend to use a more simplified structure and may omit certain grammatical elements.')
  questionConcept.appendChild(txtQuestion)
  mainContent.appendChild(questionConcept)

  const paragrafhDos = document.createElement('h3')
  paragrafhDos.innerHTML = '<br>The ShortQuestions Formula:'
  mainContent.appendChild(paragrafhDos)

  const paragrafhTres = document.createElement('p')
  const txtTres = document.createTextNode('Verb + subject + inversion')
  paragrafhTres.appendChild(txtTres)
  mainContent.appendChild(paragrafhTres)
  
  const loco = document.createElement('p')
  const txtLoco =  document.createTextNode('In other words, the typical order of affirmative sentence structure (subject + verb) is reversed to formulate the question. Here are some examples to illustrate the formula: ')
  loco.appendChild(txtLoco)
  mainContent.appendChild(loco)

  const parrafoDieNueve = document.createElement('h4')
  parrafoDieNueve.className = 'align-baseline'
  parrafoDieNueve.innerHTML = '<br>  Examples '
  parrafoDieNueve.style.marginRight = '10px'
  parrafoDieNueve.style.marginLeft = '30px'
  parrafoDieNueve.style.marginTop = '5px'
  parrafoDieNueve.style.whiteSpace = 'nowrap'
  mainContent.appendChild(parrafoDieNueve)

  const divContainerOnce = document.createElement('div')
  divContainerOnce.style.display = 'flex'
  divContainerOnce.appendChild(parrafoDieNueve)
  const parrafoDieUno = document.createElement('p')
  parrafoDieUno.innerHTML = '<br>1. You like pizza. (Afirmación) <br>Do you like pizza? (Pregunta corta) <br><br> 2. He is coming. (Afirmación) <br> Is he coming? (Pregunta corta) <br><br> 3. They have finished. (Afirmación) <br> Have they finished? (Pregunta corta) <br><br> 4. We will go to the party. (Afirmación) <br> Will we go to the party? (Pregunta corta) <br><br> 5. She can swim. (Afirmación)Can she swim? (Pregunta corta) <br> '
  parrafoDieUno.style.marginLeft = '5px'
  parrafoDieUno.style.marginRight = '5px'
  parrafoDieUno.style.marginTop = '60px'
  parrafoDieUno.style.marginBottom = '30px'
  divContainerOnce.appendChild(parrafoDieUno)
  mainContent.appendChild(divContainerOnce)

  const paragrafhIno = document.createElement('p')
  const txtIno = document.createTextNode('"Short questions" or "short interrogative sentences" are short, direct questions used to quickly and concisely request information or confirmation. Unlike full questions, "short questions" tend to use a more simplified structure and may omit certain grammatical elements.')
  paragrafhIno.appendChild(txtIno)
  mainContent.appendChild(paragrafhIno)

  const paragroUno = document.createElement('p')
  paragroUno.innerHTML = '<br>It is important to note that there are some exceptions and variations in the construction of questions depending on the type of verb or the specific grammatical structure. However, in general, the formula mentioned above is applicable for most of the "short questions" in English. <br> <br> These short questions are very common in everyday conversation and are used to get quick answers or confirm information. Its simple structure allows efficient and direct communication.'
  mainContent.appendChild(paragroUno)

  const parrafoDie = document.createElement('h4')
  parrafoDie.className = 'align-baseline'
  parrafoDie.innerHTML = '<br> Inversion of the verb and the subject:  '
  parrafoDie.style.marginRight = '10px'
  parrafoDie.style.marginTop = '5px'
  parrafoDie.style.whiteSpace = 'nowrap'
  mainContent.appendChild(parrafoDie)

  const respuest = document.createElement('p')
  respuest.innerHTML = '<br>The main characteristic of "short questions" is the inversion of the typical subject-verb order in an affirmative sentence. When formulating a short question, the verb is placed before the subject. For example: "You like pizza" (affirmation) becomes "Do you like pizza?" (short question).'
  mainContent.appendChild(respuest)

  const xd = document.createElement('h4')
  xd.className = 'align-baseline'
  xd.innerHTML = '<br> Auxiliary verbs: '
  xd.style.marginRight = '1opx'
  xd.style.marginTop = '5x'
  xd.style.whiteSpace = 'nowrap'
  mainContent.appendChild(xd)

  const respuestUno = document.createElement('p')
  respuestUno.innerHTML = '<br>In many cases, an auxiliary verb is used in the short question. The most common auxiliary verbs are "do", "be" and "have". The auxiliary verb is placed at the beginning of the question followed by the subject and then the main verb in base form (without conjugation). For example: "He is coming" (affirmation) becomes "Is he coming?" (short question).'
  mainContent.appendChild(respuestUno)

  const xdUno = document.createElement('h4')
  xdUno.className = 'align-baseline'
  xdUno.innerHTML = '<br> Modal verbs: '
  xdUno.style.marginRight = '1opx'
  xdUno.style.marginTop = '5x'
  xdUno.style.whiteSpace = 'nowrap'
  mainContent.appendChild(xdUno)

  const respuestDos = document.createElement('p')
  respuestDos.innerHTML = '<br>Modal verbs, such as "can", "will", "should", among others, are also used in the formation of "short questions". They follow the same basic structure of inversion of the verb and the subject. For example: "She can swim" (affirmation) becomes "Can she swim?" (short question).'
  mainContent.appendChild(respuestDos)

  const xdDos = document.createElement('h4')
  xdDos.className = 'align-baseline'
  xdDos.innerHTML = '<br> Questions with "wh-words": '
  xdDos.style.marginRight = '1opx'
  xdDos.style.marginTop = '5x'
  xdDos.style.whiteSpace = 'nowrap'
  mainContent.appendChild(xdDos)

  const respuestTres = document.createElement('p')
  respuestTres.innerHTML = '<br> Questions using question words such as "what," "where," "when," "who," "why," and "how" follow a similar structure. The question word is placed at the beginning of the question followed by the auxiliary verb and then the subject. For example: "You went to the party" (statement) becomes "Where did you go to the party?" (short question).'
  mainContent.appendChild(respuestTres)

  const xdTres = document.createElement('h4')
  xdTres.className = 'align-baseline'
  xdTres.innerHTML = '<br> Answers to the "short questions" : '
  xdTres.style.marginRight = '1opx'
  xdTres.style.marginTop = '5x'
  xdTres.style.whiteSpace = 'nowrap'
  mainContent.appendChild(xdTres)

  const respuestFor = document.createElement('p')
  respuestFor.innerHTML = '<br>The answers to the short questions can be "yes" or "no", or they can include additional information. The answer should be concise and direct. For example: "Do you like pizza?" (short question) may receive answers such as "Yes, I do" or "No, I don´t" .<br><br>'
  mainContent.appendChild(respuestFor)

  const xdFor = document.createElement('h4')
  xdFor.className = 'align-baseline'
  xdFor.innerHTML = '<br> Main verbs without auxiliaries : '
  xdFor.style.marginRight = '1opx'
  xdFor.style.marginTop = '5x'
  xdFor.style.whiteSpace = 'nowrap'
  mainContent.appendChild(xdFor)
 
  const respuestFive = document.createElement('p')
  respuestFive.innerHTML = '<br>In some cases, main verbs without auxiliaries can also be reversed to form short questions. In this case, the main verb is placed at the beginning of the question, followed by the subject. For example: "He plays tennis" (statement) becomes "Plays he tennis?" (short question).<br><br>'
  mainContent.appendChild(respuestFive)

  const xdFive = document.createElement('h4')
  xdFive.className = 'align-baseline'
  xdFive.innerHTML = '<br> Negative answers to affirmative questions : '
  xdFive.style.marginRight = '1opx'
  xdFive.style.marginTop = '5x'
  xdFive.style.whiteSpace = 'nowrap'
  mainContent.appendChild(xdFive)

  const respuestSix = document.createElement('p')
  respuestSix.innerHTML = '<br>When a short question is answered in the affirmative, the negative form of the auxiliary or modal verb is used in the answer. For example: "Do you like coffee?" (Do you like coffee?) may receive the response "No, I don´t" (No, I don´t like it).<br><br>'
  mainContent.appendChild(respuestSix)

  const xdSix = document.createElement('h4')
  xdSix.className = 'align-baseline'
  xdSix.innerHTML = '<br> Use of contractions : '
  xdSix.style.marginRight = '1opx'
  xdSix.style.marginTop = '5x'
  xdSix.style.whiteSpace = 'nowrap'
  mainContent.appendChild(xdSix)

  const respuestSeven = document.createElement('p')
  respuestSeven.innerHTML = '<br> In spoken language and in informal contexts, it is common to use contractions in "short questions". For example, "Did you see that?" (Did you see that?) can be abbreviated as "Didja see that?" or "Can you help me?" (Can you help me?) is abbreviated as "Can you help me?". <br><br>'
  mainContent.appendChild(respuestSeven)

  const xdSeven = document.createElement('h4')
  xdSeven.className = 'align-baseline'
  xdSeven.innerHTML = '<br> Intonation: '
  xdSeven.style.marginRight = '1opx'
  xdSeven.style.marginTop = '5x'
  xdSeven.style.whiteSpace = 'nowrap'
  mainContent.appendChild(xdSeven)

  const respuestCho = document.createElement('p')
  respuestCho.innerHTML = '<br> Intonation plays an important role in the communication of short questions. Often a rising intonation is used at the end of the question to indicate that it is a question and not a statement. For example: "Are you coming?" (Are you going to come?) is pronounced with a rising tone on the last word. <br><br>'
  mainContent.appendChild(respuestCho)

  const xdCho = document.createElement('h4')
  xdCho.className = 'align-baseline'
  xdCho.innerHTML = '<br> Multiple Choice Questions: '
  xdCho.style.marginRight = '1opx'
  xdCho.style.marginTop = '5x'
  xdCho.style.whiteSpace = 'nowrap'
  mainContent.appendChild(xdCho)

  const respuestNueve = document.createElement('p')
  respuestNueve.innerHTML = '<br> The "short questions" are also used to formulate multiple choice questions. In this case, "or" is used to offer options. For example: "Do you want tea or coffee?" (Do you want tea or coffee?). <br><br>'
  mainContent.appendChild(respuestNueve)

  const paragroUnoP = document.createElement('h6')
  paragroUnoP.innerHTML = '<br> Note: Remember that the construction of the "short questions" can vary according to the context and the specific grammatical structure. It is important to practice and become familiar with different examples to develop a solid understanding of how to formulate and get quick answers or confirm information.'
  mainContent.appendChild(paragroUnoP)



  

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
