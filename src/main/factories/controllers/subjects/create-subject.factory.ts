import { Controller } from "../../../../app/shared/contracts";
import { CreateSubjectImp } from "../../../../app/features/subjects/domain/usecases";
import { SubjectRepository } from "../../../../app/features/subjects/infra";
import { CreateSubjectController } from "../../../../app/features/subjects/presentation/controllers";

export const makeCreateSubjectController = (): Controller => {
  const repository = new SubjectRepository();
  const usecase = new CreateSubjectImp(repository);
  return new CreateSubjectController(usecase);
}