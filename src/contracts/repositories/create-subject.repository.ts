import { SubjectDto } from "..";
import { SubjectEntity } from "../../database/entities";

export interface CreateSubjectRepository {
  createSubject(subject: SubjectDto): Promise<SubjectEntity>;
}