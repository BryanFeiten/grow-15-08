import express from 'express';
import cors from 'cors';
import UserRouter from './routers/user';
import AuthRouter from './routers/auth';
import DocsRouter from './routers/docs';
import Postgres from './database/connections/Postgres';

export default class Application {
    private readonly app: express.Application;

    constructor() {
        this.app = express();
    }

    get server() {
        return this.app;
    }

    async init() {
        this.config();
        this.routers();
        await this.database();
    }

    start(port: number) {
        this.app.listen(port);
    }

    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    routers() {
        this.app.use(new UserRouter().init());
        this.app.use(new AuthRouter().init());
        this.app.use(new DocsRouter().init());
    }

    async database() {
        await Postgres.getInstance();        
    }
}