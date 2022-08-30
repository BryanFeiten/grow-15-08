import { randomUUID } from "crypto";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { TestEntity } from ".";

@Entity({name: 'subjects'})
export class SubjectEntity extends BaseEntity {
  @PrimaryColumn()
  uid: string;

  @Column()
  name: string;

  @OneToMany(() => TestEntity, (entity) => entity.subject)
  tests?: TestEntity[];

  constructor(name: string) {
    super();
    this.uid = randomUUID();
    this.name = name;
  }
}
