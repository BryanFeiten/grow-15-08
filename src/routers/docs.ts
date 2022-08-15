import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger-documentation.json';

export default class DocsRouter {
    init() {
        const routes = Router();

        routes.use('/docs', swaggerUi.serve, 
                            swaggerUi.setup(swaggerFile))
        
        return routes;
    }
};