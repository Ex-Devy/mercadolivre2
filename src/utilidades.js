//AULA 4 37:50

export const catalogo = [
    {
        id: "1",
        nome: 'Notebook Cinza e Branco',
        marca: 'Pichau',
        preco: 1500,
        arquivo: "notebook-1.jpg",
        menorPreco: false
    },
    {
        id: "2",
        nome: 'Notebook Cinza e Preto',
        marca: 'Pichau',
        preco: 1700,
        arquivo: "notebook-2.jpg",
        menorPreco: false
    },
    {
        id: "3",
        nome: 'Note book Cinza',
        marca: 'Pichau',
        preco: 1600,
        arquivo: "notebook-3.jpg",
        menorPreco: false
    },
    {
        id:"4",
        nome: 'Pc 32 giga RAM placa de vídeo RTX de 12 gb',
        marca: 'Pichau',
        preco: 3500,
        arquivo: "pc-1.jpg",
        menorPreco: false
    },
    {
        id:"5",
        nome: 'Pc gamer RTX de 32gb e 64 gb RAM',
        marca: "Pichau",
        preco: 5500,
        arquivo: "pc-2.jpg",
        menorPreco: false
    
    },
    {
        id:"6",
        nome: "Pc Gamer RGB 32 gb RAM RTX 12 gb",
        marca: "Pichau",
        preco: 3400,
        arquivo: "pc-3.jpg",
        menorPreco: false
    },
    {
        id:"7",
        nome: "Teclado Preto RGB",
        marca: "Redragon",
        preco: 250,
        arquivo: "teclado-1.jpg",
        menorPreco: true
    },
    {
        id:"8",
        nome: "Teclado Gamer Branco RGB Mecânico",
        marca: "RapidFire",
        preco: 450,
        arquivo: "teclado-2.jpg",
        menorPreco: false
    
    }, 
    {
        id:"9",
        nome:"Mouse Pokemon Gengar sem fio",
        marca:"Razer",
        preco:200,
        arquivo:"mouse-5.jpg",
        menorPreco: true
    },
    {
        id:"10",
        nome:"Mouse RGB Sem fio",
        marca:"Multilaser",
        preco:245,
        arquivo:"mouse-1.jpg",
        menorPreco: true
    },
    {
        id:"11",
        nome:"Pop it figura do Among us",
        marca:"Figure Toys",
        preco:40,
        arquivo:"pop-4.jpg",
        menorPreco: true
    },
    {
        id:"12",
        nome:"Colares diferentes de one piece",
        marca:"Anime Section",
        preco:25,
        arquivo:"colar-1.jpg",
        menorPreco: true
    },
    {
        id:"13",
        nome:"Mouse RGB Sem fio",
        marca:"Multilaser",
        preco:245,
        arquivo:"mouse-1.jpg",
        menorPreco: true
    },
    {
        id:"14",
        nome:"Esquilo MC Feliz Era do gelo",
        marca:"MC",
        preco:19,
        arquivo:"e-4.jpg",
        menorPreco: true
    },
    {
        id:"15",
        nome:"Indomunus Rex Dinossauro Articulado",
        marca:"Mattel",
        preco:450,
        arquivo:"d-2.jpg",
        menorPreco: false
    },

];    
export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
};

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
};


export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
};









export function desenharProdutoNoCarrinhoSimples(idProduto, IdContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);

    const containerProdutosCarrinho = document.getElementById(IdContainerHtml);
    
    const elementoArticle = document.createElement("article");
    const articleClasses = [
      'flex', 
      'bg-white', 
      'rounded-lg', 
      'p-1', 
      'relative',
      'border-2',
      'border-solid',
      'mb-2',
      "w-96"

    ];


// COLOCANDO CLASSES NO ARTICLE DO CARD DO PRODUTO NO CARRINHO

    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }

    


    const cardProductCar = ` 
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
     <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
    </div>`;

// ADICIONANDO CONTEÚDO AO HTML
  
  elementoArticle.innerHTML = cardProductCar;
  containerProdutosCarrinho.appendChild(elementoArticle);


}