import { Router } from "express";
import { tasksController } from "../controllers/tasksController";



export const tasksRoutes = Router();
const controller = new tasksController();

tasksRoutes.post('/create',controller.create);
tasksRoutes.get('/list',controller.list);
tasksRoutes.delete('/delete/:id', controller.delete);
tasksRoutes.put('/update/:id', controller.updateOne);
tasksRoutes.patch('/updatecomplete/:id', controller.updateAll);

