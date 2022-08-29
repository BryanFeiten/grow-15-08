import { Controller } from "../../../../app/shared/contracts";
import { GetAllSubjectsImp } from "../../../../app/features/subjects/domain/usecases";
import { SubjectRepository } from "../../../../app/features/subjects/infra";
import { GetAllSubjectsController } from "../../../../app/features/subjects/presentation/controllers";

export const makeGetAllSubjectsController = (): Controller => {
  const repository = new SubjectRepository();
  const usecase = new GetAllSubjectsImp(repository);
  return new GetAllSubjectsController(usecase);
}