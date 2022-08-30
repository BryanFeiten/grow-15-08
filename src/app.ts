import express from 'express';
import cors from 'cors';
import Postgres from './main/database/connections/Postgres';
import {
    UserRouter,
    AuthRouter,
    DocsRouter,
    SubjectRoute
} from './main/routers';

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
        this.app.listen(port, () => {
            console.log(`API running on port: ${port}`);
        });
    }

    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    routers() {
        this.app.use(new SubjectRoute().init());
        this.app.use(new UserRouter().init());
        this.app.use(new AuthRouter().init());
        this.app.use(new DocsRouter().init());
    }

    async database() {
        await Postgres.getInstance();
    }
}