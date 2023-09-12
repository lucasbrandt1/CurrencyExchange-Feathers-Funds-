const select = document.querySelector('.custom-select-options');
const eventTitle = document.querySelector('.text')
const eventImg = document.querySelector('.img')

const select1 = document.querySelector('.custom-select-options1');
const eventTitle1 = document.querySelector('.text1')
const eventImg1 = document.querySelector('.img1')

function carregarOpcoes() {
    fetch('indexus.json')
        .then(response => response.json())
        .then(data => {
            const siglasMoedas = data.siglasMoedas;

            for (let i = 0; i < siglasMoedas.length; ++i) {
                const opcao1 = document.createElement("li");
                opcao1.className = 'custom-select-option'
                const img = document.createElement("img");
                const text = document.createElement("p");
                const teste = siglasMoedas[i].trim()
                const imagem = teste.substring(teste.length-4, teste.length-2)
                img.src = "https://www.countryflagicons.com/FLAT/32/"+imagem+".png"
                img.alt = imagem
                text.textContent = siglasMoedas[i];
                select.appendChild(opcao1);
                opcao1.appendChild(img);
                opcao1.appendChild(text);
                opcao1.addEventListener('click', () => {
                    eventTitle.textContent = text.textContent;
                    eventImg.alt = img.alt
                    eventImg.src = img.src
                    options.style.display = 'none';
                });

            }
            for(let i = 0; i < siglasMoedas.length; ++i) {
                const opcao2 = document.createElement("li");
                opcao2.className = 'custom-select-option1'
                const img1 = document.createElement("img");
                const text1 = document.createElement("p");
                const teste1 = siglasMoedas[i].trim()
                const imagem1 = teste1.substring(teste1.length-4, teste1.length-2)
                img1.src = "https://www.countryflagicons.com/FLAT/32/"+imagem1+".png"
                img1.alt = imagem1
                text1.textContent = siglasMoedas[i];
                select1.appendChild(opcao2);
                opcao2.appendChild(img1);
                opcao2.appendChild(text1);
                opcao2.addEventListener('click', () => {
                    eventTitle1.textContent = text1.textContent;
                    eventImg1.alt = img1.alt
                    eventImg1.src = img1.src
                    options1.style.display = 'none';
                });
            }
        })
}
carregarOpcoes();