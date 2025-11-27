// Pegando os botões de lixeira e elementos da caixa de erro
const trashButtons = document.querySelectorAll(".trash");
const errorBox = document.getElementById("error-box");
const errorText = document.getElementById("error-text");
const errorCloseButton = document.getElementById("error-close");
const backLink = document.querySelector(".link-back-text");

// Função responsável por exibir a caixa de aviso
function showError(message) {
  errorText.textContent = message;
  errorBox.classList.remove("hidden");

  // esconde depois de 3 segundos
  setTimeout(() => {
    errorBox.classList.add("hidden");
  }, 3000);
}

// Clique no X fecha imediatamente
errorCloseButton.addEventListener("click", () => {
  errorBox.classList.add("hidden");
});

// Adicionando evento a cada botão de lixeira
trashButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const li = button.closest(".card"); // card do item
    const checkbox = li.querySelector("input[type='checkbox']");

    // Se estiver marcado, pode remover
    if (checkbox.checked) {
      li.remove();
      showError("O item foi removido da lista");
    } else {
      showError("Marque o item antes de excluir");

      // adiciona o shake no card
      li.classList.add("shake");
      setTimeout(() => li.classList.remove("shake"), 250);

      // adiciona borda vermelha no checkbox
      checkLabel.classList.add("check-error");

      // remove o destaque após 1,5s
      setTimeout(() => {
        checkLabel.classList.remove("check-error");
      }, 1500);
    }
  });
});

// 2. Adicionamos um ouvinte de clique no link
backLink.addEventListener("click", function (event) {
  // 2.1 Impede o comportamento padrão do link (navegar para "#")
  event.preventDefault();

  // 2.2 Se o usuário tiver uma página anterior no histórico,
  // voltamos para ela
  if (window.history.length > 1) {
    window.history.back();
  } else {
    // 2.3 Se não tiver histórico (acessou direto),
    // mandamos para a página inicial "na marra"
    window.location.href = "index.html"; // ajuste o caminho se precisar
  }
});
