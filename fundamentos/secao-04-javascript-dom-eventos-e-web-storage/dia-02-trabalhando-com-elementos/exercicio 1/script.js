const whereIam = document.querySelector("#elementoOndeVoceEsta");

const father = whereIam.parentNode;
father.style.color = "red";

const firstSonOfASon = whereIam.firstElementChild;
firstSonOfASon.innerText = "Olá MUNDO!";

const firstSon = father.firstChild;

const firstSon1 = whereIam.previousElementSibling;

const atentionText = whereIam.nextSibling;

const thirdSon = whereIam.nextElementSibling;

const thirdSon1 = father.lastElementChild.previousElementSibling;
