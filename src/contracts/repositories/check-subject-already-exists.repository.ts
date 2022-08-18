import { SubjectEntity } from "../../database/entities";

export interface CheckSubjectAlreadyExists {
  checkSubjectAlreadyExists(subjectName: string): Promise<boolean>
}