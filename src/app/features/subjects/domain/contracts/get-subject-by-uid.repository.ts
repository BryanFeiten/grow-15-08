import { SubjectEntity } from "../../../../../main/database/entities";

export interface GetSubjectByUid {
  getSubjectByUid(subjectUid: string): Promise<SubjectEntity>;
}