package com.netflixclone.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Filme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descricao;
    private String imagem;
    private String categoria;
    private Integer ano;
    private Double nota;

    public Filme() {
    }

    public Filme(String titulo, String descricao, String imagem,
                 String categoria, Integer ano, Double nota) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.categoria = categoria;
        this.ano = ano;
        this.nota = nota;
    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public Double getNota() {
 
       return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }
}
