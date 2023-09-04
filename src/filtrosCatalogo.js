const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderMaiorPreco() {
  exibirTodos();
  const produtosMaiorPreco = Array.from(
    catalogoProdutos.getElementsByClassName("maiorPreco")
  );

  for (const produto of produtosMaiorPreco) {
    produto.classList.add("hidden");
  }
}

function esconderMenorPreco() {
  exibirTodos();
  const produtosMenorPreco = Array.from(
    catalogoProdutos.getElementsByClassName("menorPreco")
  );

  for (const produto of produtosMenorPreco) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-maior-preco")
    .addEventListener("click", esconderMenorPreco);
  document
    .getElementById("exibir-menor-preco")
    .addEventListener("click", esconderMaiorPreco);
}
