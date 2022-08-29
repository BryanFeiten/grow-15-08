import { SubjectEntity } from "../../../../../main/database/entities";
import { InfraError } from "../../../../shared/errors";
import { SubjectRepository } from "../../infra";
import { SubjectDto } from "../dtos";

export interface CreateSubject {
  execute(subject: SubjectDto): Promise<SubjectEntity>;
}

export class CreateSubjectImp implements CreateSubject {
  #repository: SubjectRepository;

  constructor(repository: SubjectRepository) {
    this.#repository = repository;
  }

  async execute(subject: SubjectDto): Promise<SubjectEntity> {
    const subjectAlready = !!await this.#repository.checkSubjectAlreadyExists(subject.name);

    if (subjectAlready) {
      throw new InfraError('createSubject', 'Disciplina já cadastrada');
    }

    const newSubject = await this.#repository.createSubject(subject);

    return newSubject;
  }
}