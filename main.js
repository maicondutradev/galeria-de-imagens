let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');

let btn = document.querySelector('button');
let overlay = document.querySelector('.overlay');

/* Declarando a matriz de nomes de arquivos de imagem */
let images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']

/* Declarando o texto alternativo para cada arquivo de imagem */
let alts  = {
'pic1.jpg' : 'Closeup of a human eye',
'pic2.jpg' : 'Rock that looks like a wave',
'pic3.jpg' : 'Purple and white pansies',
'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
'pic5.jpg' : 'Large moth on a leaf'}

/* Percorrendo as imagens */
for (let image of images){
    let newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
  });
}

/* Conectando o botão Escurecer/Clarear */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });