const key = "d43e1dad84ab663596e9c88d521a6c19"
const btn = document.querySelector('.btn-submit')
const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"


function InjetarNome(dados) {
    document.querySelector('#title-dois').innerHTML = ` Tempo em:   ${dados.name} `


}

function injetarClima(dados) {
    document.querySelector('#paragrafo').innerHTML = `${dados.weather[0].description}`
    document.querySelector('#temp').innerHTML = ` Clima ${Math.floor(dados.main.temp)} °C`
    document.querySelector('#max').innerHTML = ` Máxima ${Math.floor(dados.main.temp_max)} °C`
    document.querySelector('#min').innerHTML = ` Mínima ${Math.floor(dados.main.temp_min)} °C`
    document.querySelector('#umidade').innerHTML = `Umidade: ${dados.main.humidity}% `
    document.querySelector('#imagem').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`



}


async function BuscarCidade(nome) {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nome}&appid=${key}&lang=pt_br&units=metric`)
    const dados = await resposta.json();

    console.log(dados)


    InjetarNome(dados)
    injetarClima(dados)


}


function  Nomedacidade(cidade) {
    const nome = document.querySelector('.input-btn').value

     BuscarCidade(nome)

}

btn.addEventListener('click', Nomedacidade)

