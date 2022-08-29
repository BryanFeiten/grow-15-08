import { Request, Response } from 'express';
import { UserService } from '../services';

export default class UserController {
    index = async (request: Request, response: Response) => {
        const service = new UserService();
        return response.json(await service.find());
    }

    show = async (request: Request, response: Response) => {
        const { id } = request.params;
        const service = new UserService();

        return response.json(await service.findOne(Number(id)));
    }

    store = async (request: Request, response: Response) => {
        const { name, email, password } = request.body;
        const service = new UserService();
        const user = await service.create(name, email, password);

        return response.status(201).json(user);
    }

    update = async (request: Request, response: Response) => {
        const { name, email, password } = request.body;
        const { id } = request.params;
        const service = new UserService();
        const user = await service.update(Number(id), name, email, password);

        return response.json(user);
    }

    delete = async (request: Request, response: Response) => {
        const { id } = request.params;
        const service = new UserService();
        await service.delete(Number(id));

        return response.sendStatus(204);
    }
}