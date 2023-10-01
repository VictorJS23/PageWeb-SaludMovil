function QuestionsAndConversations() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Questions and conversations'
  nav.className = 'text-success'
  
  const h1 = document.createElement('h1');
  const h1_text = document.createTextNode('Unit III- Where are you from?');
  h1.appendChild(h1_text);
  h1.className = 'text-center text-primary';
  mainContent.appendChild(h1);

  const texto = document.createElement("h3")

  const contenido = document.createElement('h3');
  const contenido_text = document.createTextNode('Cities and countries');
  contenido.classList.add('text-justify');
  contenido.appendChild(contenido_text);
  mainContent.appendChild(contenido);

  const countries = [
    'Argentina',
    'Brazil',
    'Canada',
    'China',
    'Colombia',
    'India',
    'Japan',
    'Mexico',
    'South Korea',
    'Turkey',
  ];

  const countryList = document.createElement('ul');
  countryList.className = 'country-list';

  countries.forEach((country) => {
    const listItem = document.createElement('li');
    listItem.textContent = country;
    countryList.appendChild(listItem);
  });

  mainContent.appendChild(countryList);

  const activities = [
    { question: 'Delhi and Mumbai are in _______.', answer: 'India' },
    { question: 'Shanghai is in _______.', answer: 'China' },
    { question: 'Tokyo is in _______.', answer: 'Japan' },
    { question: 'Sao Paulo and Rio are in _______.', answer: 'Brazil' },
    { question: 'Seoul and Daejeon are in _______.', answer: 'South Korea' },
    { question: 'Buenos Aires is in _______.', answer: 'Argentina' },
    { question: 'Vancouver and Ottawa are in _______.', answer: 'Canada' },
    { question: 'Istanbul is in _____.', answer: 'Turkey' },
  ];

  const activityList = document.createElement('ol');
  activityList.className = 'activity-list';

  activities.forEach((activity, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = activity.question;
    activityList.appendChild(listItem);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    listItem.appendChild(inputContainer);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `answer-${index}`;
    inputContainer.appendChild(input);

    const resultText = document.createElement('div');
    resultText.id = `result-${index}`;
    resultText.className = 'result-text';
    inputContainer.appendChild(resultText);

    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        checkAnswer(index, activity.answer);
      }
    });
  });

  mainContent.appendChild(activityList);

  const conversationHeader = document.createElement('h3');
  conversationHeader.textContent = "Complete the conversations with am, 'm, are, 're, is, or 's";
  mainContent.appendChild(conversationHeader);

  const conversation = document.createElement('div');
  conversation.className = 'conversation';

  const conversationText = document.createElement('p');
  conversationText.innerHTML = `1. A:  --- you and your family from South Korea? B: No, we --- not. We --- from China. A: Oh, so you --- from China. B: Yes, I --- . I --- from Shanghai.`;
  conversation.appendChild(conversationText);

  const conversationInputs = [
    { placeholder: 'Enter', answer: 'Are' },
    { placeholder: 'Enter', answer: "are" },
    { placeholder: 'Enter', answer: "are" },
    { placeholder: 'Enter', answer: 'are' },
    { placeholder: 'Enter', answer: 'am' },
    { placeholder: 'Enter', answer: "am" },
  ];

  conversationInputs.forEach((inputData, index) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = inputData.placeholder;
    input.id = `conversation-answer-${index}`;
    input.setAttribute('list', `conversation-options-${index}`);
    input.style.margin = "4px";
    conversation.appendChild(input);

    const dataList = document.createElement('datalist');
    dataList.id = `conversation-options-${index}`;

    ['am', "'m", 'are', "'re", 'is', "'s"].forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      dataList.appendChild(optionElement);
    });

    conversation.appendChild(dataList);

    const resultText = document.createElement('div');
    resultText.id = `conversation-result-${index}`;
    resultText.className = 'result-text';
    conversation.appendChild(resultText);

    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        checkConversationAnswer(index, inputData.answer);
      }
    });
  });

  mainContent.appendChild(conversation);

  const textoo = document.createElement("h3")
  const textotexto = document.createTextNode("2.Conversation...Are you from Seoul?")
  textoo.appendChild(textotexto)
  textoo.style.marginTop = "50px"
  mainContent.appendChild(textoo)


  const lap = document.createElement("h3")
  const laptxt = document.createTextNode("A) Listen and practice")
  lap.className = "text-center"
  lap.appendChild(laptxt)
  texto.style.marginTop = "70px"
  mainContent.appendChild(lap)

  const conversacion = document.createElement("p")
  conversacion.innerHTML = "<b>Tim:</b> Are you from California, Jessica? <br> <b>Jessica:</b> Well, my family is in California now, But we're from south Korea originally. <br> <b>Tim:</b> Oh, my mother is Korean- from Seoul!. Are you from Seoul? <br> <b>Jessica:</b> No, we're not. We're from Daejeon. <br> <b>Tim:</b> So, is your first language Korean? <br> <b>Jessicca:</b> Yes, It is."

  mainContent.appendChild(conversacion)

  const audio = document.createElement("audio");
  audio.src = "./assets/img/Questions and conversations/Multimedia1.mp3";
  audio.controls = true;
  audio.style.border = "2px solid black"
  document.body.appendChild(audio);
  mainContent.appendChild(audio)

  const B = document.createElement("h3")
  const Btxt = document.createTextNode("B) Listening to Jessica and Tim Talk to Tony, Natasha and Monique Check True or false")
  B.appendChild(Btxt)
  B.style.marginTop = "50px"
  B.style.textAlign = 'center'
  mainContent.appendChild(B)

  const testo = document.createElement("p")
  testo.innerHTML = "1. Tony is from italy <br> 2. Natasha is from New York <br> 3. Monique's First language is English"
  mainContent.appendChild(testo)

  const audio2 = document.createElement('audio')
  audio2.src = "./assets/img/Questions and conversations/Multimedia2.mp3"
  audio2.controls = true;
  audio2.style.border = "2px solid black"
  audio2.style.marginRight = "2000px"
  document.body.appendChild(audio2)
  mainContent.appendChild(audio2)

