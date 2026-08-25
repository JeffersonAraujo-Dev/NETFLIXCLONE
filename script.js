const filmes = [
    {
        id: 1,
        titulo: "O Guardião",
        genero: "Ação",
        categoria: "popular",
        imagem: "https://picsum.photos/seed/guardiao/300/450"
    },

    {
        id: 2,
        titulo: "Horizonte",
        genero: "Ficção científica",
        categoria: "popular",
        imagem: "https://picsum.photos/seed/horizonte/300/450"
    },

    {
        id: 3,
        titulo: "A Última Noite",
        genero: "Suspense",
        categoria: "popular",
        imagem: "https://picsum.photos/seed/ultimanoite/300/450"
    },

    {
        id: 4,
        titulo: "Código Vermelho",
        genero: "Ação",
        categoria: "acao",
        imagem: "https://picsum.photos/seed/codigovermelho/300/450"
    },

    {
        id: 5,
        titulo: "Além do Tempo",
        genero: "Ficção científica",
        categoria: "ficcao",
        imagem: "https://picsum.photos/seed/alemdotempo/300/450"
    },

    {
        id: 6,
        titulo: "O Mistério",
        genero: "Suspense",
        categoria: "popular",
        imagem: "https://picsum.photos/seed/misterio/300/450"
    },

    {
        id: 7,
        titulo: "Operação Final",
        genero: "Ação",
        categoria: "acao",
        imagem: "https://picsum.photos/seed/operacaofinal/300/450"
    },

    {
        id: 8,
        titulo: "Planeta Zero",
        genero: "Ficção científica",
        categoria: "ficcao",
        imagem: "https://picsum.photos/seed/planetazero/300/450"
    }
];


function criarFilme(filme) {

    const card = document.createElement("article");

    card.classList.add("movie-card");

    card.innerHTML = `
        <div class="movie-image">
            <img
                src="${filme.imagem}"
                alt="${filme.titulo}"
            >

            <div class="movie-title">
                ${filme.titulo}
            </div>
        </div>
    `;

    return card;
}


function carregarFilmes(id, categoria) {

    const container = document.getElementById(id);

    const filmesFiltrados = filmes.filter(
        filme => filme.categoria === categoria
    );

    filmesFiltrados.forEach(filme => {

        const card = criarFilme(filme);

        container.appendChild(card);

    });
}


carregarFilmes("popular-movies", "popular");

carregarFilmes("action-movies", "acao");

carregarFilmes("fiction-movies", "ficcao");

const searchInput =
    document.getElementById("search-input");

const searchButton =
    document.getElementById("search-button");

const searchBox =
    document.getElementById("search-box");

searchButton.addEventListener(
    "click",
    function() {

        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {
            searchInput.focus();
        }
          
    }
  );

document.addEventListener("click", function(event) {

    if (
        !searchBox.contains(event.target)
        &&
        searchBox.classList.contains("active")
    ) {

        searchBox.classList.remove("active");

        searchInput.value = "";

    }

}
                         );

function pesquisarFilmes() {

    const termo =
        searchInput.value
        .toLowerCase()
        .trim();


    if (termo === "") {

        carregarFilmes("popular-movies", "popular");
        carregarFilmes("action-movies", "acao");
        carregarFilmes("fiction-movies", "ficcao");

        return;
    }


    const resultados =
        filmes.filter(filme =>
            filme.titulo
                .toLowerCase()
                .includes(termo)
        );


    mostrarResultados(resultados);
}


function mostrarResultados(resultados) {

    const containers = [
        "popular-movies",
        "action-movies",
        "fiction-movies"
    ];


    containers.forEach(id => {

        const container =
            document.getElementById(id);

        container.innerHTML = "";

    });


    const container =
        document.getElementById("popular-movies");


    resultados.forEach(filme => {

        const card =
            criarFilme(filme);

        container.appendChild(card);

    });
}


searchButton.addEventListener(
    "click",
    pesquisarFilmes
);


searchInput.addEventListener(
    "keyup",
    function(event) {

        if (event.key === "Enter") {

            pesquisarFilmes();

        }

    }
);