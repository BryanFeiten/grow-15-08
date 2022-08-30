import { UserEntity } from '../entities';

export class UserRepository {
    async find() {
        const users = await UserEntity.find();

        return users;
    }

    async findOne(userId: number) {
        const user = await UserEntity.findOne(userId);

        return user;
    }

    async findByEmail(email: string) {
        const user = await UserEntity.findOne({
            where: {
                email: email
            }
        });

        return user;
    }

    async create(name: string, email: string, password: string) {
        const user = new UserEntity(
            name,
            email,
            await UserEntity.createEncryptedPassword(password)
        );

        await user.save();

        return user;
    }

    async update(userId: number, name: string, email: string, password: string) {
        const user = await UserEntity.findOne(userId);

        if (user) {
            user.name = name;
            user.email = email;

            if (password) {
                user.password = await UserEntity.createEncryptedPassword(password);
            }

            await user.save();
        }

        return user;
    }

    async delete(userId: number) {
        await UserEntity.delete(userId);
    }
}