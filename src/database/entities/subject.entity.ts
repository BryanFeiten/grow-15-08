import { Column, Entity, OneToMany } from "typeorm";
import { EntityBase, TestEntity } from ".";

@Entity()
export class SubjectEntity extends EntityBase {
  @Column()
  name!: string;

  @OneToMany(() => TestEntity, (entity) => entity.subject)
  tests?: TestEntity[];
}
