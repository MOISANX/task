import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import  Z from 'zod';


export class tasksController{

    public async list(_request: Request, response: Response){

        const tasks = await prisma.task.findMany({

        });

        return response.status(200).json(tasks);
    }

    public async create(request: Request, response: Response){

        const bodyTask = Z.object({

            title: Z.string().min(3),
            description: Z.string().min(3),
        }).strict();

        const {title , description} = bodyTask.parse(request.body);

        const existingTask = await prisma.task.findFirst({

            where:{
                title: title,
            }
        });

        if(existingTask){

            return response.status(400).json({
                error: 'O titulo ja existe'
            });
        }


        const tasks = await prisma.task.create({

            data:{
                title,
                description,
            },
        });

      
        return response.status(200).json(tasks);
    }

    public async delete(request: Request, response: Response){

        const {id} = request.params;
        const taskId = parseInt(id, 10);

        const task = await prisma.task.findUnique({
            where: {id: taskId},
        });

        if(!task) {
            return response.status(400).json({
                error: 'O Id nao existe'
            });
        }
        await prisma.task.delete({
            where: {id: taskId},
        });

        return response.status(204).json();
    }

    public async updateOne(request: Request, response: Response){

        const bodyTask = Z.object({

            title: Z.string().min(3),
            description: Z.string().min(3),
        }).strict();


        const {id} = request.params;
        const taskId = parseInt(id, 10);


        const {title, description} = bodyTask.parse(request.body);

        const taskExist = await prisma.task.findUnique({
            where: {id: taskId},
        })

        if(!taskExist) {
            return response.status(400).json({
                error: 'O Id nao existe'
            });
        }

        if(taskExist){

            return response.status(400).json({
                error: 'O titulo ja existe'
            });
        }

        let data = {}

        if(title) data = {title}
        if(description) data = {...data, description}

        const task = await prisma.task.update({
            where: {id: taskId},
            data,
        })

        return response.status(200).json(task);

    }

    public async updateAll(request: Request, response: Response){

        const {id} = request.params;
        const taskId = parseInt(id, 10);
       

        const taskExist = await prisma.task.findUnique({
            where: {id: taskId},
        });


        if (!taskExist) {
            return response.status(404).json({ message: "Task not found" });
          }

         const task = await prisma.task.update({
            where: {id: taskId},
             data: {
              completedAt: taskExist.completedAt ? null : new Date(),
            },
        });

        return response.status(200).json(task);

    }

}