import { Router } from "express";
import UsersController from "./app/controllers/UsersController";

const routes = new Router()

routes.get('/home', (req, res) => {
    res.send("ola mundo!")
})

routes.post('/registrar', UsersController.register)


export default routes