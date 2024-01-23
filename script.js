const tela1 = document.querySelector(".tela1")
const tela2 = document.querySelector(".tela2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10) // digitar um número de 0 até 10 para acertar

let tentativas = 1 //vaiavel de controle

//Eventos

btnTry.addEventListener('click', handleTryClick)//adicionando o evento click
btnReset.addEventListener('click', handleResetClick)

//função callback(está chamando a função de volta)
function handleTryClick(event){
    event.preventDefault()// cancela o evento do form, não faz o padrão do evento -> enviar o formulário pra algum lugar

    const inputNumber = document.querySelector("#inputNumber")// esta pegando a classe do input

    if(Number(inputNumber.value) == randomNumber ){ //toda vez que clicar no botão vai pegar o valor digitado
        toggleScreen()//executando a função

        tela2.querySelector("h2").innerText = `Acertou em ${tentativas} tentativas`

    }
    inputNumber.value = ""
    tentativas++ // toda vez que clicar ele vai incrementar(quantidade de tentativa)
}

function handleResetClick(){
    toggleScreen()
    tentativas = 1
}

function toggleScreen(){
    tela1.classList.toggle("hide")//esta adicionando a função hidle se nao tiver, ou removendo se tiver
    tela2.classList.toggle("hide")
}