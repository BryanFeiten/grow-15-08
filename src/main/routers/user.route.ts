import { Router } from 'express';
import UserController from '../../toVerify/controllers/user.controller';
import authMiddleware from '../../toVerify/middlewares/auth';

export class UserRouter {
    init() {
        const routes = Router();
        const controller = new UserController();

        routes.get('/user', 
                   [authMiddleware],
                   controller.index
                   /*
                    #swagger.tags = ['UserList]
                    #swagger.description = 'Listar usuários'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/User' }]
                    }
                    #swagger.responses[400] = {}
                    #swagger.responses[500] = {}
                   */
        );

        routes.get('/user/:id', [authMiddleware],  controller.show);

        routes.post('/user', 
                    [authMiddleware],
                    controller.store
                    /*
                    #swagger.tags = ['User]
                    #swagger.description = 'Cadastrar usuários'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.parameters['name'] = {
                        in: 'body',
                        description: 'Nome do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters['email'] = {
                        in: 'body',
                        description: 'E-mail do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: { $ref: '#/definitions/User' }
                    }
                   */
            );

        routes.put('/user/:id', [authMiddleware], controller.update);
        routes.delete('/user/:id', [authMiddleware], controller.delete);

        return routes;
    }
};