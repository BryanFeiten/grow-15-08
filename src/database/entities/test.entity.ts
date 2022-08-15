import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { EntityBase, SubjectEntity } from ".";

@Entity()
export class TestEntity extends EntityBase {
  @Column({ name: 'subject_uid' })
  subjectUid: string;

  @Column()
  grade: number;

  @ManyToOne(() => SubjectEntity, (entity) => entity.tests)
  @JoinColumn({ name: 'subject_uid', referencedColumnName: 'uid' })
  subject?: SubjectEntity;

  constructor(subjectUid: string, grade: number) {
    super();
    this.subjectUid = subjectUid;
    this.grade = grade;
  }
}
