const frase = "Chi sei tu che desideri entrare? Chiudi gli occhi. Respira. Dimentica il tuo nome.";
let i = 0;
function scriviFrase() {
  if (i < frase.length) {
    document.getElementById("frase").innerHTML += frase.charAt(i);
    i++;
    setTimeout(scriviFrase, 70);
  }
}
document.addEventListener("DOMContentLoaded", scriviFrase);
function vaiAvanti() {
  window.location.href = "stanza2.html";
}