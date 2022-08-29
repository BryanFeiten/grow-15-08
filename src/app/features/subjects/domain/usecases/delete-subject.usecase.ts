import { SubjectRepository } from "../../infra";

export interface DeleteSubject {
  execute(subjectUid: string): Promise<boolean>;
}

export class DeleteSubjectImp implements DeleteSubject {
  #repository: SubjectRepository;

  constructor(repository: SubjectRepository) {
    this.#repository = repository;
  }

  async execute(subjectUid: string): Promise<boolean> {
    const result = await this.#repository.deleteSubject(subjectUid);

    return result;
  }

}
