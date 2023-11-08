//varivel perguntas

const perguntaNome = "Nome completo:"
const perguntaData = "Data de nascimento (ultilize as /):"
const perguntaEndereco = "Endereço:"
const perguntaCPF = "CPF:"
const perguntaEscolaridade = "Escolaridade:"
const perguntaCNH = "Possui CNH?"
const perguntaFilhos = "Quantos filhos possui?"
const perguntaCargo = "Cargo atual?"
const perguntaSalario = "Salario:"
const perguntaComissao = "Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel"
const perguntaAdmissao = "informe o ano de admissão:"

//prompt respostas
const respostaNome = prompt (perguntaNome)
const respostaData = prompt (perguntaData)
const respostaEndereco = prompt (perguntaEndereco)
const respostaCPF = prompt (perguntaCPF)
const respostaEscolaridade = prompt (perguntaEscolaridade)
const respostaCNH = prompt (perguntaCNH)
const respostaFilhos=Number (prompt (perguntaFilhos))
const respostaCargo = prompt (perguntaCargo)
const respostaSalario =Number (prompt (perguntaSalario))
const respostaComissao = confirm (perguntaComissao)
const respostaAdmissao =Number (prompt(perguntaAdmissao))

console.log ("tipo de todas as variáveis--->", " | Nome:",typeof respostaNome," | Data de nascimento:", typeof respostaData, " | Endereço:",typeof respostaEndereco, " | CPF:", typeof respostaCPF, " | Escolaridade:", typeof respostaEscolaridade, " | CNH:", typeof respostaCNH, " | Filhos:", typeof respostaFilhos," | Cargo:", typeof respostaCargo, " | Salario:", typeof respostaSalario, " | Comissão:", typeof respostaComissao, " | Admissão:", typeof respostaAdmissao)


console.log ("relatório da pessoa colaboradora:")
console.log ("Nome:", respostaNome)
console.log ("Data de nascimento:", respostaData)
console.log ("Endereço:", respostaEndereco)
console.log ("CPF:", respostaCPF)
console.log ("Escolaridade:", respostaEscolaridade)
console.log ("CNH:", respostaCNH)
console.log ("Filhos:", respostaFilhos)
console.log ("Cargo:", respostaCargo)
console.log ("Salário:", respostaSalario)
console.log ("Comissão:", respostaComissao)
console.log ("Admissão:", respostaAdmissao)

//fim