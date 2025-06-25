const eventoData = new Date("2025-06-28T18:00:00").getTime();
const contadorEl = document.getElementById("contador");
const mensagemEl = document.getElementById("mensagemCaipira");

// Curiosidades
document.addEventListener('DOMContentLoaded', function() {

  const curiosidades = [
    "As festas juninas no Brasil foram trazidas pelos portugueses, mas ganharam um tempero todo brasileiro com ritmos como o forró!",
    "A fogueira é símbolo da amizade e celebração — cada santo (São João, São Pedro e Santo Antônio) tem seu próprio tamanho de fogueira!",
    "O pau de sebo era originalmente um desafio medieval europeu, adaptado nas festas brasileiras com muita diversão.",
    "Quadrilhas juninas imitam antigos casamentos da roça, com noivo, noiva e juiz — tudo em clima de brincadeira!",
    "A tradição do Correio Elegante nasceu como uma forma tímida e divertida de demonstrar sentimentos durante as festas."
  ];

  const abrirModalBtn = document.getElementById("abrirModal");
  const modal = document.getElementById("modalCuriosidade");
  const fecharModalBtn = document.getElementById("fecharModal");
  const textoCuriosidade = document.getElementById("textoCuriosidade");

  abrirModalBtn.addEventListener("click", function() {
    const aleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    textoCuriosidade.textContent = aleatoria;
    modal.style.display = "block";
  });

  fecharModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});

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

// Validação do formulário e easter egg
const form = document.getElementById("form-voluntario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const prenda = document.getElementById("prenda");
const emojiEaster = document.getElementById("emoji-easter");

prenda.addEventListener("input", () => {
  const texto = prenda.value.toLowerCase();
  const emojis = [];

  if (texto.includes("sanfona")) emojis.push("🎼");
  if (texto.includes("fogueira")) emojis.push("🔥");
  if (texto.includes("tecnologia")) emojis.push("💻");

  if (emojis.length > 0) {
    mostrarEmoji(emojis.join(" "));
  }
});



function mostrarEmoji(emoji) {
  emojiEaster.textContent = emoji;
  emojiEaster.classList.remove("emoji-easter");

  // Força reflow para reiniciar a animação
  void emojiEaster.offsetWidth;

  emojiEaster.classList.add("emoji-easter");

  setTimeout(() => {
    emojiEaster.textContent = "";
  }, 3000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const animacao = form.querySelector('input[name="animacao"]:checked');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');

  if (!nome.value || !email.value || !prenda.value || !animacao || checkboxes.length === 0) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  if (!emailValido) {
    alert("Digite um e-mail válido.");
    return;
  }

  // Oculta o form e exibe a mensagem de sucesso
  form.style.display = "none";

  const msgFinal = document.getElementById("mensagem-final");
  msgFinal.classList.remove("d-none");
  msgFinal.innerHTML = `
    <h4 class="text-success">Anarriê, ${nome.value}! Sua ajuda será arretada! 🎊</h4>
    <p class="mt-3">Aguarde nosso contato por e-mail. 📧</p>
  `;
});



