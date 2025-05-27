const img = document.getElementById("img");
const buttons = document.getElementById("buttons");

const trafficLight = (event) => {
  turnOn[event.target.id]();
};

const turnOn = {
  red: () => (img.src = "imagens/vermelho.png"),
  yellow: () => (img.src = "imagens/amarelo.png"),
  green: () => (img.src = 'imagens/verde.png')
};

buttons.addEventListener("click", trafficLight);
