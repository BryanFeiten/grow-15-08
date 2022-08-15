import { Connection, createConnection } from 'typeorm';

export default class Postgres {
    private static instance: Connection;

    private constructor() {}

    static async getInstance() {
        if (!Postgres.instance) {
            const postgres = new Postgres();
            Postgres.instance = await postgres.openConnection();
        }

        return Postgres.instance;
    }

    private async openConnection() {
        try {
            return await createConnection();
        } catch (error) {
            throw new Error(`Erro ao conectar...`);
        }
    }
}