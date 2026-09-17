// 1 numero de letras
// 2 resetar o jogo quando ele termina
// 3 mostrar a letra que foi errada
// 4 escrever a palavra interia


let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 ={
        nome: "IRLANDA",
        categoria: "PAIS"
    },
    palavra002 ={
        nome: "EQUADOR",
        categoria: "PAIS"
    },
    palavra003 ={
        nome: "CHINA",
        categoria: "PAIS"
    },
    palavra004 ={
        nome: "HIPOPOTAMO",
        categoria: "ANIMAL"
    },
    palavra005 ={
        nome: "LAGARTIXA",
        categoria: "ANIMAL"
    },
    palavra006 ={
        nome: "CANGURU",
        categoria: "ANIMAL"
    },
    palavra007 ={
        nome: "BASQUETEBOL",
        categoria: "ESPORTE"
    },
    palavra008 ={
        nome: "CICLISMO",
        categoria: "ESPORTE"
    },
    palavra009 ={
        nome: "BADMINTON",
        categoria: "ESPORTE"
    },
    palavra010 ={
        nome: "CERVEJA",
        categoria: "BEBIDA"
    },
    palavra011 ={
        nome: "CONFORTAVEL",
        categoria: "CAMISETA"
    },
    palavra012 ={
        nome: "NETO",
        categoria: "CRAQUE"
    },
    palavra013 ={
        nome: "LULA",
        categoria: "HEROI"
    },
    palavra014 ={
        nome: "THE BEATLES",
        categoria: "BANDA"
    },
    palavra015 ={
        nome: "CHARLIE BROWN JR",
        categoria: "BANDA"
    },
    palavra016 ={
        nome: "LINKIN PARK",
        categoria: "BANDA"
    },
    palavra017 ={
        nome: "FAZ O L",
        categoria: "FRASE MARCANTE"
    }  
];

criarPalavraSecreta();

function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
};

montarPalavraNaTela();

function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
            }
        }
        else{
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        
            }
        }
    }       

};


function verificaLetrasEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        montarPalavraNaTela();
    }
    

};

function mudarStyleLetra(tecla, condicao){
    if(condicao == false){
        document.getElementById(tecla).style.background = "#c71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0){
        tentativas--;
        carregaImagemForca();
        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
}
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i ++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i ++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        abreModal("Parabéns!", "Você venceu!");
        tentativas = 0;
    }
}


function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('../img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('../img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('../img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('../img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('../img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('../img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('../img/forca.png')";
            break;           
        }
}


function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModel").modal({
        show: true
    });
}


let bntReiniciar = document.querySelector("#btnReiniciar");
bntReiniciar.addEventListener("click", function(){
    location.reload();
});

