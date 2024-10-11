const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
            enunciado: "Você que esta no 3ºano do ensino medio, ja decidiu qual faculdade ira segui?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim,ja estou decidido"}, 

            {texto: "Não",
            afirmação:"Ainda etou em dúvida"}]
    },
    { 
        enunciado: "Vocẽ vai fazer faculdade ou técnico?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, vou fazer um dos dois"}, 
                
            {texto: "Não",
            afirmação:"Não vou fazer apenas cursos"}]
    },
    { 
        enunciado: "Vocẽ acredita que ira fazer sucesso na sua carreira?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, estou confiante"}, 
                
            {texto: "Não",
            afirmação:"Não, estou desacreditado"}]
    },
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
