import { Controller } from "../../../../app/shared/contracts";
import { DeleteSubjectImp } from "../../../../app/features/subjects/domain/usecases";
import { SubjectRepository } from "../../../../app/features/subjects/infra";
import { DeleteSubjectController } from "../../../../app/features/subjects/presentation/controllers";

export const makeDeleteSubjectController = (): Controller => {
  const repository = new SubjectRepository();
  const usecase = new DeleteSubjectImp(repository);
  return new DeleteSubjectController(usecase);
}