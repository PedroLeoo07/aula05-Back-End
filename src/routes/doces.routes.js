import { Router } from "express"

const docesRoutes = Router()

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

docesRoutes.get("/", (req, res) => {
    return res.status(200).send(guloseimas)
})

docesRoutes.post("/doces", (req, res) => {
    const {nome,preco} = req.body

    const novoDoce = {
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco,
    }
    guloseimas.push(novoDoce)
    return res.status(201).send(guloseimas)
})

export default docesRoutes