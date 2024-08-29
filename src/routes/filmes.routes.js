const filmesMarcantes = [
    {
        id: 1001,
        titulo: "Meu Malvado Favorito 2",
        genero: "Animação, Ação, Aventura",
        emCartaz: false
    },
    {
        id: 1002,
        titulo: "Deus não está morto",
        genero: "Romance, Drama e Aventura",
        emCartaz: false,
    },

    {
        id: 1003,
        titulo: "Carros 5",
        genero: "Animação",
        emCartaz: true,
    },

]

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})