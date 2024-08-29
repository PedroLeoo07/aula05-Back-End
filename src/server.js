import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const guloseimas = [
    {
        id: 1,
        nome: "Trufa",
        preco: 8.5,
},{
    id: 2,
    nome: "Palha italiana",
    preco: 10.00,
},
{
    id: 3,
    nome: "Banoffee",
    preco: 12.5,
}
]

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

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello World!"});
})

app.get("/doces", (req, res) => {
    return res.status(200).send(guloseimas);
})

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes);
})

app.post("/ ", (req, res) => {''
    return res.status(709).send({ message: "Hello World"})
})

app.post("/2tds1", (req, res) => {
    return res.status(709).send({ message: "Hello, 2TDS1 - Só os Devs!"})
})

app.listen(port, () => {
    console.log(`🧨 server started on http://localhost:${port}`)
})