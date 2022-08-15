import { Column, Entity, OneToMany } from "typeorm";
import { EntityBase } from "./base.entity";
import { TestEntity } from "./test.entity";

@Entity()
export class SubjectEntity extends EntityBase {
  @Column()
  name!: string;

  @OneToMany(() => TestEntity, (entity) => entity.subject)
  tests?: TestEntity[];
}
