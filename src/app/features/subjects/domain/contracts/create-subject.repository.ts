import { SubjectEntity } from "../../../../../main/database/entities";
import { SubjectDto } from "../dtos";

export interface CreateSubjectRepository {
  createSubject(subject: SubjectDto): Promise<SubjectEntity>;
}