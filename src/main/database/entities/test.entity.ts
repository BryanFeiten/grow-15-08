import { randomUUID } from "crypto";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { SubjectEntity } from ".";

@Entity({ name: 'tests'})
export class TestEntity extends BaseEntity {
  @PrimaryColumn()
  uid: string;

  @Column({ name: 'subject_uid' })
  subjectUid: string;

  @Column()
  grade: number;

  @ManyToOne(() => SubjectEntity, (entity) => entity.tests)
  @JoinColumn({ name: 'subject_uid', referencedColumnName: 'uid' })
  subject?: SubjectEntity;

  constructor(subjectUid: string, grade: number) {
    super();
    this.uid = randomUUID();
    this.subjectUid = subjectUid;
    this.grade = grade;
  }
}
