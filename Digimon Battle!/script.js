let [ponto_lucemon, ponto_pessoa] = [0, 0];
let resultado_ref = document.getElementById("resultado");
let gifDigimonGood = document.getElementById("gif-digimon-good");
let gifDigimonBad = document.getElementById("gif-digimon-bad");
let escolhas_digimons = {
  'huckmon': {'huckmon': 'empate', 'palmon': 'vence', 'agumon': 'vence', 'gabumon': 'perde', 'gatomon': 'vence'},
  'palmon': {'huckmon': 'perde', 'palmon': 'empate', 'gabumon': 'empate', 'agumon': 'vence', 'gatomon': 'vence'},
  'agumon': {'huckmon': 'perde', 'gabumon': 'vence', 'palmon': 'perde', 'agumon': 'empate', 'gatomon': 'vence'},
  'gabumon': {'huckmon': 'vence', 'palmon': 'empate', 'agumon': 'perde', 'gabumon': 'empate', 'gatomon': 'vence'},
  'gatomon': {'huckmon': 'perde', 'palmon': 'perde', 'agumon': 'perde', 'gabumon': 'perde', 'gatomon': 'perde'},
};
function checker(input) {
  var choices = ["huckmon", "agumon", "palmon", "gabumon", "gatomon"];
  var num = Math.floor(Math.random() * 5);
  document.getElementById("escolha_lucemon").innerHTML =` Lucemon escolheu <span> ${choices[num].toUpperCase()} </span>`;
  document.getElementById("escolha").innerHTML =` Voce escolheu <span> ${input.toUpperCase()} </span>`;
  let escolha_comp = choices[num];
  switch (escolhas_digimons[input][escolha_comp]) {
    case 'vence':
      resultado_ref.style.cssText = "background-color: #cefdce; color: #1b445d";
      resultado_ref.innerHTML = "Seu digimon aprendeu com o Popó como dar uma surra";
      ponto_pessoa++;
      break;
    case 'perde':
      resultado_ref.style.cssText = "background-color: #ffdde0; color: #1b445d";
      resultado_ref.innerHTML = "Seu digimon não aguentou na porradaria sincera";
      ponto_lucemon++;
      break;
    default:
      resultado_ref.style.cssText = "background-color: #dfe223; color: #1b445d";
      resultado_ref.innerHTML = "Empate, seus digimons estão num confronto justo";
      break;
  }
  document.getElementById("ponto_lucemon").innerHTML = ponto_lucemon;
  document.getElementById("ponto_pessoa").innerHTML = ponto_pessoa;
  if (ponto_pessoa === 10) {
    resultado_ref.style.cssText = "background-color: #cefdce; color: #1b445d";
    resultado_ref.innerHTML = "Parabéns! Você venceu! O Digimundo está a salvo ^^";
    gifDigimonGood.style.display = "block";
    setTimeout(function () {
    //alert("Parabéns! Você venceu! O Digimundo está a salvo ^^");
    window.close();
    }, 2000);
  } else if (ponto_lucemon === 10) {
    resultado_ref.style.cssText = "background-color: #ffdde0; color: #1b445d";
    resultado_ref.innerHTML = "Você perdeu! Lucemon destruiu o mundo e o digimundo.";
    gifDigimonBad.style.display = "block";
    setTimeout(function () {
    //alert("Você perdeu! Lucemon destruiu o mundo e o digimundo.");
    window.close();
    }, 2000);
  }
}
