document.addEventListener("DOMContentLoaded", () => {

    console.log("Netflix Clone iniciado.");

    /* =====================================================
       CONFIGURAÇÃO
    ===================================================== */

    const API_URL = "http://localhost:8080/api/filmes";

    let filmes = [];


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const profileScreen =
        document.getElementById("profile-screen");

    const catalogScreen =
        document.getElementById("catalog-screen");

    const profiles =
        document.querySelectorAll(".profile");

    const profileMenu =
        document.getElementById("profile-menu");


    const searchWrapper =
        document.getElementById("search-wrapper");

    const searchButton =
        document.getElementById("search-button");

    const searchInput =
        document.getElementById("search-input");


    const searchResultsSection =
        document.getElementById("search-results-section");

    const searchResults =
        document.getElementById("search-results");


    const popularMovies =
        document.getElementById("popular-movies");

    const actionMovies =
        document.getElementById("action-movies");

    const fictionMovies =
        document.getElementById("fiction-movies");

    const dramaMovies =
        document.getElementById("drama-movies");


    const hero =
        document.getElementById("hero");

    const heroTitle =
        document.getElementById("hero-title");

    const heroCategory =
        document.getElementById("hero-category");

    const heroDescription =
        document.getElementById("hero-description");


    /* =====================================================
       NORMALIZAR TEXTO
    ===================================================== */

    function normalizar(texto) {

        return String(texto || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }


    /* =====================================================
       TELA DE PERFIS
    ===================================================== */

    profiles.forEach(profile => {

        profile.addEventListener("click", () => {

            const nome =
                profile.dataset.profile || "Visitante";

            console.log(
                "Perfil selecionado:",
                nome
            );


            profileScreen.classList.add("hidden");

            catalogScreen.classList.add("active");


            window.scrollTo({
                top: 0,
                behavior: "instant"
            });


            setTimeout(() => {

                if (hero && filmes.length > 0) {

                    abrirHero(filmes[0]);

                }

            }, 100);

        });

    });


    /* =====================================================
       VOLTAR PARA PERFIS
    ===================================================== */

    if (profileMenu) {

        profileMenu.addEventListener("click", () => {

            catalogScreen.classList.remove("active");

            profileScreen.classList.remove("hidden");

            fecharPesquisa();

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        });

    }


    /* =====================================================
       FALLBACK DE IMAGEM
    ===================================================== */

    function imagemFallback(titulo) {

        const svg = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="450">

                <rect
                    width="300"
                    height="450"
                    fill="#222"/>

                <text
                    x="150"
                    y="210"
                    text-anchor="middle"
                    fill="white"
                    font-size="20"
                    font-family="Arial">

                    ${titulo}

                </text>

                <text
                    x="150"
                    y="245"
                    text-anchor="middle"
                    fill="#aaa"
                    font-size="15"
                    font-family="Arial">

                    Sem imagem

                </text>

            </svg>
        `;


        return (
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(svg)
        );

    }


    /* =====================================================
       CRIAR CARD
    ===================================================== */

    function criarFilme(filme) {

        const card =
            document.createElement("article");

        card.className = "movie-card";

        card.dataset.id =
            filme.id || "";


        const imageWrapper =
            document.createElement("div");

        imageWrapper.className =
            "movie-image";


        const img =
            document.createElement("img");


        img.src =
            filme.imagem || imagemFallback(filme.titulo);

        img.alt =
            filme.titulo || "Filme";


        img.loading = "lazy";

        img.decoding = "async";


        img.addEventListener(
            "error",
            () => {

                console.warn(
                    "Imagem não carregada:",
                    filme.titulo
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
            filme.titulo || "Sem título";


        imageWrapper.appendChild(img);

        imageWrapper.appendChild(title);

        card.appendChild(imageWrapper);


        /* =================================================
           CLIQUE NO FILME
        ================================================= */

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


    /* =====================================================
       CARREGAR FILMES NO CONTAINER
    ===================================================== */

    function carregarFilmes(
        container,
        lista
    ) {

        if (!container) {
            return;
        }


        container.innerHTML = "";


        if (
            !Array.isArray(lista) ||
            lista.length === 0
        ) {

            container.innerHTML = `
                <p style="
                    color:#777;
                    padding:15px 0;
                    font-size:14px;
                ">
                    Nenhum filme encontrado.
                </p>
            `;

            return;
        }


        lista.forEach(filme => {

            container.appendChild(
                criarFilme(filme)
            );

        });

    }


    /* =====================================================
       CATEGORIAS
    ===================================================== */

    function carregarCatalogo() {

        const acao =
            filmes.filter(filme =>
                normalizar(
                    filme.categoria
                ).includes("acao")
            );


        const ficcao =
            filmes.filter(filme =>
                normalizar(
                    filme.categoria
                ).includes("ficcao")
            );


        const drama =
            filmes.filter(filme =>
                normalizar(
                    filme.categoria
                ).includes("drama")
            );


        const populares =
            [...filmes].sort(
                (a, b) =>
                    Number(b.nota || 0) -
                    Number(a.nota || 0)
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
            dramaMovies,
            drama
        );

    }


    /* =====================================================
       HERO
    ===================================================== */

    function abrirHero(filme) {

        if (!filme) {
            return;
        }


        if (heroTitle) {

            heroTitle.textContent =
                filme.titulo || "Sem título";

        }


        if (heroCategory) {

            const categoria =
                filme.categoria || "Filme";

            const ano =
                filme.ano || "";

            const nota =
                filme.nota
                    ? `⭐ ${filme.nota}`
                    : "";


            heroCategory.textContent =
                `${categoria} • ${ano} • ${nota}`;

        }


        if (heroDescription) {

            heroDescription.textContent =
                filme.descricao ||
                "Nenhuma descrição disponível.";

        }


        if (hero) {

            const imagem =
                filme.imagem ||
                imagemFallback(
                    filme.titulo
                );


            hero.style.backgroundImage =
                `
                linear-gradient(
                    to right,
                    rgba(20,20,20,.98),
                    rgba(20,20,20,.75),
                    rgba(20,20,20,.2)
                ),
                linear-gradient(
                    to top,
                    #141414 0%,
                    transparent 45%
                ),
                url("${imagem}")
                `;

        }

    }


    /* =====================================================
       ABRIR PESQUISA
    ===================================================== */

    function abrirPesquisa() {

        if (!searchWrapper) {
            return;
        }


        searchWrapper.classList.add("open");


        setTimeout(() => {

            if (searchInput) {

                searchInput.focus();

            }

        }, 250);

    }


    /* =====================================================
       FECHAR PESQUISA
    ===================================================== */

    function fecharPesquisa() {

        if (!searchWrapper) {
            return;
        }


        searchWrapper.classList.remove("open");


        if (searchInput) {

            searchInput.value = "";

        }


        if (searchResultsSection) {

            searchResultsSection.classList.remove(
                "visible"
            );

        }

    }


    /* =====================================================
       BOTÃO DA LUPA
    ===================================================== */

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                if (
                    searchWrapper &&
                    searchWrapper.classList.contains("open")
                ) {

                    pesquisar();

                } else {

                    abrirPesquisa();

                }

            }
        );

    }


    /* =====================================================
       PESQUISA
    ===================================================== */

    function pesquisar() {

        if (!searchInput) {
            return;
        }


        const termo =
            normalizar(
                searchInput.value
            );


        if (!termo) {

            if (searchResultsSection) {

                searchResultsSection.classList.remove(
                    "visible"
                );

            }

            return;

        }


        const resultados =
            filmes.filter(filme => {

                const titulo =
                    normalizar(
                        filme.titulo
                    );

                const descricao =
                    normalizar(
                        filme.descricao
                    );

                const categoria =
                    normalizar(
                        filme.categoria
                    );


                return (
                    titulo.includes(termo) ||
                    descricao.includes(termo) ||
                    categoria.includes(termo)
                );

            });


        carregarFilmes(
            searchResults,
            resultados
        );


        if (searchResultsSection) {

            searchResultsSection.classList.add(
                "visible"
            );

        }


        setTimeout(() => {

            if (searchResultsSection) {

                searchResultsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }, 50);

    }


    /* =====================================================
       ENTER
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    pesquisar();

                }


                if (event.key === "Escape") {

                    event.preventDefault();

                    fecharPesquisa();

                }

            }
        );

    }


    /* =====================================================
       CLICAR FORA
    ===================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                searchWrapper &&
                searchWrapper.classList.contains("open") &&
                !searchWrapper.contains(event.target)
            ) {

                fecharPesquisa();

            }

        }
    );


    /* =====================================================
       CARREGAR API
    ===================================================== */

    async function carregarFilmesDaAPI() {

        console.log(
            "Consultando API:",
            API_URL
        );


        try {

            const resposta =
                await fetch(API_URL);


            if (!resposta.ok) {

                throw new Error(
                    `HTTP ${resposta.status}`
                );

            }


            const dados =
                await resposta.json();


            if (!Array.isArray(dados)) {

                throw new Error(
                    "A API não retornou uma lista."
                );

            }


            filmes = dados;


            console.log(
                "Filmes carregados:",
                filmes.length
            );


            carregarCatalogo();


            if (
                filmes.length > 0 &&
                hero
            ) {

                abrirHero(
                    filmes[0]
                );

            }

        } catch (erro) {

            console.error(
                "Erro na API:",
                erro
            );


            if (popularMovies) {

                popularMovies.innerHTML = `
                    <p style="
                        color:#aaa;
                        padding:20px 0;
                    ">
                        Não foi possível carregar os filmes.
                        Verifique se o backend está rodando.
                    </p>
                `;

            }

        }

    }


    /* =====================================================
       INICIAR
    ===================================================== */

    carregarFilmesDaAPI();

});
