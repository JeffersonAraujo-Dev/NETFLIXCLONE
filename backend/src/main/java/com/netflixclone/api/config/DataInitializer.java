package com.netflixclone.api.config;

import com.netflixclone.api.model.Filme;
import com.netflixclone.api.repository.FilmeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner iniciarBanco(FilmeRepository repository) {
        return args -> {

            if (repository.count() > 0) {
                return;
            }

            repository.save(new Filme(
                    "Interestelar",
                    "Uma equipe viaja pelo espaço em busca de um novo lar para a humanidade.",
                    "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                    "Ficcao Cientifica",
                    2014,
                    8.6
            ));

            repository.save(new Filme(
                    "O Batman",
                    "Batman investiga uma serie de crimes que ameaca Gotham City.",
                    "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
                    "Acao",
                    2022,
                    7.7
            ));

            repository.save(new Filme(
                    "Homem-Aranha: Sem Volta Para Casa",
                    "Peter Parker enfrenta as consequencias de sua identidade revelada.",
                    "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
                    "Acao",
                    2021,
                    8.0
            ));

            repository.save(new Filme(
                    "Vingadores: Ultimato",
                    "Os Vingadores tentam desfazer as consequencias do estalo de Thanos.",
                    "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                    "Acao",
                    2019,
                    8.3
            ));

            repository.save(new Filme(
                    "Coringa",
                    "Um homem marginalizado comeca uma transformacao que muda Gotham.",
                    "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                    "Drama",
                    2019,
                    8.2
            ));
        };
    }
}
