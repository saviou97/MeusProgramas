let button = document.getElementById("button")
let select = document.getElementById("select-moedas")

async function converterMoedas() {
// moeda no tempo certo
    let moedasT = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
        return resposta.json()
    }) 
    let dolar = moedasT.USDBRL.high
    let euro = moedasT.EURBRL.high


    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputReal = document.getElementById("inputReal")

    if (select.value === "US$ Dolar Americano") { 
        let valorDolares = inputValorReais / dolar
        inputMoedas.innerHTML = valorDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    }

    if (select.value === "€ Euro") {
        let valorEuro = inputValorReais / euro
        inputMoedas.innerHTML = valorEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }
    inputReal.innerHTML = inputValorReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

}
// esssa funcao troca a bandeira 
function trocaDeMoedas() {
    let textoMoeda = document.getElementById("textoM")
    let bandeiraM = document.getElementById("bandeiraE")
    
    if (select.value === "US$ Dolar Americano") {
        textoMoeda.innerHTML = "Dolar Americano"
        bandeiraM.src = "./img/EUA.png"
    }
    if (select.value === "€ Euro") {
        textoMoeda.innerHTML = "Euro"
        bandeiraM.src = "./img/Euro.png"

    }
    converterMoedas()
}

// botao q ouve
button.addEventListener("click", converterMoedas)
// q muda
select.addEventListener("change", trocaDeMoedas)

