import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { EntityBase } from "./base.entity";
import { SubjectEntity } from "./subject.entity";

@Entity()
export class TestEntity extends EntityBase {
  @Column({ name: 'subject_uid' })
  subjectUid!: string;

  @Column()
  grade!: string;

  @ManyToOne(() => SubjectEntity, (entity) => entity.tests)
  @JoinColumn({ name: 'subject_uid', referencedColumnName: 'uid' })
  subject?: SubjectEntity;
}
