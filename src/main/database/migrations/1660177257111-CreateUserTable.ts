import {
    MigrationInterface,
    QueryRunner,
    Table
} from 'typeorm';

export class CreateUserTable1660177257111 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'account',
            columns: [
                { name: 'uid', type: 'string', isPrimary: true, isNullable: false },
                { name: 'username', type: 'varchar', length: '50', isNullable: false },
                { name: 'name', type: 'varchar', length: '100', isNullable: false },
                { name: 'email', type: 'varchar', length: '100', isNullable: false },
                { name: 'password', type: 'varchar', length: '100', isNullable: false },
            ],
            uniques: [
                {
                    columnNames: ['username', 'email'],
                    name: 'un_account',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('account', true, true, true);
    }

}
