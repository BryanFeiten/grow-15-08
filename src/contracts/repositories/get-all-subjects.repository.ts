import { SubjectEntity } from "../../database/entities";

export interface GetAllSubjects {
  getAllSubjects(): Promise<SubjectEntity[]>;
}