import { Router } from "express";

const routes = new Router()

routes.get('/home', (req, res) => {
    res.send("ola mundo!")
})


export default routes