import { Router } from "express"

import docesRoutes from "./doces.routes.js"

const routes = Router()

routes.use("/doces", docesRoutes)

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor tá bala"});
})



export default routes
