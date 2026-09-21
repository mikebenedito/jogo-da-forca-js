
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;


const palavras = [

    {
        nome: "IRLANDA",
        categoria: "PAÍS"
    },

    {
        nome: "EQUADOR",
        categoria: "PAÍS"
    },

    {
        nome: "CHINA",
        categoria: "PAÍS"
    },

    {
        nome: "ARGENTINA",
        categoria: "PAÍS"
    },

    {
        nome: "JAPAO",
        categoria: "PAÍS"
    },

    {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAL"
    },

    {
        nome: "LAGARTIXA",
        categoria: "ANIMAL"
    },

    {
        nome: "CANGURU",
        categoria: "ANIMAL"
    },

    {
        nome: "ELEFANTE",
        categoria: "ANIMAL"
    },

    {
        nome: "TUBARAO",
        categoria: "ANIMAL"
    },

    {
        nome: "BASQUETEBOL",
        categoria: "ESPORTE"
    },

    {
        nome: "CICLISMO",
        categoria: "ESPORTE"
    },

    {
        nome: "BADMINTON",
        categoria: "ESPORTE"
    },

    {
        nome: "SURFE",
        categoria: "ESPORTE"
    },

    {
        nome: "BOXE",
        categoria: "ESPORTE"
    },

    {
        nome: "CERVEJA",
        categoria: "BEBIDA"
    },

    {
        nome: "CAFE",
        categoria: "BEBIDA"
    },

    {
        nome: "SUCO",
        categoria: "BEBIDA"
    },

    {
        nome: "CHOCOLATE QUENTE",
        categoria: "BEBIDA"
    },

    {
        nome: "LIMONADA",
        categoria: "BEBIDA"
    },

    {
        nome: "THE BEATLES",
        categoria: "BANDA"
    },

    {
        nome: "CHARLIE BROWN JR",
        categoria: "BANDA"
    },

    {
        nome: "LINKIN PARK",
        categoria: "BANDA"
    },

    {
        nome: "QUEEN",
        categoria: "BANDA"
    },

    {
        nome: "NIRVANA",
        categoria: "BANDA"
    },

    {
        nome: "NEYMAR",
        categoria: "ATLETA"
    },

    {
        nome: "MESSI",
        categoria: "ATLETA"
    },

    {
        nome: "CRISTIANO RONALDO",
        categoria: "ATLETA"
    },

    {
        nome: "PELE",
        categoria: "ATLETA"
    },

    {
        nome: "RONALDINHO",
        categoria: "ATLETA"
    },

    {
        nome: "SUPERMAN",
        categoria: "HERÓI"
    },

    {
        nome: "BATMAN",
        categoria: "HERÓI"
    },

    {
        nome: "HOMEM ARANHA",
        categoria: "HERÓI"
    },

    {
        nome: "HOMEM DE FERRO",
        categoria: "HERÓI"
    },

    {
        nome: "LULA",
        categoria: "HERÓI"
    },

    {
        nome: "TITANIC",
        categoria: "FILME"
    },

    {
        nome: "SHREK",
        categoria: "FILME"
    },

    {
        nome: "MATRIX",
        categoria: "FILME"
    },

    {
        nome: "AVATAR",
        categoria: "FILME"
    },

    {
        nome: "JURASSIC PARK",
        categoria: "FILME"
    },

    {
        nome: "PIZZA",
        categoria: "COMIDA"
    },

    {
        nome: "HAMBURGUER",
        categoria: "COMIDA"
    },

    {
        nome: "CHURRASCO",
        categoria: "COMIDA"
    },

    {
        nome: "LASANHA",
        categoria: "COMIDA"
    },

    {
        nome: "FEIJOADA",
        categoria: "COMIDA"
    },

    {
        nome: "FUSCA",
        categoria: "CARRO"
    },

    {
        nome: "MUSTANG",
        categoria: "CARRO"
    },

    {
        nome: "KOMBI",
        categoria: "CARRO"
    },

    {
        nome: "FERRARI",
        categoria: "CARRO"
    },

    {
        nome: "UNO",
        categoria: "CARRO"
    },

    {
        nome: "FAZ O L",
        categoria: "FRASE MARCANTE"
    },

    {
        nome: "NETO",
        categoria: "CRAQUE"
    },

    {
        nome: "CONFORTAVEL",
        categoria: "CAMISETA"
    }

];


criarPalavraSecreta();

function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);
        
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    let numeroLetras = palavraSecretaSorteada.length;
    palavraSecretaCategoria = palavras[indexPalavra].categoria + " com " + numeroLetras + " letras";

    // console.log(palavraSecretaSorteada);
    // console.log(palavraSecretaCategoria);
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
        mudarStyleLetra("tecla-" + letra, true)
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


let reiniciarTudo = document.querySelector("#btnOk");
reiniciarTudo.addEventListener("click", function(){
    location.reload();
});
        