// Aquí van los inputs
const inputauno = document.createElement("input");
inputauno.type = "text";
inputauno.value = "1";

const mensajeuno = document.createElement("div");

inputauno.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    if (inputauno.value.toUpperCase() === "V") {
      mensajeuno.textContent = "¡Incorrecto!";
    } else if (inputauno.value.toUpperCase() === "F") {
      mensajeuno.textContent = "¡Correcto!";
    } else {
      mensajeuno.textContent = "";
    }
  }
});

// Añade el input y el mensajeuno al documento
mainContent.appendChild(inputauno);
mainContent.appendChild(mensajeuno);

// Aquí van los inputs
const inputados = document.createElement("input");
inputados.type = "text";
inputados.value = "2";
inputados.style.marginTop = "6px"

const mensajedos = document.createElement("div");

inputados.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    if (inputados.value.toUpperCase() === "V") {
      mensajedos.textContent = "¡Correcto!";
    } else if (inputados.value.toUpperCase() === "F") {
      mensajedos.textContent = "¡Incorrecto!";
    } else {
      mensajedos.textContent = "";
    }
  }
});

// Añade el input y el mensajedos al documento
mainContent.appendChild(inputados);
mainContent.appendChild(mensajedos);

// Aquí van los inputs
const inputatres = document.createElement("input");
inputatres.type = "text";
inputatres.value = "3";
inputatres.style.marginTop = "6px"

const mensajetres = document.createElement("div");

inputatres.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    if (inputatres.value.toUpperCase() === "V") {
      mensajetres.textContent = "¡Incorrecto!";
    } else if (inputatres.value.toUpperCase() === "F") {
      mensajetres.textContent = "¡Correcto!";
    } else {
      mensajetres.textContent = "";
    }
  }
});

// Añade el input y el mensajetres al documento
mainContent.appendChild(inputatres);
mainContent.appendChild(mensajetres);



  
  



  

  


  
}

