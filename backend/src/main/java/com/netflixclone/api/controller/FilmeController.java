package com.netflixclone.api.controller;

import com.netflixclone.api.model.Filme;
import com.netflixclone.api.repository.FilmeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/filmes")
@CrossOrigin(origins = "*")
public class FilmeController {

    private final FilmeRepository filmeRepository;

    public FilmeController(FilmeRepository filmeRepository) {
        this.filmeRepository = filmeRepository;
    }

    @GetMapping
    public List<Filme> listarTodos() {
        return filmeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Filme> buscarPorId(@PathVariable Long id) {
        return filmeRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Filme criar(@RequestBody Filme filme) {
        return filmeRepository.save(filme);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Filme> atualizar(
            @PathVariable Long id,
            @RequestBody Filme dados) {

        return filmeRepository.findById(id)
                .map(filme -> {
                    filme.setTitulo(dados.getTitulo());
                    filme.setDescricao(dados.getDescricao());
                    filme.setImagem(dados.getImagem());
                    filme.setCategoria(dados.getCategoria());
                    filme.setAno(dados.getAno());
                    filme.setNota(dados.getNota());

                    return ResponseEntity.ok(filmeRepository.save(filme));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {

        if (!filmeRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        filmeRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
