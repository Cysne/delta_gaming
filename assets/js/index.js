document.addEventListener("DOMContentLoaded", () => {
  const linkSaibaMais = document.getElementById("linkSaibaMais");
  const linkContato = document.getElementById("linkContato");
  const linkInicio = document.getElementById("linkInicio");

  linkSaibaMais.addEventListener("click", (event) => {
    event.preventDefault(); 
    window.location.href = "saiba_mais.html"; 
  });

  linkContato.addEventListener("click", (event) => {
    event.preventDefault(); 
    window.location.href = "contato.html"; 
  });

  linkInicio.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "index.html"; 
  });
});