function checkAnswer(index, answer) {
  const userInput = document.getElementById(`answer-${index}`).value.toLowerCase();
  const correctAnswer = answer.toLowerCase();
  const resultText = document.getElementById(`result-${index}`);
  if (userInput === correctAnswer) {
    resultText.textContent = 'Correcto';
    resultText.classList.remove('incorrect');
    resultText.classList.add('correct');
  } else {
    resultText.textContent = 'Incorrecto';
    resultText.classList.remove('correct');
    resultText.classList.add('incorrect');
  }
}



function checkConversationAnswer(index, answer) {
  const userInput = document.getElementById(`conversation-answer-${index}`).value.toLowerCase();
  const correctAnswer = answer.toLowerCase();
  const resultText = document.getElementById(`conversation-result-${index}`);
  if (userInput === correctAnswer) {
    resultText.textContent = 'Correcto';
    resultText.classList.remove('incorrect');
    resultText.classList.add('correct');
  } else {
    resultText.textContent = 'Incorrecto';
    resultText.classList.remove('correct');
    resultText.classList.add('incorrect');

    
    
  }
}







function ShortAnswers() {
  const mainContent = document.getElementById('main-content');
  mainContent.textContent = '';

  const h1 = document.createElement('h1');
  h1.textContent = 'Unit III- Where are you from?';
  h1.classList.add('text-center', 'text-primary');
  mainContent.appendChild(h1);

  const h3 = document.createElement('h3');
  h3.textContent = 'Short Answers';
  h3.classList.add('text-center');
  mainContent.appendChild(h3);

  const p = document.createElement('p');
  p.innerHTML = 'Decir ‘Yes, I do. / No, I don’t’ en inglés, es una forma más educada de decir: ‘Yes. / No.’ es por eso que las respuestas cortas (Short answers) son comúnmente usadas. Para formar las respuestas cortas, hay que usar la primera palabra de la pregunta. (Este puede ser un verbo auxiliar o una forma del \'verb to be\'.) Usa la forma larga (he does) en respuestas afirmativas (yes). Usa la forma corta (he doesn’t) en respuestas negativas (no). <br><b> EJEMPLOS:</b>';
  mainContent.appendChild(p);

  const table = document.createElement('table');
  table.classList.add('table-bordered');
  mainContent.appendChild(table);

  const thead = document.createElement('thead');
  table.appendChild(thead);

  const tr1 = document.createElement('tr');
  thead.appendChild(tr1);

  const th1 = document.createElement('th');
  th1.textContent = 'Question';
  tr1.appendChild(th1);

  const th2 = document.createElement('th');
  th2.textContent = 'Affirmative';
  tr1.appendChild(th2);

  const th3 = document.createElement('th');
  th3.textContent = 'Negative';
  tr1.appendChild(th3);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  const data = [
    ['Do we know him?', 'Yes, we do.', 'No, we don’t.'],
    ['Can she see me?', 'Yes, she can.', 'No, she can’t.'],
    ['Have they read the book?', 'Yes, they have.', 'No, they haven’t.'],
    ['Is he hungry?', 'Yes, he is.', 'No, he isn’t.'],
  ];

  data.forEach((row) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    row.forEach((cell) => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
  });

  const a = document.createElement("h4")
  a.innerHTML = "si 'you' es el sujeto de la pregunta, 'you' debe de ser remplazado por 'I' o 'we'."
  a.style.margin = "20px"
  mainContent.appendChild(a)

  const you = document.createElement("p")
  you.innerHTML = "<b>EJEMPLO: </b> <br> <b>Pregunta: </b>Do you know him? <br> <b>Afirmatva: </b>Yes, I/We do. <br> <b>Negativa: </b>No, I/We don't. "
  you.style.marginTop = "10px"
  mainContent.appendChild(you)


  const b = document.createElement("h4")
  b.innerHTML = "Si la pregunta empieza con 'are you', 'are' a veces debe ser remplazado por 'am' "
  b.style.margin = "20px"
  mainContent.appendChild(b)

  const me = document.createElement("p")
  me.innerHTML = "<b>EJEMPLO: </b> <br> <b>Pregunta: </b>Are you hungry? <br> <b>Afirmatva: </b>Yes, I am <br> <b>Negativa: </b>No, I'm not."
  me.style.marginTop = "10px"
  mainContent.appendChild(me)

  const wh = document.createElement("h3")
  const whtext = document.createTextNode("WH Questions")
  wh.className = "text-center"
  wh.appendChild(whtext)
  mainContent.appendChild(wh)

  const whquest = document.createElement('p')
  whquest.innerHTML = "<b>WH Questions</b> Son un grupo de preguntas que se caracterizan porque en su nombre tienen las letras 'WH' al inicio, excepto por uno de sus casos: <b>How</b>. Las <b>WH Questions </b>son: <br> <br><b>What: </b>qué o cuál <br><b>Why: </b>por qué <br><b>When: </b> cuándo <br><b> Where: </b>dónde <br><b>Who: </b>quíen <br><b>Which: </b>cuál <br><b>How: </b>cómo <br> <br>" 
  mainContent.appendChild(whquest)

  const structure = document.createElement("h3")
  const structuretext = document.createTextNode("Estructura de la pregunta")
  structure.style.marginTop = "20px"
  structure.appendChild(structuretext)
  mainContent.appendChild(structure)

  const contentt = document.createElement("p")
  contentt.innerHTML = "Si el verbo principal de la pregunta es <b>to be, </b>la estructura de la pregunta es la siguiente: "
  mainContent.appendChild(contentt)
  
  const whtobeimage = document.createElement("img");
  whtobeimage.src = "./assets/img/Questions and conversations/no se XD.png";
  whtobeimage.alt = "unable to load the image";
  whtobeimage.width = 650
  whtobeimage.height = 400
  whtobeimage.style.marginbottom = "10px"
  mainContent.appendChild(whtobeimage);

  const porejemplo = document.createElement("p")
  porejemplo.innerHTML = "<b>Por ejemplo:</b> <br> <br> <b>Where is your office?</b> <br> ¿Dónde está tu oficina? <br> <b>How are you</b> <br> ¿Cómo estás? <br> <b>When is you birthday?</b> <br>¿Cuándo es tu cumpleaños? <br> <b>Who is your friend?</b> <br>¿Quién es tu amigo? <br> <br> "
  porejemplo.style.marginTop = "20px"
  mainContent.appendChild(porejemplo)

  const verboprincipal = document.createElement("p")
  verboprincipal.innerHTML = "En caso que el verbo principal de la oración sea <b>cualquier otro verbo</b>, debes usar el verbo to do  como auxiliar interrogativo. La estructura debe ser la siguiente:"
  mainContent.appendChild(verboprincipal)

  const imagenverboprincipal = document.createElement("img")
  imagenverboprincipal.src = "./assets/img/Questions and conversations/1601316623590-example-wh-question-where.png"
  imagenverboprincipal.alt = "unable to load the image"
  imagenverboprincipal.widht = 650
  imagenverboprincipal.height = 400
  imagenverboprincipal.style.marginbottom = "10px"
  mainContent.appendChild(imagenverboprincipal)

  const otroejemplo = document.createElement("p")
  otroejemplo.innerHTML = "<b>Por ejemplo:</b> <br> <br> <b>What did you do last weekend?</b> <br> ¿Qué hiciste el fin de semana pasado? <br> <b>How does she dance so well?</b> <br> ¿Cómo baila tan bien? <br> <b>Where do you want to lunch? </b> <br>¿Dónde quieres almorzar? <br> <br> <br>En esta infografía podrás ver cómo usar cada una de las Wh Questions: "
  otroejemplo.style.marginTop = "20px"
  mainContent.appendChild(otroejemplo)

  const whquestimage = document.createElement("img")
  whquestimage.src = "./assets/img/Questions and conversations/repello barato de pared.png"
  whquestimage.alt = "unable to load the image"
  whquestimage.widht = 700
  whquestimage.height = 2850
  whquestimage.style.marginbottom = "10px"
  whquestimage.style.display = 'block'
  whquestimage.style.margin = 'auto'
  
  mainContent.appendChild(whquestimage)


}





function WHQuestions () {
  //Code Here
}
















const btnQuestionsAndConversations = document.getElementById(
  'btnQuestionsAndConversations'
)
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
