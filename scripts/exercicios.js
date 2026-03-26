//////////// exercicio 1 ////////////
//-------------------------- Exemplo 1 -----------------------------//
// function
function exercicio1() {
    alert("digite o nome do produto")
    
    const nome = Number(prompt("digite o nome do produto"))
      alert("o valor da goiaba é 50 reais")
}
// getElement
const batata = document.getElementById("exercicio1")
// addEventlistener
batata.addEventListener('click' , () => { exercicio1() })



//---------------------exercicio 2----------------------------------//
//2. Peça o comprimento e a largura de um terreno. Calcule e mostre a quantidade de metros quadrados.

function exercicio2() {
  
    alert("Digite qual o comprimento e a largura do terreno")
    const comprimento = Number(prompt("Digite o comprimento do terreno"))
    const largura = Number(prompt("Digite a largura do terreno"))
    alert(comprimento * largura)
    
}
// getElement
const batata2 = document.getElementById("exercicio2")
// addEventlistener
batata2.addEventListener('click' , () => { exercicio2() })




//3. Peça o valor total de uma compra e o número de parcelas. Mostre o valor de cada parcela.


function exercicio3() {
  
alert("teste para fazer o exercicio 3")


}
// getElement
const batata3 = document.getElementById("exercicio3")
// addEventlistener
batata3.addEventListener('click' , () => { exercicio3() })
