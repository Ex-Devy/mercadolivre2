import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo () {
    for (const produtoCatalogo of catalogo) {
    const cardProduto =  `<div class='bg-white hover:shadow-xl rounded-lg shadow-slate-900  group ${produtoCatalogo.menorPreco ? 'menorPreco': 'maiorPreco'} justify-between p-2 flex flex-col border-solid border-2 border-black-600 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
        <img 
        src="./assets/${produtoCatalogo.arquivo}" 
        alt="Produto do Meli 2" 
        class='rounded-lg group-hover:scale-110 my-3  duration-300'
        /
        >
        <p class='text-sm'>${produtoCatalogo.marca}</p>
        <p class='text-sm'>${produtoCatalogo.nome}</p>
        <p class='text-sm'>$${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class="rounded-lg hover:bg-slate-700 bg-slate-950 text-slate-200 "><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cardProduto;
    document.getElementById(`adicionar-${produtoCatalogo.id}`)
  }

  for (const produtoCatalogo of catalogo) {
    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))

  }
}
