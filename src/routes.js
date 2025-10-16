import { Router } from "express";

import ProductsController from "./app/controllers/ProductsController";
import CategoriesController from "./app/controllers/CategoriesController";


const routes = new Router()

routes.get('/home', (req, res) => {
    res.send("ola mundo!")
})

routes.post("/products", ProductsController.create);  
routes.get("/products", ProductsController.list);     
routes.put("/products/:id", ProductsController.update); 
routes.delete("/products/:id", ProductsController.delete); 

routes.post("/categories", CategoriesController.create);  
routes.get("/categories", CategoriesController.list);      
routes.put("/categories/:id", CategoriesController.update); 
routes.delete("/categories/:id", CategoriesController.delete); 


export default routes