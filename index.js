let sec = 0;
let min = 0;
let hr = 0;
let intervalo;

function doisNumeros(digito) {
  if (digito < 10) {
    return "0" + digito;
  } else {
    return digito;
  }
}
function iniciar() {
  intervalo = setInterval(tela, 1);
}

function pausar() {
  clearInterval(intervalo);
}

function parar() {
  clearInterval(intervalo);
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById("tela").innerText = `00:00:00`;
}

function aumentarTempo() {
  document.getElementById("tela").innerText = `${doisNumeros(hr)}:${doisNumeros(
    (min += 5)
  )}:${doisNumeros(sec)}`;
}

function tela() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      hr++;
      min = 0;
    }
  }
  document.getElementById("tela").innerText = `${doisNumeros(hr)}:${doisNumeros(
    min
  )}:${doisNumeros(sec)}`;
}
