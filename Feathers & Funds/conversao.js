//Conversao
const entrada = document.querySelector('.entrada');
const saida = document.querySelector('.saida');
const saida1 = document.querySelector('.saida1');
const saida2 = document.querySelector('.saida2');
const saida3 = document.querySelector('.saida3');
const de = document.querySelector('.text');
const para = document.querySelector('.text1');
const botao = document.querySelector('.convers')
botao.addEventListener('click', myFunction);

function myFunction() {
    const moeda1 = de.textContent
    const moeda2 = para.textContent
    const deMoeda = moeda1.substring(moeda1.length-4, moeda1.length-1)
    const paraMoeda = moeda2.substring(moeda2.length-4, moeda2.length-1)
    
    fetch('https://v6.exchangerate-api.com/v6/feecb89b79f8444c59986b10/latest/' + deMoeda)
        .then((resp) => resp.json())
        .then((data) => {
            const taxaConversao = data.conversion_rates[paraMoeda];
            const valorEntrada = parseFloat(entrada.value);
            const resultado = valorEntrada * taxaConversao;
            const lastUP = data.time_last_update_utc;
            const lastUp = lastUP.substring(0, lastUP.length-5)
            const lingua = document.getElementById('lan')
            
              
            if(!(resultado.toString() == "NaN")){
                saida1.innerHTML = `${valorEntrada} ${moeda1} =`;
                saida.innerHTML = `${resultado.toFixed(2)} ${moeda2}`;
                saida2.innerHTML = `1 ${deMoeda} = ${taxaConversao} ${paraMoeda}`;
                if(lingua.lang == "pt-br"){
                    let sem = "";
                    switch(lastUP.substring(lastUP.length-31, lastUP.length-28).toString()){
                        case "Mon": sem = "Seg"; break
                        case "Tue": sem = "Ter"; break
                        case "Wed": sem = "Qua"; break
                        case "Thu": sem = "Qui"; break
                        case "Fri": sem = "Sex"; break
                        case "Sat": sem = "Sab"; break
                        case "Sun": sem = "Dom"; break
                    }
                    let mes = "";
                    console.log(lastUP.substring(lastUP.length-23, lastUP.length-20).toString())
                    switch(lastUP.substring(lastUP.length-23, lastUP.length-20).toString()){
                        case "Feb": mes = "Fev"; break
                        case "Apr": mes = "Abr"; break
                        case "May": mes = "Mai"; break
                        case "Aug": mes = "Ago"; break
                        case "Sep": mes = "Set"; break
                        case "Oct": mes = "Out"; break
                        case "Dec": mes = "Dez"; break
                        default: mes = lastUP.substring(lastUP.length-23, lastUP.length-20).toString(); break
                    }
                    saida3.innerHTML = 'Atualizado em: '+
                    sem+lastUP.substring(lastUP.length-28, lastUP.length-23).toString()+
                    mes+lastUP.substring(lastUP.length-20, lastUP.length-5).toString()
                } else if(lingua.lang == "en"){
                    saida3.innerHTML = 'Updated: '+lastUp.toString()
                }

            }
        })
}