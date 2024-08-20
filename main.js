const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sua cor preferida?",
        alternativas: [
            {
                texto: "Preto",
                afirmacao: "DPS"
            },
            {
                texto: "Azul",
                afirmacao: "Tank"
            },
            {
                texto: "Vermelho",
                afirmacao: "DPS"
            },
            {
                texto: "Roxo",
                afirmacao: "Suporte"
            },
            {
                texto: "Verde",
                afirmacao: "Tank"
            },
            {
                texto: "Rosa",
                afirmacao: "Suporte"
            }
        ]
    },
    {
        enunciado: "Qual seu estilo de música preferido?",
        alternativas: [
            {
                texto: "Rock/Metal",
                afirmacao: "DPS"
            },
            {
                texto: "POP",
                afirmacao: "Suporte"
            },
            {
                texto: "Rap/trap",
                afirmacao: "Tank"
            },
            {
                texto: "MPB",
                afirmacao: "Suporte"
            },
            {
                texto: "Eletrônica",
                afirmacao: "DPS"
            },
            {
                texto: "Sertanejo",
                afirmacao: "Tank"
            },
            {
                texto: "Funk",
                afirmacao: "Tank"
            },
            {
                texto: "Pagode",
                afirmacao: "DPS"
            },
            {
                texto: "K-POP",
                afirmacao: "Suporte"
            }
        ]
    },
    {
        enunciado: "Qual seu membro favorito do BTS?",
        alternativas: [
            {
                texto: "Jimin",
                afirmacao: "Suporte"
            },
            {
                texto: "Jungkook",
                afirmacao: "DPS"
            },
            {
                texto: "RM",
                afirmacao: "Tank"
            },
            {
                texto: "V",
                afirmacao: "DPS"
            },
            {
                texto: "Suga",
                afirmacao: "Tank"
            },
            {
                texto: "Jin",
                afirmacao: "Suporte"
            },
            {
                texto: "J-Hope",
                afirmacao: "Suporte"
            }
        ]
    },
    {
        enunciado: "Dessas modalidades, qual a sua favorita?",
        alternativas: [
            {
                texto: "Vôlei",
                afirmacao: "Suporte"
            },
            {
                texto: "Basquete",
                afirmacao: "DPS"
            },
            {
                texto: "Futebol",
                afirmacao: "Tank"
            }
        ]
    },
    {
        enunciado: "Qual sua matéria preferida?",
        alternativas: [
            {
                texto: "Química",
                afirmacao: "Suporte"
            },
            {
                texto: "Biologia",
                afirmacao: "Suporte"
            },
            {
                texto: "Física",
                afirmacao: "Suporte"
            },           
            {
                texto: "Matemática",
                afirmacao: "Tank"
            },
            {
                texto: "Português",
                afirmacao: "Tank"
            },
            {
                texto: "Filosofia",
                afirmacao: "Tank"
            },
            {
                texto: "Sociologia",
                afirmacao: "DPS"
            },
            {
                texto: "Geografia",
                afirmacao: "DPS"
            },
            {
                texto: "História",
                afirmacao: "DPS"
            },
            {
                texto: "Arte",
                afirmacao: "Suporte"
            }
        ]
    },
];

//Declaração de variáveis
let atual = 0; //variável que mantem o inice da pergunta atual no array 'perguntas'
let perguntaAtual; // variável que armazena a pergunta atual
let historiaFinal = ""; //String que acumula as afirmações selecionadas pelo usuário, formando uma narrativa final.

//Essa função tem como objetivo exibir a pergunta atual ou o resultado final se todas as perguntas tiverem sido respondidas.
function mostraPergunta() {
    if (atual >= perguntas.length) { //Verifica se o índice atual excede o número de perguntas disponíveis. Se sim, chama mostraResultado e retorna, encerrando a função.
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual]; //Atribui à variável perguntaAtual a pergunta atual do array perguntas.
    caixaPerguntas.textContent = perguntaAtual.enunciado; //Define o conteúdo de texto do elemento caixaPerguntas como o enunciado da pergunta atual.
    caixaAlternativas.textContent = ""; //Limpa o conteúdo do elemento caixaAlternativas.
    mostraAlternativas(); //Chama a função mostraAlternativas para exibir as alternativas da pergunta atual.
}

//Essa função tem como cobjetivo exibir as alternativas da pergunta atual como botões e definir a ação ao clicar neles.
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) { // Itera sobre cada alternativa da pergunta atual.
        const botaoAlternativas = document.createElement("button"); //Cria um novo elemento de botão para cada alternativa.
        botaoAlternativas.textContent = alternativa.texto; //Define o texto do botão como o texto da alternativa.
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); //Adiciona um ouvinte de eventos ao botão, que chama a função respostaSelecionada passando a alternativa selecionada quando o botão é clicado.
        caixaAlternativas.appendChild(botaoAlternativas); //Adiciona o botão ao elemento caixaAlternativas.
    }
}

//Essa função tem como objetivo processar a resposta selecionada, atualizar a narrativa final e avançar para a próxima pergunta.
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao; //Obtém a afirmação associada à alternativa selecionada.
    historiaFinal += afirmacoes + " "; //Adiciona a afirmação à historiaFinal.
    atual++; //Incrementa o índice da pergunta atual.
    mostraPergunta(); //Chama a função mostraPergunta para exibir a próxima pergunta.
}

//Essa função tem como objetivo exibir a narrativa final baseada nas respostas do usuário.
function mostraResultado() {
    caixaPerguntas.textContent = "De acordo com suas respostas, esta é a sua role"; //Define o conteúdo de texto do elemento caixaPerguntas para informar o usuário sobre o resultado.
    textoResultado.textContent = historiaFinal; //Define o conteúdo de texto do elemento textoResultado como a narrativa final acumulada.
    caixaAlternativas.textContent = ""; // Limpa o conteúdo do elemento caixaAlternativas.
}

mostraPergunta(); //Chama a função mostraPergunta para iniciar o questionário exibindo a primeira pergunta.
