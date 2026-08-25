
  document.addEventListener("DOMContentLoaded", () => {

    console.log("Netflix Clone: JavaScript carregado!");

    /* =========================
       DADOS DOS FILMES
    ========================= */

    const filmes = [

        /* =====================
           POPULARES
        ===================== */

        {
            id: 1,
            titulo: "Interestelar",
            tituloOriginal: "Interstellar",
            genero: "Ficção científica",
            categoria: "popular",
            ano: 2014,
            imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            descricao:
                "A trajetória do cientista responsável pelo desenvolvimento da primeira bomba atômica."
        },

        {
            id: 17,
            titulo: "Gladiador",
            tituloOriginal: "Gladiator",
            genero: "Ação",
            categoria: "popular",
            ano: 2000,
            imagem: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
            descricao:
                "Um general romano é traído e transformado em escravo, iniciando uma jornada de vingança."
        },

        {
            id: 18,
            titulo: "Titanic",
            tituloOriginal: "Titanic",
            genero: "Drama",
            categoria: "popular",
            ano: 1997,
            imagem: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
            descricao:
                "Uma história de amor entre duas pessoas de classes sociais diferentes durante a viagem do Titanic."
        },


        /* =====================
           AÇÃO
        ===================== */

        {
            id: 7,
            titulo: "John Wick",
            tituloOriginal: "John Wick",
            genero: "Ação",
            categoria: "acao",
            ano: 2014,
            imagem: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
            descricao:
                "Os Guardiões precisam se unir novamente para proteger um de seus integrantes e enfrentar uma nova ameaça."
        },

        {
            id: 19,
            titulo: "Vingadores: Guerra Infinita",
            tituloOriginal: "Avengers: Infinity War",
            genero: "Ação",
            categoria: "acao",
            ano: 2018,
            imagem: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDhiRDpZFHSPWJJA.jpg",
            descricao:
                "Os Vingadores e seus aliados enfrentam Thanos em uma batalha pelo destino do universo."
        },

        {
            id: 20,
            titulo: "Homem-Aranha: Sem Volta para Casa",
            tituloOriginal: "Spider-Man: No Way Home",
            genero: "Ação",
            categoria: "acao",
            ano: 2021,
            imagem: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
            descricao:
                "Peter Parker precisa lidar com as consequências de ter sua identidade revelada ao mundo."
        },


        /* =====================
           FICÇÃO CIENTÍFICA
        ===================== */

        {
            id: 11,
            titulo: "Duna: Parte Dois",
            tituloOriginal: "Dune: Part Two",
            genero: "Ficção científica",
            categoria: "ficcao",
            ano: 2024,
            imagem: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/vvevzdYIrk2636maNW4qeWmlPFG.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
            descricao:
                "Um grupo improvável de heróis precisa se unir para proteger a galáxia de uma ameaça poderosa."
        },

        {
            id: 21,
            titulo: "Blade Runner 2049",
            tituloOriginal: "Blade Runner 2049",
            genero: "Ficção científica",
            categoria: "ficcao",
            ano: 2017,
            imagem: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
            descricao:
                "Um jovem blade runner descobre um segredo que pode levar à destruição da sociedade."
        },

        {
            id: 22,
            titulo: "De Volta para o Futuro",
            tituloOriginal: "Back to the Future",
            genero: "Ficção científica",
            categoria: "ficcao",
            ano: 1985,
            imagem: "https://image.tmdb.org/t/p/w500/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",
            descricao:
                "Um adolescente viaja acidentalmente ao passado e precisa garantir que seus pais se apaixonem."
        },


        /* =====================
           SUSPENSE
        ===================== */

        {
            id: 14,
            titulo: "Cisne Negro",
            tituloOriginal: "Black Swan",
            genero: "Suspense",
            categoria: "suspense",
            ano: 2010,
            imagem: "https://image.tmdb.org/t/p/w500/rH19vkjL2H9jJ8H2Y1V6nV0dR5.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
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
            imagem: "https://image.tmdb.org/t/p/w500/g66CLfP5NYKYgOO8H28AnWWfrvU.jpg",
            descricao:
                "Dois investigadores seguem as pistas deixadas por um assassino que utiliza os sete pecados capitais."
        },

        {
            id: 23,
            titulo: "Clube da Luta",
            tituloOriginal: "Fight Club",
            genero: "Suspense",
            categoria: "suspense",
            ano: 1999,
            imagem: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            descricao:
                "Um homem insatisfeito com sua vida conhece um estranho que muda completamente sua maneira de enxergar o mundo."
        },

        {
            id: 24,
            titulo: "O Silêncio dos Inocentes",
            tituloOriginal: "The Silence of the Lambs",
            genero: "Suspense",
            categoria: "suspense",
            ano: 1991,
            imagem: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM7Hby5wTQY9xQ.jpg",
            descricao:
                "Uma jovem agente do FBI procura a ajuda de um perigoso criminoso para capturar outro assassino."
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
       IMAGEM FALLBACK
    ========================= */

    function imagemFallback(titulo) {

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="300"
                 height="450"
                 viewBox="0 0 300 450">

                <rect width="300"
                      height="450"
                      fill="#222"/>

                <text x="150"
                      y="210"
                      text-anchor="middle"
                      fill="#fff"
                      font-size="22"
                      font-family="Arial">
                    ${titulo}
                </text>

                <text x="150"
                      y="250"
                      text-anchor="middle"
                      fill="#aaa"
                      font-size="16"
                      font-family="Arial">
                    Sem imagem
                </text>

            </svg>
        `;

        return "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(svg);
    }


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

        img.decoding = "async";


        /* =====================
           ERRO DA IMAGEM
        ===================== */

        img.addEventListener(
            "error",
            () => {

                console.warn(
                    "Imagem não carregada:",
                    filme.titulo,
                    filme.imagem
                );

                img.src =
                    imagemFallback(
                        filme.titulo
                    );

            },
            {
                once: true
            }
        );


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


        lista.forEach(
            filme => {

                const card =
                    criarFilme(filme);

                container.appendChild(
                    card
                );

            }
        );

    }


    /* =========================
       CARREGAR CATEGORIAS
    ========================= */

    function carregarCatalogo() {

        const populares =
            filmes.filter(
                filme =>
                    filme.categoria ===
                    "popular"
            );


        const acao =
            filmes.filter(
                filme =>
                    filme.categoria ===
                    "acao"
            );


        const ficcao =
            filmes.filter(
                filme =>
                    filme.categoria ===
                    "ficcao"
            );


        const suspense =
            filmes.filter(
                filme =>
                    filme.categoria ===
                    "suspense"
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

        if (!hero) return;


        if (heroTitle) {

            heroTitle.textContent =
                filme.titulo;

        }


        if (heroCategory) {

            heroCategory.textContent =
                `FILME • ${filme.genero.toUpperCase()} • ${filme.ano}`;

        }


        if (heroDescription) {

            heroDescription.textContent =
                filme.descricao;

        }


        hero.style.backgroundImage =
            `linear-gradient(
                to bottom,
                rgba(0,0,0,0.15),
                rgba(0,0,0,0.92)
            ),
            url("${filme.imagem}")`;

    }


    /* =========================
       PESQUISA
    ========================= */

    function pesquisarFilmes() {

        if (!searchInput) return;


        const termo =
            searchInput.value
                .toLowerCase()
                .trim();


        if (!termo) {

            limparPesquisa();

            return;

        }


        const resultados =
            filmes.filter(
                filme => {

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

                }
            );


        mostrarResultados(
            resultados
        );

    }


    /* =========================
       RESULTADOS
    ========================= */

    function mostrarResultados(
        resultados
    ) {

        if (!searchResults ||
            !searchResultsSection) {

            return;

        }


        searchResults.innerHTML =
            "";


        searchResultsSection.hidden =
            false;


        if (
            resultados.length ===
            0
        ) {

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


        resultados.forEach(
            filme => {

                searchResults.appendChild(
                    criarFilme(filme)
                );

            }
        );

    }


    /* =========================
       LIMPAR PESQUISA
    ========================= */

    function limparPesquisa() {

        if (searchInput) {

            searchInput.value = "";

        }


        if (searchResults) {

            searchResults.innerHTML =
                "";

        }


        if (searchResultsSection) {

            searchResultsSection.hidden =
                true;

        }

    }


    /* =========================
       BOTÃO PESQUISA
    ========================= */

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                if (
                    !searchBox
                ) {

                    return;

                }


                if (
                    !searchBox.classList.contains(
                        "active"
                    )
                ) {

                    searchBox.classList.add(
                        "active"
                    );


                    if (searchInput) {

                        searchInput.focus();

                    }


                    return;

                }


                if (
                    searchInput &&
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

    }


    /* =========================
       ENTER / ESC
    ========================= */

    if (searchInput) {

        searchInput.addEventListener(
            "keyup",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    pesquisarFilmes();

                }


                if (
                    event.key ===
                    "Escape"
                ) {

                    if (searchBox) {

                        searchBox.classList.remove(
                            "active"
                        );

                    }


                    limparPesquisa();

                }

            }
        );

    }


    /* =========================
       CLIQUE FORA
    ========================= */

    document.addEventListener(
        "click",
        event => {

            if (
                !searchBox
            ) {

                return;

            }


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

    abrirHero(
        filmes[0]
    );


    console.log(
        `${filmes.length} filmes carregados.`
    );

});         