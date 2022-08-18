import { SubjectDto } from "../contracts";
import { SubjectEntity } from "../database/entities";
import { SubjectRepository } from "../database/repositories";
import { InfraError } from "../errors";

export interface SubjectService {
  getSubjectByUid(subjectuid: string): Promise<SubjectEntity>
  getAllSubjects(): Promise<SubjectEntity[]>
  createSubject(subject: SubjectDto): Promise<SubjectEntity>;
  deleteSubject(subjectUid: string): Promise<boolean>;
}

export class SubjectServiceImp implements SubjectService {
  async getSubjectByUid(subjectUid: string) {
    const repository = new SubjectRepository();

    const subject = await repository.getSubjectByUid(subjectUid);

    return subject;
  }

  async getAllSubjects(): Promise<SubjectEntity[]> {
    const repository = new SubjectRepository();

    const subjects = await repository.getAllSubjects();

    return subjects;
  }

  async deleteSubject(subjectUid: string): Promise<boolean> {
    const repository = new SubjectRepository();

    const result = await repository.deleteSubject(subjectUid);

    return result;
  }

  async createSubject(subject: SubjectDto): Promise<SubjectEntity> {
    const repository = new SubjectRepository();
    
    const subjectAlready = !!await repository.checkSubjectAlreadyExists(subject.name);

    if (subjectAlready) {
      throw new InfraError('Disciplina já cadastrada');
    }

    const newSubject = await repository.createSubject(subject);

    return newSubject;
  }
}