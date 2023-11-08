let nome 
let idade

console.log ("nome", nome, typeof nome)
console.log ("idade", idade, typeof idade)
// Foi impresso por conta das variaveis não foram atribuidas valores, por isso declarado com nulo

// segunda parte
nome = prompt ("Qual o seu nome?")
idade=Number(prompt("escreva sua idade"))

console.log ("nome", typeof nome)
console.log ("idade", typeof idade)

console.log ("Olá!",nome,"você tem",idade,"anos!")