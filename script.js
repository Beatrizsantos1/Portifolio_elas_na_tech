/** Tema Claro ou Escuro */
const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

/** Escrita */
var nome = document.querySelector("h1");
var texto = nome.innerHTML;
var i = 0;

const escreva = () => {
  nome.innerHTML = nome.innerHTML.replace("|", "");

  if (texto.length > i) {
    if (i == 0) {
      nome.innerHTML = texto.charAt(i);
    } else {
      nome.innerHTML += texto.charAt(i);
    }
    nome.innerHTML == "|";
    i++;
    setTimeout(escreva, 50);
  }
};
escreva();
