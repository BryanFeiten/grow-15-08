import {
    MigrationInterface, 
    QueryRunner,
    Table
} from 'typeorm';

export class CreateUserTable1660177257111 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user', true, true, true);    
    }

}
