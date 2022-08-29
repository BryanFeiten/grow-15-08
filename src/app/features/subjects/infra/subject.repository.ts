import {
  CreateSubjectRepository,
  CheckSubjectAlreadyExists,
  DeleteSubject,
  GetAllSubjects,
  GetSubjectByUid,
} from "../domain/contracts";
import { DomainError, InfraError } from "../../../shared/errors";
import { SubjectEntity } from "../../../../main/database/entities";
import { SubjectDto } from "../domain/dtos";

type Contracts = CreateSubjectRepository & CheckSubjectAlreadyExists
  & DeleteSubject & GetAllSubjects & GetSubjectByUid;

export class SubjectRepository implements Contracts {
  async getAllSubjects(): Promise<SubjectEntity[]> {
    const subjects = await SubjectEntity.find();

    if (subjects.length === 0) {
      throw new InfraError('getAllSubjects', 'Nenhuma disciplina encontrada');
    }

    return subjects;
  }

  async getSubjectByUid(subjectUid: string): Promise<SubjectEntity> {
    const subject = await SubjectEntity.findOne({
      where: { uid: subjectUid }
    })

    if (!subject) {
      throw new InfraError('getSubjectByUid', 'Disciplina não encontrada');
    }

    return subject;
  }

  async checkSubjectAlreadyExists(subjectName: string): Promise<boolean> {
    const subject = await SubjectEntity.findOne({
      where: { name: subjectName.toLowerCase() }
    })

    return !!subject;
  }

  async createSubject(subject: SubjectDto): Promise<SubjectEntity> {
    const newSubject = new SubjectEntity(subject.name.toLowerCase());

    await newSubject.save();

    return newSubject;
  }

  async deleteSubject(subjectUid: string): Promise<boolean> {
    const subject = await SubjectEntity.delete(subjectUid);

    return true;
  }
}