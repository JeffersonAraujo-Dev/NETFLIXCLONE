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
           