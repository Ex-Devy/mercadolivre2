import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};



function abrirCarrinho() {
    document.getElementById("carrinho").classList.add('right-[0px]');
    document.getElementById("carrinho").classList.remove('right-[-360px]');
};

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove('right-[0px]');
    document.getElementById("carrinho").classList.add('right-[-360px]');
    
};


function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  window.location.href = "./checkout.html";
}









export function inicializarCarrinho() {
    const fechar = document.getElementById("close-car");
    const abrir = document.getElementById("open-car");
    const botaoIrParaCheckout = document.getElementById("finalizar-compra")


    fechar.addEventListener('click',fecharCarrinho);
    abrir.addEventListener('click',abrirCarrinho);
    botaoIrParaCheckout.addEventListener("click", irParaCheckout);
    
};






function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

function limparCarrinho(idProduto) {
  for (const idProdutoNoCarrinhoComQuantidade in idsProdutoCarrinhoComQuantidade) {
    delete idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinhoComQuantidade]
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinho();
  }
}






function decrementarQuantidadeProduto(idProduto) {
    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
      removerDoCarrinho(idProduto);
      return;
    }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformaçãoQuantidade(idProduto);
}



function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformaçãoQuantidade(idProduto);
};


function atualizarInformaçãoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
} 


function desenharProdutoNoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);

    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    
    const elementoArticle = document.createElement("article");
    const articleClasses = [
      'flex', 
      'bg-white', 
      'rounded-lg', 
      'p-1', 
      'relative'
    ];


// COLOCANDO CLASSES NO ARTICLE DO CARD DO PRODUTO NO CARRINHO

    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }

    


    const cardProductCar = ` <button id="remover-item-${produto.id}" class=" absolute top-0 right-2">

      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img  
    src="./assets/${produto.arquivo}" 
    alt="Carrinho: ${produto.nome}" 
    class="h-24 rounded-lg "
    >
    <div class="py-2 flex flex-col justify-between">
      <p class="text-slate-900 text-xs">${produto.nome}</p>
      <p class="text-black text-sm">${produto.marca}</p>

      <p class="text-green-700 text-lg">$${produto.preco}</p> 
    </div>
    <div class="flex items-end absolute bottom-0 right-2 text-lg text-slate-950">
     <button id='decrementar-produto-${produto.id}'>-</button>
     <p id="quantidade-${produto.id}" class="ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
     <button id='incrementar-produto-${produto.id}' class="ml-2">+</button>
    </div>`;

// ADICIONANDO CONTEÚDO AO HTML
  
  elementoArticle.innerHTML = cardProductCar;
  containerProdutosCarrinho.appendChild(elementoArticle);


// ADICIONANDO EVENTOS AOS BOTÕES DE ADICIONAR E REMOVER UNIDADES NO CARRINHO
  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener('click',() => decrementarQuantidadeProduto(produto.id))
  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener('click',() => incrementarQuantidadeProduto(produto.id))

  document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removerDoCarrinho(produto.id))
  document
    .getElementById("limpar-carrinho")
    .addEventListener("click", () => limparCarrinho(produto.id))


}

export function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
  

}



export function adicionarAoCarrinho(idProduto) {

      if (idProduto in idsProdutoCarrinhoComQuantidade){
          incrementarQuantidadeProduto(idProduto);
          return;
      }

    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    desenharProdutoNoCarrinho(idProduto);
};


export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    
    precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerHTML = `Total: $${precoTotalCarrinho}`
}

function pegarPrecoTotal() {
  return precoCarrinho;
}