document.addEventListener('DOMContentLoaded', () => {
  // Fonte de dados: usamos 'seed' para gerar diferentes tamanhos com picsum.
  const filmes = [
    { id: 1, titulo: "O Guardião", genero: "Ação", categoria: "popular", seed: "guardiao" },
    { id: 2, titulo: "Horizonte", genero: "Ficção científica", categoria: "popular", seed: "horizonte" },
    { id: 3, titulo: "A Última Noite", genero: "Suspense", categoria: "popular", seed: "ultimanoite" },
    { id: 4, titulo: "Código Vermelho", genero: "Ação", categoria: "acao", seed: "codigovermelho" },
    { id: 5, titulo: "Além do Tempo", genero: "Ficção científica", categoria: "ficcao", seed: "alemdotempo" },
    { id: 6, titulo: "O Mistério", genero: "Suspense", categoria: "popular", seed: "misterio" },
    { id: 7, titulo: "Operação Final", genero: "Ação", categoria: "acao", seed: "operacaofinal" },
    { id: 8, titulo: "Planeta Zero", genero: "Ficção científica", categoria: "ficcao", seed: "planetazero" }
  ];

  // Gera URLs responsivas para o picsum usando diferentes tamanhos
  function imagemSrcset(seed) {
    const base = `https://picsum.photos/seed/${encodeURIComponent(seed)}`;
    // Formato: "url larguraw, url larguraw, ..."
    return `${base}/300/450 300w, ${base}/400/600 400w, ${base}/600/900 600w`;
  }
  function imagemSrc(seed) {
    return `https://picsum.photos/seed/${encodeURIComponent(seed)}/400/600`;
  }

  function criarFilme(filme) {
    const card = document.createElement("article");
    card.className = "movie-card";

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "movie-image";

    const img = document.createElement("img");
    img.alt = filme.titulo;
    img.src = imagemSrc(filme.seed); // fallback
    img.srcset = imagemSrcset(filme.seed);
    img.sizes = "(max-width: 700px) 40vw, 160px";
    img.loading = "lazy";

    const title = document.createElement("div");
    title.className = "movie-title";
    title.textContent = filme.titulo;

    imgWrapper.appendChild(img);
    imgWrapper.appendChild(title);
    card.appendChild(imgWrapper);

    // Evento de clique (exemplo: abrir modal ou navegar) - placeholder
    card.addEventListener("click", () => {
      // aqui você pode abrir modal com detalhes
      console.log("clicou em", filme.titulo);
    });

    return card;
  }

  function carregarFilmes(id, categoria) {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = ""; // limpar antes de popular

    const filmesFiltrados = filmes.filter(f => f.categoria === categoria);

    filmesFiltrados.forEach(filme => {
      const card = criarFilme(filme);
      container.appendChild(card);
    });
  }

  function resetLists() {
    carregarFilmes("popular-movies", "popular");
    carregarFilmes("action-movies", "acao");
    carregarFilmes("fiction-movies", "ficcao");
  }

  // Inicializa listas
  resetLists();

  // Search elements
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const searchBox = document.getElementById("search-box");

  // Função de pesquisa
  function pesquisarFilmes() {
    const termo = (searchInput.value || "").toLowerCase().trim();

    if (termo === "") {
      resetLists();
      return;
    }

    const resultados = filmes.filter(filme =>
      filme.titulo.toLowerCase().includes(termo) ||
      filme.genero.toLowerCase().includes(termo)
    );

    mostrarResultados(resultados);
  }

  function mostrarResultados(resultados) {
    // limpamos todas as listas
    const containers = ["popular-movies", "action-movies", "fiction-movies"];
    containers.forEach(id => {
      const c = document.getElementById(id);
      if (c) c.innerHTML = "";
    });

    // Para simplicidade mostramos resultados em "popular-movies"
    const container = document.getElementById("popular-movies");
    if (!container) return;

    if (resultados.length === 0) {
      const msg = document.createElement("div");
      msg.style.color = "#aaa";
      msg.textContent = "Nenhum resultado encontrado.";
      container.appendChild(msg);
      return;
    }

    resultados.forEach(filme => {
      const card = criarFilme(filme);
      container.appendChild(card);
    });
  }

  // Clique no botão da lupa: abre/fecha a caixa; se aberta e houver texto, pesquisa
  searchButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!searchBox.classList.contains("active")) {
      searchBox.classList.add("active");
      searchInput.focus();
      return;
    }
    // se já está aberta
    const value = (searchInput.value || "").trim();
    if (value) {
      pesquisarFilmes();
    } else {
      searchBox.classList.remove("active");
      searchInput.value = "";
      resetLists();
    }
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (event) => {
    if (!searchBox.contains(event.target) && searchBox.classList.contains("active")) {
      searchBox.classList.remove("active");
      searchInput.value = "";
      resetLists();
    }
  });

  // Teclas: Enter = pesquisar, Escape = fechar/limpar
  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      pesquisarFilmes();
    } else if (event.key === "Escape") {
      searchBox.classList.remove("active");
      searchInput.value = "";
      resetLists();
    }
  });

  // Se precisar recarregar os lists manualmente em algum momento, exporte resetLists/global etc.
  // (não necessário aqui, apenas comentário)
});
```