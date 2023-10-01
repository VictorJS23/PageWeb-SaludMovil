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