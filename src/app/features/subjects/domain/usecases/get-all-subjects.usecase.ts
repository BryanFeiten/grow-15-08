import { SubjectEntity } from "../../../../../main/database/entities";
import { SubjectRepository } from "../../infra";

export interface GetAllSubjects {
  execute(): Promise<SubjectEntity[]>;
}

export class GetAllSubjectsImp implements GetAllSubjects {
  #repository: SubjectRepository;

  constructor(repository: SubjectRepository) {
    this.#repository = repository;
  }

  async execute(): Promise<SubjectEntity[]> {
    const subjects = await this.#repository.getAllSubjects();

    return subjects;
  }

}