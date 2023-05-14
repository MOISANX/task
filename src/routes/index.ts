import { Router } from "express";
import { tasksRoutes } from "./tasksRouter";

const routes = Router();

routes.use('/tasks',tasksRoutes)




export{routes};