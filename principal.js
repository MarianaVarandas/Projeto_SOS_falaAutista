/* pegar os adados no localStorage*/
let nomeAutista = localStorage.getItem("nomeAutista");
let nomeEmergencia = localStorage.getItem("nomeContato");
let numeroEmergencia = localStorage.getItem("telefoneContato"); 

/*preencher o nome da pessoa*/
document.getElementById("nomeAutista").innerText = nomeAutista; 


let cardTexts = [
  `Sou autista. Preciso que você chame meu contato de emergência e me encaminhe para um lugar silencioso e seguro até que essa pessoa chegue.\n\nLigue para ${nomeEmergencia}:\n${numeroEmergencia}`,
  `Sou autista e estou passando por uma sobrecarga sensorial. Se você puder evitar falar comigo ou me tocar, isso será muito apreciado por mim.`,
  `Sou autista e estou passando por uma sobrecarga sensorial. Você pode, por favor, me encaminhar a um lugar silencioso e seguro pra que eu me regule?`,
  `Não se preocupe, sou autista e estou apenas me regulando.`
];

let expandedIndex = null; /* controle de estado. Começa sem nenhum card selecionado */

function expandCard(index) {
  let container = document.getElementById("cardsContainer");
  let cards = container.querySelectorAll(".card");

  if (expandedIndex === index) {
  cards.forEach(card => {
    card.classList.remove("expanded");
    card.style.display = "block";
    card.innerText = card.dataset.originalText;
  });
  expandedIndex = null;
}else {
    cards.forEach((card, i) => {
      if (!card.dataset.originalText) {
        card.dataset.originalText = card.innerText;
      }

      if (i === index) {
        card.classList.add("expanded");
        card.innerText = cardTexts[i];
        card.style.display = "block";
        responsiveVoice.speak(cardTexts[i], "Brazilian Portuguese Female", {rate: 1});
      } else {
        card.classList.remove("expanded");
        card.style.display = "none";
      }
    });

  expandedIndex = index;
}

}


