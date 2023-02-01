const whereIam = document.querySelector("#elementoOndeVoceEsta");

const father = whereIam.parentNode;
father.style.color = "red";

const firstSonOfASon = whereIam.firstElementChild;
firstSonOfASon.innerText = "Olá MUNDO!";

const firstSon = father.firstChild;

const aa = whereIam.previousElementSibling;
