import { Router } from 'express';
import AuthController from '../../toVerify/controllers/auth.controller';

export class AuthRouter {
    init() {
        const routes = Router();
        const controller = new AuthController();

        routes.post('/login', controller.login);

        return routes;
    }
};