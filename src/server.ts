import Application from './app';
import dotenv from 'dotenv';

const application = new Application();

const port = process.env.PORT ? Number(process.env.PORT) : 8080;

dotenv.config();

application.init().then(() => {
    application.start(port);
}).catch(console.error);

export default application;