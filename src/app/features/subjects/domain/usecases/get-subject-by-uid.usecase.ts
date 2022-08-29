import { SubjectEntity } from "../../../../../main/database/entities";
import { SubjectRepository } from "../../infra";

export interface GetSubjectByUid {
  execute(subjectUid: string): Promise<SubjectEntity>;
}

export class GetSubjectByUidImp implements GetSubjectByUid {
  #repository: SubjectRepository;

  constructor(repository: SubjectRepository) {
    this.#repository = repository;
  }

  async execute(subjectUid: string): Promise<SubjectEntity> {
    const subject = await this.#repository.getSubjectByUid(subjectUid);

    return subject;
  }
}
