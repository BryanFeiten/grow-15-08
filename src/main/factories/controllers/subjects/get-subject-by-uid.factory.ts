import { Controller } from "../../../../app/shared/contracts";
import { GetSubjectByUidImp } from "../../../../app/features/subjects/domain/usecases";
import { SubjectRepository } from "../../../../app/features/subjects/infra";
import { GetSubjectByUidController } from "../../../../app/features/subjects/presentation/controllers";

export const makeGetSubjectByUidController = (): Controller => {
  const repository = new SubjectRepository();
  const usecase = new GetSubjectByUidImp(repository);
  return new GetSubjectByUidController(usecase);
}