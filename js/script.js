document.addEventListener("DOMContentLoaded", () => {

    console.log("Netflix Clone: JavaScript carregado!");

    /* =========================
       DADOS DOS FILMES
    ========================= */

    const filmes = [

        // =====================
        // POPULARES
        // =====================

        {
            id: 1,
            titulo: "Interestelar",
            tituloOriginal: "Interstellar",
            genero: "Ficção científica",
            categoria: "popular",
            ano: 2014,
            imagem:
                "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            descricao:
                "Uma equipe de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade."
        },

        {
            id: 2,
            titulo: "A Origem",
            tituloOriginal: "Inception",
            genero: "Ficção científica",
            categoria: "popular",
            ano: 2010,
            imagem:
                "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            descricao:
                "Um especialista em invadir sonhos recebe uma missão aparentemente impossível: implantar uma ideia na mente de alguém."
        },

        {
            id: 3,
            titulo: "O Cavaleiro das Trevas",
            tituloOriginal: "The Dark Knight",
            genero: "Ação",
            categoria: "popular",
            ano: 2008,
            imagem:
                "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            descricao:
                "Batman enfrenta uma ameaça que mergulha Gotham em uma onda de caos e coloca seus limites à prova."
        },

        {
            id: 4,
            titulo: "Vingadores: Ultimato",
            tituloOriginal: "Avengers: Endgame",
            genero: "Ação",
            categoria: "popular",
            ano: 2019,
            imagem:
                "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
            descricao:
                "Os Vingadores restantes precisam encontrar uma maneira de reverter os acontecimentos que mudaram o universo."
        },

        {
            id: 5,
            titulo: "Avatar",
            tituloOriginal: "Avatar",
            genero: "Ficção científica",
            categoria: "popular",
            ano: 2009,
            imagem:
                "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
            descricao:
                "Um ex-fuzileiro entra em contato com o povo de Pandora e começa a questionar sua própria missão."
        },

        {
            id: 6,
            titulo: "Oppenheimer",
            tituloOriginal: "Oppenheimer",
            genero: "Suspense",
            categoria: "popular",
            ano: 2023,
            imagem:
                "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            descricao:
                "A trajetória do cientista responsável pelo desenvolvimento da primeira bomba atômica."
        },


        // =====================
        // AÇÃO
        // =====================

        {
            id: 7,
            titulo: "John Wick",
            tituloOriginal: "John Wick",
            genero: "Ação",
            categoria: "acao",
            ano: 2014,
            imagem:
                "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
            descricao:
                "Um lendário assassino retorna à ação depois que acontecimentos pessoais o obrigam a enfrentar seu passado."
        },

        {
            id: 8,
            titulo: "John Wick 4",
            tituloOriginal: "John Wick: Chapter 4",
            genero: "Ação",
            categoria: "acao",
            ano: 2023,
            imagem:
                "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
            descricao:
                "John Wick descobre um caminho para derrotar a organização que controla o submundo dos assassinos."
        },

        {
            id: 9,
            titulo: "Matrix",
            tituloOriginal: "The Matrix",
            genero: "Ação",
            categoria: "acao",
            ano: 1999,
            imagem:
                "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            descricao:
                "Um hacker descobre que a realidade em que vive pode ser uma gigantesca simulação controlada por máquinas."
        },

        {
            id: 10,
            titulo: "Guardiões da Galáxia Vol. 3",
            tituloOriginal: "Guardians of the Galaxy Vol. 3",
            genero: "Ação",
            categoria: "acao",
            ano: 2023,
            imagem:
                "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
            descricao:
                "Os Guardiões precisam se unir novamente para proteger um de seus integrantes e enfrentar uma nova ameaça."
        },


        // =====================
        // FICÇÃO CIENTÍFICA
        // =====================

        {
            id: 11,
            titulo: "Duna: Parte Dois",
            tituloOriginal: "Dune: Part Two",
            genero: "Ficção científica",
            categoria: "ficcao",
            ano: 2024,
            imagem:
                "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
            descricao:
                "Paul Atreides se une aos Fremen enquanto busca vingança contra aqueles que destruíram sua família."
        },

        {
            id: 12,
            titulo: "O Exterminador do Futuro",
            tituloOriginal: "The Terminator",
            genero: "Ficção científica",
            categoria: "ficcao",
            ano: 1984,
            imagem:
                "https://image.tmdb.org/t/p/w500/vvevzdYIrk2636maNW4qeWmlPFG.jpg",
            descricao:
                "Um soldado volta no tempo para proteger uma mulher que será fundamental para o futuro da humanidade."
        },

        {
            id: 13,
            titulo: "Guardiões da Galáxia",
            tituloOriginal: "Guardians of the Galaxy",
            genero: "Ficção científica",
            categoria: "ficcao",
            ano: 2014,
            imagem:
                "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
            descricao:
                "Um grupo improvável de heróis precisa se unir para proteger a galáxia de uma ameaça poderosa."
        },


        // =====================
        // SUSPENSE
        // =====================

        {
            id: 14,
            titulo: "Cisne Negro",
            tituloOriginal: "Black Swan",
            genero: "Suspense",
            categoria: "suspense",
            ano: 2010,
            imagem:
                "https://image.tmdb.org/t/p/w500/z68py0ZqPgeacGPG54AGVRbNBS7.jpg",
            descricao:
                "Uma bailarina mergulha em uma busca obsessiva pela perfeição e começa a perder a noção da realidade."
        },

        {
            id: 15,
            titulo: "Ilha do Medo",
            tituloOriginal: "Shutter Island",
            genero: "Suspense",
            categoria: "suspense",
            ano: 2010,
            imagem:
                "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
            descricao:
                "Um investigador chega a uma ilha isolada para investigar o desaparecimento de uma paciente."
        },

        {
            id: 16,
            titulo: "Seven: Os Sete Crimes Capitais",
            tituloOriginal: "Se7en",
            genero: "Suspense",
            categoria: "suspense",
            ano: 1995,
            imagem:
                "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
            descricao:
                "Dois investigadores seguem as pistas deixadas por um assassino que utiliza os sete pecados capitais."
        }

    ];


    /* =========================
       ELEMENTOS
    ========================= */

    const popularMovies =
        document.getElementById("popular-movies");

    const actionMovies =
        document.getElementById("action-movies");

    const fictionMovies =
        document.getElementById("fiction-movies");

    const thrillerMovies =
        document.getElementById("thriller-movies");

    const searchResults =
        document.getElementById("search-results");

    const searchResultsSection =
        document.getElementById("search-results-section");

    const searchInput =
        document.getElementById("search-input");

    const searchButton =
        document.getElementById("search-button");

    const searchBox =
        document.getElementById("search-box");


    /* =========================
       HERO
    ========================= */

    const hero =
        document.getElementById("hero");

    const heroTitle =
        document.getElementById("hero-title");

    const heroCategory =
        document.getElementById("hero-category");

    const heroDescription =
        document.getElementById("hero-description");


    /* =========================
       CRIAR CARD
    ========================= */

    function criarFilme(filme) {

        const card =
            document.createElement("article");

        card.className = "movie-card";

        card.dataset.id = filme.id;


        const imgWrapper =
            document.createElement("div");

        imgWrapper.className =
            "movie-image";


        const img =
            document.createElement("img");

        img.src = filme.imagem;

        img.alt = filme.titulo;

        img.loading = "lazy";


        /*
         * Se alguma imagem falhar,
         * não interfere na pesquisa
         * nem no restante do catálogo.
         */

        img.onerror = () => {

            console.warn(
                "Imagem não carregada:",
                filme.titulo
            );

            img.onerror = null;

            img.src =
                "https://placehold.co/300x450/222/fff?text=" +
                encodeURIComponent(
                    filme.titulo
                );

        };


        const title =
            document.createElement("div");

        title.className =
            "movie-title";

        title.textContent =
            filme.titulo;


        imgWrapper.appendChild(img);

        imgWrapper.appendChild(title);

        card.appendChild(imgWrapper);


        /* =====================
           CLIQUE NO FILME
        ===================== */

        card.addEventListener(
            "click",
            () => {

                abrirHero(filme);

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );


        return card;
    }


    /* =========================
       CARREGAR FILMES
    ========================= */

    function carregarFilmes(
        container,
        lista
    ) {

        if (!container) {

            console.error(
                "Container não encontrado."
            );

            return;
        }


        container.innerHTML = "";


        lista.forEach(filme => {

            const card =
                criarFilme(filme);

            container.appendChild(card);

        });

    }


    /* =========================
       CARREGAR CATEGORIAS
    ========================= */

    function carregarCatalogo() {

        const populares =
            filmes.filter(
                filme =>
                    filme.categoria === "popular"
            );


        const acao =
            filmes.filter(
                filme =>
                    filme.categoria === "acao"
            );


        const ficcao =
            filmes.filter(
                filme =>
                    filme.categoria === "ficcao"
            );


        const suspense =
            filmes.filter(
                filme =>
                    filme.categoria === "suspense"
            );


        carregarFilmes(
            popularMovies,
            populares
        );


        carregarFilmes(
            actionMovies,
            acao
        );


        carregarFilmes(
            fictionMovies,
            ficcao
        );


        carregarFilmes(
            thrillerMovies,
            suspense
        );

    }


    /* =========================
       HERO
    ========================= */

    function abrirHero(filme) {

        heroTitle.textContent =
            filme.titulo;


        heroCategory.textContent =
            `FILME • ${filme.genero.toUpperCase()} • ${filme.ano}`;


        heroDescription.textContent =
            filme.descricao;


        hero.style.backgroundImage =
            `url("${filme.imagem}")`;

    }


    /* =========================
       PESQUISA
    ========================= */

    function pesquisarFilmes() {

        const termo =
            searchInput.value
                .toLowerCase()
                .trim();


        if (!termo) {

            limparPesquisa();

            return;
        }


        const resultados =
            filmes.filter(filme => {

                return (

                    filme.titulo
                        .toLowerCase()
                        .includes(termo)

                    ||

                    filme.tituloOriginal
                        .toLowerCase()
                        .includes(termo)

                    ||

                    filme.genero
                        .toLowerCase()
                        .includes(termo)

                    ||

                    String(filme.ano)
                        .includes(termo)

                );

            });


        mostrarResultados(
            resultados
        );

    }


    /* =========================
       MOSTRAR RESULTADOS
    ========================= */

    function mostrarResultados(
        resultados
    ) {

        searchResults.innerHTML = "";

        searchResultsSection.hidden =
            false;


        if (resultados.length === 0) {

            const mensagem =
                document.createElement(
                    "div"
                );


            mensagem.className =
                "no-results";


            mensagem.textContent =
                "Nenhum filme encontrado.";


            searchResults.appendChild(
                mensagem
            );

            return;
        }


        resultados.forEach(filme => {

            searchResults.appendChild(
                criarFilme(filme)
            );

        });

    }


    /* =========================
       LIMPAR PESQUISA
    ========================= */

    function limparPesquisa() {

        searchInput.value = "";

        searchResults.innerHTML = "";

        searchResultsSection.hidden =
            true;

    }


    /* =========================
       BOTÃO DE PESQUISA
    ========================= */

    searchButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            if (
                !searchBox.classList.contains(
                    "active"
                )
            ) {

                searchBox.classList.add(
                    "active"
                );

                searchInput.focus();

                return;
            }


            if (
                searchInput.value.trim()
            ) {

                pesquisarFilmes();

            } else {

                searchBox.classList.remove(
                    "active"
                );

            }

        }
    );


    /* =========================
       ENTER / ESC
    ========================= */

    searchInput.addEventListener(
        "keyup",
        event => {

            if (event.key === "Enter") {

                pesquisarFilmes();

            }


            if (event.key === "Escape") {

                searchBox.classList.remove(
                    "active"
                );

                limparPesquisa();

            }

        }
    );


    /* =========================
       CLIQUE FORA
    ========================= */

    document.addEventListener(
        "click",
        event => {

            if (
                !searchBox.contains(
                    event.target
                )
            ) {

                if (
                    searchBox.classList.contains(
                        "active"
                    )
                ) {

                    searchBox.classList.remove(
                        "active"
                    );

                }

            }

        }
    );


    /* =========================
       INICIALIZAÇÃO
    ========================= */

    carregarCatalogo();

    abrirHero(filmes[0]);


    console.log(
        `${filmes.length} filmes carregados.`
    );

});