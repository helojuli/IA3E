const caixapricipal = documnet.querySelector('.caixa-principal');
const caixapergunta = document.querySelector('.caixa-pergunta');
const caixaalternativa = documnet.querySelector('.caixa-alternativa');
const caixaresultado = documnet.querySelector('.caixa-resultado');

const pergunta = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"pergunta 1",
        alternativas:["alternativas 1" , "alternativa 2"]
    } ,
    { 
        enunciado:"pergunta 2",
        alternativas:["alternativas 1" , "alternativa 2"]
    } ,
    {
        enunciado:"pergunta 3",
        alternativas:["alternativas 1" , "alternativa 2"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    
} 