import { SubjectEntity } from "../../database/entities";

export interface GetSubjectByUid {
  getSubjectByUid(subjectUid: string): Promise<SubjectEntity>;
}