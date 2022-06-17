// SELEÇÃO DE BOTÃO E EVENTO CLICK 
const calcular = document.querySelector('#calcular')

calcular.addEventListener('click', imc);


// FUNÇÃO DE CALCULO DE IMC 
function imc() {
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const result = document.querySelector('#result')

    if (nome !== '' && altura !== '' && peso !== ''){

        // CALCULO DO IMC 
        const valueIMC = (peso / (altura * altura)).toFixed(2);

        // CLASSIFICAÇÃO DE PESO, NÃO É CONSTANTE POIS MUDA DENTRO DO CÓDIGO
        let classificacao = "";

        if (valueIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valueIMC < 25) {
            classificacao = 'com o peso ideal'
        } else if (valueIMC < 30){
            classificacao = 'levemente acima do peso'
        } else if (valueIMC < 34){
            classificacao = 'com obesidade grau 1'
        } else if (valueIMC < 40){
            classificacao = 'com obesidade grau 2'
        } else {
            classificacao = 'com obesidade grau 3.'
        }
        
        result.textContent = `${nome} seu IMC é ${valueIMC}. Você está ${classificacao}`
        
    } else {
        result.textContent = "Preencha todos os campos"
    }
}
    


