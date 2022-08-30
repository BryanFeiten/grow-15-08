import { Controller, HttpRequest, HttpResponse, Response } from "../../../../shared/contracts";
import { GetSubjectByUid } from "../../domain/usecases";

export class GetSubjectByUidController implements Controller {
  #usecase: GetSubjectByUid;

  constructor(usecase: GetSubjectByUid) {
    this.#usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    const subject = await this.#usecase.execute(uid);

    return Response.success(subject);
  }
}