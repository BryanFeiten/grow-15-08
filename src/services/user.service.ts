import { UserRepository } from '../database/repositories';

export class UserService {
    async find() {
        const repository = new UserRepository();
        const user = await repository.find();

        return user;
    }

    async findOne(userId: number) {
        const repository = new UserRepository();
        const user = await repository.findOne(userId);

        return user;
    }

    async findByEmail(email: string) {
        const repository = new UserRepository();
        const user = await repository.findByEmail(email);

        return user;
    }

    async create(name: string, email: string, password: string) {
        // TODO: validar se e-mail é único
        const repository = new UserRepository();
        const user = await repository.create(name, email, password);

        return user;
    }

    async update(userId: number, name: string, email: string, password: string) {
        // TODO: validar se e-mail é único menos o meu atual
        const repository = new UserRepository();
        const user = await repository.update(userId, name, email, password);

        return user;
    }

    async delete(userId: number) {
        const repository = new UserRepository();
        await repository.delete(userId);
    }
}