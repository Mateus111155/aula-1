function selecionarFoto() {

    alert("Foto selecionada!");

let fotos = [
    "https://picsum.photos/id/10/500/300",
    "https://picsum.photos/id/20/500/300",
    "https://picsum.photos/id/30/500/300"
];

let numero = 0;

let foto = document.getElementById("foto");
let botao = document.getElementById("botao");

botao.addEventListener("click", function() {

    numero++;

    if (numero >= fotos.length) {
        numero = 0;
    }

    foto.src = fotos[numero];

});
