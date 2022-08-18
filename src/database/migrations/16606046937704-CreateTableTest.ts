import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableTest16606046937704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tests',
            columns: [
                { name: 'uid', type: 'uuid', isNullable: false, isPrimary: true },
                { name: 'subject_uid', type: 'uuid', isNullable: false },
                { name: 'grade', type: 'decimal', precision: 4, scale: 2, isNullable: false, },
            ],
            foreignKeys: [
                new TableForeignKey({
                    columnNames: ['subject_uid'],
                    referencedColumnNames: ['uid'],
                    referencedTableName: 'subjects',
                }),
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tests', true, true, true);
    }

}
