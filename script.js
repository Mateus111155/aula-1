function selecionarFoto() {

    alert("Foto selecionada!");

}
let foto = document.getElementById("foto");
let botao = document.getElementById("botao");

botao.addEventListener("click", function() {

    foto.src = "https://picsum.photos/401/300";

});
