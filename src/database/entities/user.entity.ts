import {
    Entity,
    BaseEntity,
    PrimaryColumn,
    Column
} from 'typeorm';
import bcrypt from 'bcrypt';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(name: string, email: string, password: string) {
        super();        
        
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static async createEncryptedPassword(password: string) {
        const encrypted = await bcrypt.hash(password, 10);

        return encrypted;
    }

    async comparePassword(password: string) {
        const result = await bcrypt.compare(password, this.password);

        return result;
    }
}
