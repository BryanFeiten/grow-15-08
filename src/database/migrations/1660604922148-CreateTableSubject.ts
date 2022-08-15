import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableSubject1660604922148 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'subjects',
            columns: [
                { name: 'uid', type: 'uuid', isNullable: false, isPrimary: true },
                { name: 'name', type: 'varchar', length: '30', isNullable: false, isUnique: true },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subjects', true, true, true);
    }

}
