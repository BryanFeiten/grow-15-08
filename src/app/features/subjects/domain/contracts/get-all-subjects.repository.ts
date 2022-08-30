import { SubjectEntity } from "../../../../../main/database/entities";

export interface GetAllSubjects {
  getAllSubjects(): Promise<SubjectEntity[]>;
}