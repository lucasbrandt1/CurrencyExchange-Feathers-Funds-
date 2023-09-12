//Abrir seletores
const customSelect = document.querySelector('.custom-select');
const toggle = customSelect.querySelector('.custom-select-toggle');
const options = customSelect.querySelector('.custom-select-options');

toggle.addEventListener('click', () => {
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
  if (!customSelect.contains(event.target))
    options.style.display = 'none'
})

const customSelect1 = document.querySelector('.custom-select1');
const toggle1 = customSelect1.querySelector('.custom-select-toggle1');
const options1 = customSelect1.querySelector('.custom-select-options1');

toggle1.addEventListener('click', () => {
  options1.style.display = options1.style.display === 'block' ? 'none' : 'block';
})
document.addEventListener('click', (event1) => {
  if (!customSelect1.contains(event1.target))
    options1.style.display = 'none'
})
//Botao mover
const trade = document.querySelector('.trade');
const txt = document.querySelector('.text')
const txt1 = document.querySelector('.text1')
const imgg = document.querySelector('.img')
const imgg1 = document.querySelector('.img1')
trade.addEventListener('click', () => {
  const save = imgg.src
  imgg.src = imgg1.src
  imgg1.src = save
  const save2 = imgg.alt
  imgg.alt = imgg1.alt
  imgg1.alt = save2
  const save1 = txt.textContent;
  txt.textContent = txt1.textContent;
  txt1.textContent = save1;
});
//Botao de cor
const botaocor = document.querySelector('.menucor');
const imagemcor = document.querySelector('.imagemcor');
const fundo = document.querySelector('body');
botaocor.addEventListener('click', () => {
  if (imagemcor.alt == "sun") {
    imagemcor.src = 'imgs/moon.png'
    imagemcor.alt = "moon"
    fundo.classList.remove('light')
  } else {
    imagemcor.src = 'imgs/sun.png'
    imagemcor.alt = "sun"
    fundo.classList.add('light')
  }
});
//Blockear flechas
document.querySelector('.entrada').addEventListener('keydown', function (e) {
  if (e.which === 38 || e.which === 40) {
    e.preventDefault();
  }
});
//botao do idioma
const menuId = document.querySelector('.menu-conteudo-idioma');
const botaoId = document.querySelector('.menu-botoes');

menuId.style.display = 'none';

botaoId.addEventListener('click', () => {
  if (menuId.style.display === 'block') {
    menuId.style.display = 'none';
  } else {
    menuId.style.display = 'block';
  }
})

document.addEventListener('click', (event2) => {
  if (!botaoId.contains(event2.target))
    menuId.style.display = 'none'
})