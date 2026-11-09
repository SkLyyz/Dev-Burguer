import { Router } from "express";
import UserController from "./app/controllers/UserController.js";

const routes = new Router();

//Metodos HTTP
/*
POST --> CRIAR
PUT/PATCH --> ATUALIZAR
GET --> BUSCAR
DELETE --> DELETAR
*/

routes.post('/users', UserController.store)

export default routes