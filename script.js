const eventoData = new Date("2025-06-28T18:00:00").getTime();
const contadorEl = document.getElementById("contador");
const mensagemEl = document.getElementById("mensagemCaipira");
const frases = [
  "Segura o código, cumpadi! Tá chegando!",
  "Vish, o trem já tá quase pronto!",
  "Ôxe, a festança tá na esquina!",
  "Num demora não, mode ficar bão!"
];

setInterval(() => {
  const agora = new Date().getTime();
  const distancia = eventoData - agora;

  if (distancia <= 0) {
    contadorEl.innerHTML = "O arraiá começou!";
    mensagemEl.innerHTML = "";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  contadorEl.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (Math.random() < 0.1) {
    mensagemEl.innerHTML = frases[Math.floor(Math.random() * frases.length)];
  }
}, 1000);
